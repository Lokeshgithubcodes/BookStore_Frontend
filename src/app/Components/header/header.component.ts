import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginSignupComponent } from '../login-signup/login-signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  constructor(private dialog:MatDialog,private router:Router){}
  loginclick:boolean=false
  loggedin:boolean=false

  profiledata(){
    if(localStorage.getItem('token')){
      this.loggedin=!this.loggedin;
    }
    else{
      this.loginclick=!this.loginclick
    }
  }
  login(){
  const dialogRef=this.dialog.open(LoginSignupComponent,{width:'740px',height:'475px'});
  dialogRef.afterClosed().subscribe(result=>{
  console.log('The dialog was closed');

  });
  this.loginclick=!this.loginclick;
}
logout(){
   this.loggedin=!this.loggedin;
   localStorage.removeItem('token');

}
profile(){
  this.router.navigate(['Dashboard/personal'])
  console.log('Personal');
}

tocart(){
  this.router.navigate(['Dashboard/carts'])

}

gotoWish(){
  this.router.navigate(['Dashboard/wish'])
  console.log('wishlist Successfull');
}

gotoOrders(){
  this.router.navigate(['Dashboard/myorders'])
  console.log('Order Sucessfull');
}

}
