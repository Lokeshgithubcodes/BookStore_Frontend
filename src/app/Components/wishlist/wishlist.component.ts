import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/Book/book.service';
import { Router } from '@angular/router';
import { response } from 'express';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {

  constructor(private book: BookService, public router:Router) {}

  cartvalue: any[] = [];
  Books: any;
  count: any = 1;
  id: any = 1;
  cart: any = {
    id: '',
    image: '',
    title: '',
    author: '',
    price: '',
    quantity: ''
  };

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const reqData = {
      userid: localStorage.getItem('userid')
    };
  
    this.book.wishList(reqData).subscribe((response: any) => {
      console.log('normal',response);
      
      if (response.success && Array.isArray(response.data)) {
        const wishlistItems = response.data;
        this.book.updatewhishList(wishlistItems);
  
        // Update cartvalue and perform filtering
        this.cartvalue = wishlistItems;
        console.log('cartvalue', this.cartvalue);
  
        // Fetch books data
        this.book.getBooks().subscribe((booksResponse: any) => {
          this.Books = booksResponse.data;
  
          // Filter wishlist data
          const wishlistData = this.Books.filter((book: any) => {
            return this.cartvalue.some((cartItem: any) => {
              return Number(cartItem.id) === book.id;
            });
          });
          this.cart=wishlistData;
          console.log('Wishlist Data:', wishlistData);
  
          // Assign the count based on the first item's quantity
          if (this.cartvalue.length > 0 && this.cartvalue[0].quantity) {
            this.count = this.cartvalue[0].quantity;
          }
        });
      } else {
        console.error('Invalid response format:', response);
      }
    });
  }

  deletewhishlist(cardItem:any){
    let reqData={
      userid: localStorage.getItem('userid'),
      bookid: cardItem
    }
    console.log(cardItem);
    console.log(reqData);
    this.book.wishlistDelete(reqData).subscribe((response:any)=>{
      console.log(response);
    })
    
  }

  tocards(){
    this.router.navigate(['Dashboard/cards'])
  }
}
