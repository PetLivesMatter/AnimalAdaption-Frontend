import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { registerModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //link hatalı olabilir
  apiUrl = 'https://localhost:44335/api/auth';
  constructor(private httpClient:HttpClient) { }
  login(loginModel:LoginModel):Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(this.apiUrl+"/login",loginModel)
  }
  register(registerModel:registerModel):Observable<TokenModel>{
    let newPath=this.apiUrl+"/register"
    return this.httpClient.post<TokenModel>(newPath,registerModel)
  }
  
  logOut(){
    localStorage.clear();
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}
