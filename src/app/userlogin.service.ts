import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user,LoginUser } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  registerUser(data:user){
    return this.http.post("https://vast-shore-34136.herokuapp.com/user/register",data)
  }
  loginUser(data:LoginUser){
    return this.http.post("https://vast-shore-34136.herokuapp.com/user/login",data)
  }
}