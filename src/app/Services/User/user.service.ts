import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any
  constructor(private httpService:HttpService) {this.token=localStorage.getItem('token') }

  UserLogin(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
        //'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:7192/api/user/Login',reqData,false,header);
  }

  register(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
        //'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService('https://localhost:7192/api/user/Register',reqData,false,header);
  }
}