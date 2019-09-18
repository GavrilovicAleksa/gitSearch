import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserSearchService } from '../../shared/services/user-search.service';
import { ApiResponse } from './api-response.model';
import { Subscription } from 'rxjs';
import { SingleUserDisplayComponent } from 'src/app/shared/single-user-display/single-user-display.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  UserObj: {
    name: string;
  };
  numberOfResults: number;
  usersArr: Object[];

  constructor(private route: ActivatedRoute, private usersearch: UserSearchService,private router: Router, private singleUSer: SingleUserDisplayComponent) {
   }

  nameSubscription: Subscription
  dataSubscription: Subscription



  ngOnInit() {
    this.UserObj = {
      name : this.route.snapshot.params['name']
    };
    this.nameSubscription = this.route.params.subscribe(
        (params: Params) => {
          this.UserObj.name = params['name'];
          this.dataSubscription = this.usersearch.getNames(this.UserObj.name).subscribe(
            (response: ApiResponse) => {
              var data = response;
              this.numberOfResults = data.total_count;
              this.usersArr = data.items;
              console.log(data.items);
            },
            (error) => {console.log(error)}
        );
        } 
        
    );  
      
  }
  ngOnDestroy(){
    this.nameSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

}
