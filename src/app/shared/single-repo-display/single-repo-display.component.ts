import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../models/repository.model';
import { RepoManageService } from '../services/repo-manage.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-single-repo-display',
  templateUrl: './single-repo-display.component.html',
  styleUrls: ['./single-repo-display.component.css']
})
export class SingleRepoDisplayComponent implements OnInit {
  @Input() singleRepo: Repository
  pageType = true;
  marker = 0;

  addUser(){
    this.manage.addRepoFav(this.singleRepo);
  }

  removeUser(){
    this.manage.removerepoFav(this.singleRepo.repoKey, this.afAuth.auth.currentUser.uid);
  }

  constructor(private manage: RepoManageService,private route: ActivatedRoute,
    private afAuth: AngularFireAuth,private auth: AuthService) {
    this.route.url.subscribe(data => {
      if(data[0].path == "savedRepos")
        this.pageType = false;
    })
   }

  ngOnInit() {
    if(this.auth.isAuth()){
      this.manage.isRepoDuplicate(this.singleRepo.id, this.afAuth.auth.currentUser.uid).subscribe(data=>{console.log(this.marker = data.length)})
    }
  }
  markerCheck(){
    if(this.marker > 0)
      return true;
    return false;
  }
}
