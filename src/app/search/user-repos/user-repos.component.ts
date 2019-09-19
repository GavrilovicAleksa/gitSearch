import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserLinksService } from 'src/app/shared/services/user-links.service';
import { UserSearchService } from 'src/app/shared/services/user-search.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {

  username

  repoArr

  owner: String

  reposSubscription: Subscription
  usernameSubscription: Subscription

  constructor(private userRepos: UserSearchService, private route: ActivatedRoute,private repos: UserLinksService,private router: Router) { }

  ngOnInit() {
  
    this.username = this.repos.getRepos();
    if(this.username == undefined)
    {
      this.router.navigate(['**']);
      return;
    }
    this.reposSubscription = this.userRepos.getRepos(this.username).subscribe(
      (response: Response) => {
        this.repoArr = response;
        this.owner = this.repoArr[0].owner.login;
        console.log(this.repoArr);
      }
    );
  }

}
