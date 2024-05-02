import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../Services/Book/book.service';
import { HttpService } from '../../Services/Http/http.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'] // Use 'styleUrls' instead of 'styleUrl'
})
export class BookDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private book: BookService, private httpService: HttpService) {}

  id: any;
  Books: any;
  count:any=1
  button=true

  newdata: any = {
    id: '',
    author: '',
    price: '',
    quantity: '',
    tittle: '',
    description: '',
    image: ''
  };

  ngOnInit(): void {
    // Accessing the 'id' route parameter
    this.id = this.activatedRoute.snapshot.params;

    // Fetching books from the service
    this.book.getBooks().subscribe(resp => {
      this.Books = resp.data;

      // Filtering the book with the specified 'id'
      const result = this.Books.filter((item: any) => item.id ==this.id.id);
      console.log(result);
      this.newdata=result[0];
      console.log(this.newdata); 
    }); // Added closing parentheses here
  }

  add(cartItem:any){

    let reqData={
      userid:localStorage.getItem('userid'),
      bookid:cartItem
    }
    console.log(reqData);

    this.book.addWish(reqData).subscribe((resp:any)=>{
      console.log(resp);
    })

  }
}
