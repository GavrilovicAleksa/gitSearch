import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HeaderComponent } from './core/header/header.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { SearchModule } from './search/search.module';
import { SaveModule } from './save/save.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './shared/services/auth.service';
import { UserManageService } from './shared/services/user-manage.service';
import { UserSearchService } from './shared/services/user-search.service';
import { RepoManageService } from './shared/services/repo-manage.service';
import { AuthComponent } from './auth/auth.component';
import { UserLinksService } from './shared/services/user-links.service';
import { SingleUserDisplayComponent } from './shared/single-user-display/single-user-display.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: "/not-found"}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    SharedModule,
    SearchModule,
    SaveModule,
    AuthModule,
  ],
  providers: [AngularFireAuth,SingleUserDisplayComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
