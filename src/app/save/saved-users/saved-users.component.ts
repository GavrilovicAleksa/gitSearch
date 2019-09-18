import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserManageService } from 'src/app/shared/services/user-manage.service';

@Component({
  selector: 'app-saved-users',
  templateUrl: './saved-users.component.html',
  styleUrls: ['./saved-users.component.css']
})
export class SavedUsersComponent implements OnInit {

  items: Observable<any[]>

  usersArr;

  constructor(private afAuth: AngularFireAuth,private db: AngularFireDatabase, private manage: UserManageService) { 
    this.db.list(`items/${this.afAuth.auth.currentUser.uid}/users`).valueChanges().subscribe(data=>{this.usersArr = data;console.log(data)});
  }


  ngOnInit() {
  }

}
