import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SavedUsersComponent } from './saved-users/saved-users.component';
import { SavedReposComponent } from './saved-repos/saved-repos.component';
import { AddRepoComponent } from './add-repo/add-repo.component';
import { SaveRoutingModule } from './save-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SavedUsersComponent,
    SavedReposComponent,
    AddRepoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SaveRoutingModule,
    SharedModule
  ],
  exports:[
    SavedUsersComponent,
    SavedReposComponent,
    AddRepoComponent
  ]
})
export class SaveModule { }
