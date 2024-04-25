import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  submitted=false;
  display=true;
  constructor(private user:UserService,private formBuilder:FormBuilder){}
  signupForm=new FormGroup({
    fullName:new FormControl('',Validators.required),
    emailId:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
    mobile:new FormControl('',Validators.required)
  });
  onSubmit(){
    this.submitted=true;
    if(this.signupForm.valid){
      const reqData={
        emailId:this.signupForm.value.emailId,
        password:this.signupForm.value.password,
        fullName:this.signupForm.value.fullName,
        mobile:this.signupForm.value.mobile

      };
      console.log(reqData);
      this.user.register(reqData).subscribe((response:any)=>{
        console.log(response);
        if(response){
          alert('SignUp Successs Go For Login');
        }
      })
    }
  }
}