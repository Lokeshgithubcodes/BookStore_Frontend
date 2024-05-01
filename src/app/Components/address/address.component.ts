import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookService } from '../../Services/Book/book.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent implements OnInit {

  constructor(private book:BookService){}

  userid:any;
  addressdata:any={
    address:'',
    city:'',
    fullAddress:'',
    state:'',
    type:''
  }
  response:any

  orders:boolean=true
  address:boolean=true
  removebutton:boolean=true
  editaddress:boolean=true
  
  
  name=localStorage.getItem('fullName');
  mobile=localStorage.getItem('mobile');
  @Output() order=new EventEmitter<any>();
  ngOnInit(): void {
    this.userid=localStorage.getItem('userid');
    console.log(this.userid);
    let reqData={
      userid:this.userid
    }
    this.book.getaddress(reqData).subscribe(result=>{
      debugger
      this.response=result;
      this.addressdata=this.response.data
    })
  }
  gotoorders(){
    this.order.emit(this.orders)
    this.removebutton=false;
  }

  handleaddress(){
    this.address=false
  }

  edit(){
    this.editaddress=false;
  }
  cancel(){
    this.editaddress=true;

}
}
