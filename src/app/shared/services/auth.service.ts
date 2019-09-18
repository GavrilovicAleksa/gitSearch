import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FirebaseAuth } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  token: string

  isLogged: string

  user: Observable<firebase.User>;

  items: AngularFireList<object>;

  userId: string;

  signUpUser(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      user => {
        var id = this.afAuth.auth.currentUser.uid;
        this.userId= id;
        this.router.navigateByUrl("/login");
      }
          )
    .catch(
      error => console.log(error)
    );
  }
  login(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        
        this.afAuth.auth.currentUser.getIdToken().then((token: string) => {this.token = token;this.router.navigateByUrl('/')}
        )
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }
  logout(){
    this.afAuth.auth.signOut()
    this.token = null;
  }

  constructor(private afAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) { 
    this.user = afAuth.authState;
  }
  isAuth(){
    return this.token != null;
  }
}
