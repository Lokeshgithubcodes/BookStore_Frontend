import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../Services/Book/book.service';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.scss']
})
export class OrdersummaryComponent implements OnInit {
  constructor(private book: BookService) {}
  cost:number=600

  cart:any={
    id:'',
    image:'',
    title:'',
    author:'',
    price:'',
    quantity:''
  }
  Books: any;
  cartvalue: any;
  count: any;
  cartlistdata: any;

  ngOnInit(): void {
    this.book.currCartList.subscribe(resp => {debugger
      console.log('Cart Data:', resp); // Log cart data
      this.cartvalue = resp;
      console.log("order summary");
      console.log(this.cartvalue);

      this.book.getBooks().subscribe(response => {
        this.Books = response.data;

        // Filtering and updating book quantities
        this.cartlistdata = this.Books.filter((item: any) => {
          const cartItem = this.cartvalue.find((cartItem: any) => cartItem.id === item.id);
          if (cartItem) {
            item.quantity = cartItem.quantity;
            return true;
          }
          return false;
        });

        // Log cartlistdata here after it's populated
        console.log('Filtered Books:', this.cartlistdata);
        this.cart=this.cartlistdata;
      });
    });
  }
}
