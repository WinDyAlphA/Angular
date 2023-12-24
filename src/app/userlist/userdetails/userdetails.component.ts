import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../User.model';
import { UserService } from '../../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  userTransmis!: User | undefined;

  // @Output()
  //assignmentRendu = new EventEmitter<string>;

  selectAssignment: User | null = null
  subscriptions: Subscription[] = []
  ngOnInit(): void {
    
    
      const id = parseInt(this.activatedRoute.snapshot.params['id'], 10);
      // this.assignmentService.selectAssignment(id)

      let subscription = this.userService.selectUser(id).subscribe((user:User) => {
        this.userTransmis = user
      })
  }
  
}
