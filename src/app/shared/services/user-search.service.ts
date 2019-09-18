import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  constructor(private http: HttpClient) {
   }
  getNames(name: string){

    return this.http.get(`https://api.github.com/search/users?q=${name}`);
      
  }
  getRepos(query: string){
    return this.http.get(query);
  }
}
