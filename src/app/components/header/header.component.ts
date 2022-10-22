import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{

  constructor(public auth: AngularFireAuth) { }

  authSub?: Subscription;

  isAuthenticated: boolean = false;
  userName?: string;

  ngOnInit() {
    this.authSub = this.auth.authState.subscribe((user) => {
      if(user?.displayName){
        this.isAuthenticated = true;
        this.userName = user.displayName;
      } else {
        this.isAuthenticated = false;
        this.userName = undefined;
      }
    })
  }

  ngOnDestroy(): void {
      this.authSub?.unsubscribe();
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      ({ user }) => {
        if(user?.displayName){
          this.isAuthenticated = true;
          this.userName = user.displayName;
        }
      }
    );
  }

  logout() {
    this.auth.signOut();
  }
}
