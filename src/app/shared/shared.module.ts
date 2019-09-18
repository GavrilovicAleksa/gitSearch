import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SingleUserDisplayComponent } from './single-user-display/single-user-display.component';
import { SingleRepoDisplayComponent } from './single-repo-display/single-repo-display.component';
import { AuthService } from './services/auth.service';
import { UserManageService } from './services/user-manage.service';
import { UserSearchService } from './services/user-search.service';
import { UserLinksService } from './services/user-links.service';
import { RepoManageService } from './services/repo-manage.service';

@NgModule({
  declarations: [
    SingleUserDisplayComponent,
    SingleRepoDisplayComponent
],
  imports: [
    RouterModule,
    CommonModule,
  ], 
  exports:[
    SingleUserDisplayComponent,
    SingleRepoDisplayComponent
  ],
  providers:[UserManageService,UserLinksService]
})
export class SharedModule { }
