import { Component, OnInit } from '@angular/core';
//import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.scss'
})
export class LoginSignupComponent implements OnInit {

   //constructor(public dialogRef: MatDialogRef<LoginSignupComponent>) { }

  ngOnInit(): void {
  }  
    // onNoClick(): void {
    //   this.dialogRef.close();
    // }
  login=true;
  goToLogin(){
    this.login=true;
  }
  goToSignUp(){
    this.login=false;
  }


}