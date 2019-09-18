import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserManageService } from 'src/app/shared/services/user-manage.service';

@Component({
  selector: 'app-saved-repos',
  templateUrl: './saved-repos.component.html',
  styleUrls: ['./saved-repos.component.css']
})
export class SavedReposComponent implements OnInit {

  items: Observable<any[]>

  reposArr;

  constructor(private afAuth: AngularFireAuth,private db: AngularFireDatabase, private manage: UserManageService) { 
    this.db.list(`items/${this.afAuth.auth.currentUser.uid}/repos`).valueChanges().subscribe(data=>{this.reposArr = data;console.log(data)});
  }

  ngOnInit() {
  }

}
