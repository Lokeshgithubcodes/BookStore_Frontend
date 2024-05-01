import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import necessary FormsModule and ReactiveFormsModule
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { SignupComponent } from './Components/signup/signup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { LogincomponentComponent } from './Components/logincomponent/logincomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaldetailsComponent } from './Components/personaldetails/personaldetails.component';
import { AddressComponent } from './Components/address/address.component';
import { MatRadioModule } from '@angular/material/radio';
import { BookcartComponent } from './Components/bookcart/bookcart.component';
import { DisplayCardsComponent } from './Components/display-cards/display-cards.component';
import { CardsComponent } from './Components/cards/cards.component';
import { MatMenuModule } from '@angular/material/menu';
import { CartComponent } from './Components/cart/cart.component';
import { OrdersummaryComponent } from './Components/ordersummary/ordersummary.component';
import { SearchBookPipe } from './Pipes/search-book.pipe';
import { OrdersucessComponent } from './Components/ordersucess/ordersucess.component';
import { WhishlistComponent } from './Components/whishlist/whishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    SignupComponent,
    LogincomponentComponent,
    DashboardComponent,
    HeaderComponent,
    PersonaldetailsComponent,
    AddressComponent,
    CartComponent,
    BookcartComponent,
    DisplayCardsComponent,
    OrdersummaryComponent,
    CardsComponent,
    SearchBookPipe,
    OrdersucessComponent,
    WhishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatDividerModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatMenuModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
