import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrl: './personaldetails.component.scss'
})
export class PersonaldetailsComponent implements OnInit {

  name:any;
  email:any;
  password:any;
  mobile:any;

  ngOnInit(): void {
    this.name=localStorage.getItem('fullName')
    this.email=localStorage.getItem('emailId')
    this.password=localStorage.getItem('password')
    this.mobile=localStorage.getItem('mobile')
  }


}