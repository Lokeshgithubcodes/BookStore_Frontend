import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { Book, Cart } from '../../Model/bookstore.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  token:any
  Books:Book[]=[]
  Carts:Cart[]=[]

  constructor(private httpService:HttpService,private http:HttpClient) {this.token=localStorage.getItem('token') }

  getaddress(reqData: any) {
    const userid = reqData.userid;
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.getService(`https://localhost:7192/api/Address/GetAddressByUserId?userid=${userid}`, true, header);
  }
  getBooks(): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };

    return this.httpService.getService('https://localhost:7192/api/Book/GetAllBooks', true,header,);
  }

  private cartList = new BehaviorSubject<any>([]);
  currCartList = this.cartList.asObservable();
  updateCartList(newValue: any[]) {
    this.cartList.next(newValue);
  }

  cartsList(reqData:any):Observable<any>{
    const userid = reqData.userid;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(`https://localhost:7192/api/Cart/GetCardByUserId?userid=${userid}`,true,header);
  }
 
  private wishList(reqData:any):Observable<any>{
    const userid=reqData.userid;
    
  }

}
