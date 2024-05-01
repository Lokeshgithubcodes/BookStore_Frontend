import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  @Input() Book:any;

  ngOnInit(): void {}

  // goToBookDetails(){
  //   this.router.navigate(['/bookdetails', this.Book.id])
  // }


}
