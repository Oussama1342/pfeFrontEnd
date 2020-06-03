import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthentificationService} from '../authentification.service'
import { Router } from '@angular/router';
import {userauth} from '../Model/userauth'

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  
  
  mode : number = 0;
  form = new FormGroup({
    nusernamClient : new FormControl('',Validators.required),
    passwordClClient : new FormControl('',Validators.required)


  })

  user:userauth;
  constructor(private authService:AuthentificationService, private router:Router) { }

  ngOnInit() {
  }
  onLogin(){

    localStorage.setItem('username',$('#username').val());
    this.user= new userauth ; 
    this.user.username=$('#username').val();
    this.user.password = $('#pass').val();
    this.authService.login(this.user).
          subscribe(resp=>{
          let jwt = resp.headers.get('Authorization');
          this.authService.saveToken(jwt);
          this.authService.login(this.user);
    this.router.navigateByUrl("/recomandation");

  },
  err=>{
    alert("Veillez verifier votre login/password")
  })
  /* this.authService.login(this.user)
    .subscribe(resp=>{
      let jwt= resp.headers.get('Authorizaion');
      console.log(resp);

    },err=>{
      this.mode=1;
    })*/

   
  
}
}
