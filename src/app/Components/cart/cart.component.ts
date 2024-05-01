import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/Book/book.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  constructor(private book:BookService,public dialog:MatDialog, public router:Router){}

cartvalue:any=[]
servercartvalue:any
useraddress:boolean=false
ordersummary:boolean=false
toggleplaceorder:boolean=true
ordersdata:boolean=true
  count:any=1
  cart:any={
    id:'',
    image:'',
    title:'',
    author:'',
    price:'',
    quantity:''
  }


  ngOnInit(): void {
    this.getData();
  }
  getData() {
    let reqData = {
      userid: localStorage.getItem('userid')
    };
    this.book.cartsList(reqData).subscribe((resp: any[]) => {
      console.log(resp);
      this.book.updateCartList(resp);
  
      // Move the subscription inside this block to ensure it only runs after the cart data is updated
      this.book.currCartList.subscribe((resp: any[]) => {  // Explicitly define type for resp
        this.book.Carts = resp; // Assuming Carts is a property of BookService
        this.cart = resp;
        console.log(this.cart);
        for (let i = 0; i < resp.length; i++) {
          this.cartvalue.push(resp[i]);
          console.log(this.cartvalue);
        }
  
        // Assuming Books is a property of BookService
        const cartlistdata = this.book.Books.filter((item: any) => {
          return this.cartvalue.some((cartItem: any) => {
            if (cartItem.id === item.id) {
              item.quantity = cartItem.quantity;
              return true;
            }
            return false;
          });
        });
        console.log(cartlistdata);
        //this.cart=cartlistdata
      }); // Close the subscription block
    }); // Close the outer subscription block
    
  }
 



increment(cartItem: any){
  cartItem.quantity++;
  console.log('increades')

}

decrement(cartItem: any){
  if(cartItem.quantity<=1){
    cartItem.quantity=1;
  }
  else{
    cartItem.quantity--;
  }
  
}

handleevent($event:any){
  this.ordersummary=$event
}
opendialog() {
  
  if (localStorage.getItem('token')) {
    this.useraddress = true;
  } else {
    const dialogRef = this.dialog.open(LoginSignupComponent, { width: '740px', height: '475px' });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle any actions after the dialog is closed, if needed
    });
  }
}

deletecart(data:any){

}

orderSucess(){
  
  this.router.navigate(['Dashboard/ordersucess']);
  console.log('Succesfull');
}

}
