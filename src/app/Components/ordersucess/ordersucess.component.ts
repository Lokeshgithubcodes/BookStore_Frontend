import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordersucess',
  templateUrl: './ordersucess.component.html',
  styleUrl: './ordersucess.component.scss'
})
export class OrdersucessComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotocards(){
    this.router.navigate(['Dashboard/cards'])
  }
}
