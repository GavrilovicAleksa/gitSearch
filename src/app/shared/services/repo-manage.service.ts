import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireAction, AngularFireList } from '@angular/fire/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FirebaseOperation } from '@angular/fire/database/interfaces';
import { Repository } from 'src/app/shared/models/repository.model';
import { AuthService } from 'src/app/shared/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RepoManageService {

  private key: string

  private userId: string;

  reposArr: any[];

  addRepoFav(repo: Repository){
    var ref = this.db.database.ref(`items/${this.userId}/repos`);
    var key = ref.push().key;
    repo.repoKey = key;
    ref.child(key).set(repo);
  }

  isRepoDuplicate(idrepo, repo){
    return this.db.list(`/items/${repo}/repos`, ref => ref.orderByChild('id').equalTo(idrepo)).valueChanges();
  }

  removerepoFav(key, id){
      this.db.list(`items/${id}/repos`).remove(key);
      console.log(key,id);
  }
  
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase,private auth: AuthService) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })

   }
}
