import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrl: './logincomponent.component.scss'
})
export class LogincomponentComponent {

  submitted=false;
  display=true;
  constructor(private user:UserService,private formBuilder:FormBuilder){}
  loginForm=new FormGroup({
    emailId:new FormControl(''),
    password:new FormControl('')
  });
  onSubmit(){
    this.submitted=true;
    if(this.loginForm.valid){
      const reqData={
        emailId:this.loginForm.value.emailId,
        password:this.loginForm.value.password
      };
      console.log(reqData);
      this.user.UserLogin(reqData).subscribe((response:any)=>{
        console.log(response);
        if(response){
          alert('Login Success');
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('emailId',response.data.emailId);
          localStorage.setItem('userid', response.data.id);
          localStorage.setItem('fullName',response.data.fullName);
          localStorage.setItem('mobile',response.data.mobile);
        }
      })
    }
  }
  
}