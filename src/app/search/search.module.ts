import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { SearchRoutingModule } from './search-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserManageService } from '../shared/services/user-manage.service';
import { UserSearchService } from '../shared/services/user-search.service';
import { AuthService } from '../shared/services/auth.service';
import { RepoManageService } from '../shared/services/repo-manage.service';

@NgModule({
  declarations: [
    UserComponent,
    UserReposComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    UserComponent,
    UserReposComponent
  ],
  providers:[
]
})
export class SearchModule { }
