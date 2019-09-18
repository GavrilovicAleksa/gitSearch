import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireAction, AngularFireList } from '@angular/fire/database';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FirebaseOperation } from '@angular/fire/database/interfaces';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserManageService {

  private key: string

  private userId: string;

  usersArr: any[];

  addUserFav(user: User){
    var ref = this.db.database.ref(`items/${this.userId}/users`);
    var key = ref.push().key;
    user.userKey = key;
    ref.child(key).set(user);
  }

  isUserDuplicate(idUser, user){
    return this.db.list(`/items/${user}/users`, ref => ref.orderByChild('id').equalTo(idUser)).valueChanges();
  }

  removeUserFav(key, id){
      this.db.list(`items/${id}/users`).remove(key);
      console.log(key,id);
  }
  
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase,private auth: AuthService) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })

   }
}
