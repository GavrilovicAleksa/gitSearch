import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLinksService {

  private reposUrl: string;

  private commitsUrl: string;

  addRepoUrl(url){
    this.reposUrl = url;
  }

  addCommitsUrl(url){
    this.commitsUrl = url;
  }
  getRepos(){
    return this.reposUrl;
  }
  getCommits(){
    return this.commitsUrl;
  }

  

  constructor() { }
}
