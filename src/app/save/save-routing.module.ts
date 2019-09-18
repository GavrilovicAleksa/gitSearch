import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavedUsersComponent } from './saved-users/saved-users.component';
import { SavedReposComponent } from './saved-repos/saved-repos.component';
import { AddRepoComponent } from './add-repo/add-repo.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';

const saveRoutes: Routes = [
    {path: 'savedUsers', component: SavedUsersComponent, canActivate: [AuthGuardService]},
    {path: 'savedRepos', component: SavedReposComponent, canActivate: [AuthGuardService]},
    {path: 'addRepo', component: AddRepoComponent, canActivate: [AuthGuardService]},
];

@NgModule({
    imports: [
        RouterModule.forChild(saveRoutes)
    ],
    exports:[RouterModule]
})
export class SaveRoutingModule { }