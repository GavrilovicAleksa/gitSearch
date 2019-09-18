import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserReposComponent } from './user-repos/user-repos.component';

const searchRoutes: Routes = [
    {path: 'user/:name', component: UserComponent,runGuardsAndResolvers: 'paramsChange'},
    {path: 'user-repos', component: UserReposComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(searchRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SearchRoutingModule { }
