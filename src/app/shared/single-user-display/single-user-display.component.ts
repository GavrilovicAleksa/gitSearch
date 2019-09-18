import { Component, OnInit, Input } from '@angular/core';
import { UserLinksService } from '../services/user-links.service';
import { AuthService } from '../services/auth.service';
import { UserManageService } from '../services/user-manage.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-single-user-display',
  templateUrl: './single-user-display.component.html',
  styleUrls: ['./single-user-display.component.css'],
})
export class SingleUserDisplayComponent implements OnInit {

  @Input() singleUser: User;
  pageType = true;
  marker = 0;

  addUser(){
    this.manage.addUserFav(this.singleUser);
  }

  removeUser(){
    this.manage.removeUserFav(this.singleUser.userKey, this.afAuth.auth.currentUser.uid);
  }

  constructor(private repos: UserLinksService, private auth: AuthService,private manage: UserManageService,private db: AngularFireDatabase, private afAuth: AngularFireAuth, private route: ActivatedRoute) { 
    this.route.url.subscribe(data => {
      if(data[0].path == "savedUsers")
        this.pageType = false;
    })
    
  }

  addRepoUrl(){
    this.repos.addRepoUrl(this.singleUser.repos_url);
  }

  ngOnInit() {
    if(this.auth.isAuth()){
      this.manage.isUserDuplicate(this.singleUser.id, this.afAuth.auth.currentUser.uid).subscribe(data=>{console.log(this.marker = data.length)})
    }
  }
  markerCheck(){
    if(this.marker > 0)
      return true;
    return false;
  }

}
