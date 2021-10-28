import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../userlogin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private userService:UserService,) { 
    this.loginForm=new FormGroup({
      'username':new FormControl('', Validators.required),
      'password':new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  submit(){
    this.userService.loginUser(this.loginForm.value).subscribe((data)=>{
      alert("Logged in Successfully")
    },(err)=>{
      console.log(err)
    })
  }
}
