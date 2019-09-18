import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  title: string;

  authType: string;



  constructor(private auth: AuthService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
    });
  }

  onSignUp(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authType === 'login' ? this.auth.login(email, password) : this.auth.signUpUser(email, password);
  }

}
