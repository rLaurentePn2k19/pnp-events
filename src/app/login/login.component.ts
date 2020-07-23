import { Component, OnInit } from '@angular/core';
import { Account } from '../data-models';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;

  currentuser: Account = {
    username: 'test',
    password: 'test'
  }

  constructor(
    private router: Router,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.eventService.currentUserAccount.subscribe(currentUser => {
      console.log(currentUser);
    })

  }

  login(UserAccount: Account) {
    console.log(UserAccount.username, " username input")
    console.log(UserAccount.password, " password input")
    if (UserAccount.username === this.currentuser.username && UserAccount.password === this.currentuser.password) {
      console.log('Allowed');
      this.eventService.updateCurrentUser(UserAccount);
      this.router.navigate(['/events'])
    } else {
      console.log('NotAllowed');
    }
  }

}