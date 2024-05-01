import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/Data/data.service';
import { BookService } from '../../Services/Book/book.service';
import { Book } from '../../Model/bookstore.model';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrl: './display-cards.component.scss'
})
export class DisplayCardsComponent implements OnInit {

  constructor(private data:DataService,private book:BookService){}

  BooksPrint:Book[]=[]
  reqData:any;

  bookcount:number=0;
  ngOnInit(): void {
    
    

    this.data.searchBookAccess.subscribe(resp=>{
      this.searchString=resp
    })
    
    this.book.getBooks().subscribe(response=>{
      console.log(response);
      this.BooksPrint=response.data;
      this.bookcount=response.data.length;
    })
  }
  searchString='';
  page:number=1;
  count:number=0;
  booksize:number=12;

}
