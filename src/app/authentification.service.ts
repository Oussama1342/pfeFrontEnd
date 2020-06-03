import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {userauth } from './Model/userauth'
//import {JwtHelper} from 'angular2-jwt'
import { JwtHelperService } from "@auth0/angular-jwt";




@Injectable()
export class AuthentificationService {

  private host :string="http://localhost:8080";
  private jwtToken = null ;
  private roles:Array<any>=[];

  constructor(private http: HttpClient) { }
   
  login(user:userauth){
   return this.http.post(this.host+'/login',user,{observe:'response'});
   console.log(user.username);
   
    console.log("COmpleted");
  }
  saveToken(jwt:string){
this.jwtToken=jwt;
localStorage.setItem('token',jwt);
let helper = new JwtHelperService();
this.roles=helper.decodeToken(this.jwtToken).roles;

  }
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }

  public generateToken(request){

    return this.http.post("http://localhost:8080/login",request,{responseType: 'text' as 'json'}) ;

  }
  public welcon(token){
    let tokenStr = 'Bearer'+token ;
    const header = new HttpHeaders().set("Authorization",tokenStr)
    return this.http.get("http://localhost:8080/hellowt",{responseType: 'text' as 'json'});
  }






}
