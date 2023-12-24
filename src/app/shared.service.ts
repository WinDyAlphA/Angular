import { Injectable, NgModule } from '@angular/core';
import { User } from './userlist/User.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports: [
  ]
})
export class UserService {
  private users = new BehaviorSubject<User[]>([]);

  constructor(private apiService: ApiService) {
    this.loadUsers();
  }

  private loadUsers() {
    this.apiService.getUsers().subscribe(
      (users:User[]) => {
        this.users.next(users);
      },
      (error:any) => {
        console.error('Error loading users from API', error);
      }
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.users;
  } 

  selectUser(id: number): Observable<User> {
    return this.apiService.getUserById(id);
  }

  deleteUser(id: number): Observable<any> {
    return this.apiService.deleteUserById(id);
  }

  modifierUser(id: number, user: User): Observable<any> {
    return this.apiService.modifierUserById(id, user);
  }
    

    
    
}