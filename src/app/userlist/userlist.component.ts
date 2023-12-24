// userlist.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../userlist/User.model';
import { UserService } from '../shared.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit, OnDestroy {
  constructor(private readonly userService: UserService) {}

  users: User[] = [];
  dataSource = new MatTableDataSource<User>();
  subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  ngOnInit() {
    let subscription = this.userService.getAllUsers().subscribe(
      (users) => {
        this.users = users;
        // Assurez-vous de mettre à jour la propriété 'data' de 'dataSource' ici
        this.dataSource = new MatTableDataSource<User>(this.users);
        
      }
    );
    this.subscriptions.push(subscription);
  }

  deleteUser(id: number) {
    let subscription = this.userService.deleteUser(id).subscribe(
      () => {
        this.users = this.users.filter((user) => user.id !== id);
        // Mettez à jour la propriété 'data' de 'dataSource' après la suppression
        this.dataSource.data = this.users;
      },
      (error) => {
        console.error('Error deleting user', error);
      }
    );
    this.subscriptions.push(subscription);
  }

  modifierUser(id: number, user: User) {
    let subscription = this.userService.modifierUser(id, user).subscribe(
      () => {
        this.users = this.users.filter((user) => user.id !== id);
        // Mettez à jour la propriété 'data' de 'dataSource' après la modification
        this.dataSource.data = this.users;
      },
      (error) => {
        console.error('Error deleting user', error);
      }
    );
    this.subscriptions.push(subscription);
  }
  modifButtonClicked(id: number) {
    console.log('modifButtonClicked', id);
  }
}
