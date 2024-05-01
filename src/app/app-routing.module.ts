import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PersonaldetailsComponent } from './Components/personaldetails/personaldetails.component';
import { BookcartComponent } from './Components/bookcart/bookcart.component';
import { CartComponent } from './Components/cart/cart.component';
import { DisplayCardsComponent } from './Components/display-cards/display-cards.component';
import { AddressComponent } from './Components/address/address.component';
import { OrdersummaryComponent } from './Components/ordersummary/ordersummary.component';
import { OrdersucessComponent } from './Components/ordersucess/ordersucess.component';
import { WhishlistComponent } from './Components/whishlist/whishlist.component';

const routes: Routes = [
  {path:'login',component:LoginSignupComponent},
  {path:'Dashboard',component:DashboardComponent,
  children:[
    {path:'personal',component:PersonaldetailsComponent},
    {path:'books',component:BookcartComponent},
    {path:'cards',component:DisplayCardsComponent},
    {path:'carts',component:CartComponent},
    {path:'address',component:AddressComponent},
    {path:'ordersummary',component:OrdersummaryComponent},
    {path:'ordersucess', component:OrdersucessComponent},
    {path:'wishlist',component:WhishlistComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
