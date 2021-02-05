import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




import { AdminPageComponent } from './admin-page/admin-page.component';
import { ShowCustomersComponent } from './show-customers/show-customers.component';
import { MobilePipe } from './mobile.pipe';
import { CartComponent } from './cart/cart.component';

import { ViewAllOrdersComponent } from './view-all-orders/view-all-orders.component';
import { HomepageComponent } from './homepage/homepage.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ReviewComponent } from './review/review.component';
import { ShowReviewsComponent } from './show-reviews/show-reviews.component';
import { HelpComponent } from './help/help.component';
import { MailComponent } from './mail/mail.component';

import { ProductComponent } from './product/product.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { MyProductComponent } from './my-product/my-product.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchProductComponent } from './search-product/search-product.component';
 


const appRoot: Routes = [{ path: '', component: HomepageComponent },
{path:'homepage', component: HomepageComponent},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },

{ path: 'admin-page', component: AdminPageComponent },
{ path: 'show-customers', component: ShowCustomersComponent },
{ path : 'my-product', component : MyProductComponent},
{ path: 'cart', component: CartComponent },
{ path : 'sell-product', component : SellProductComponent},
{ path : 'product', component : ProductComponent},
{path : 'search-product', component : SearchProductComponent},
{ path: 'view-all-orders', component: ViewAllOrdersComponent },

{ path: 'profile', component: ProfileComponent},
{ path: 'order-history', component: OrderHistoryComponent},
{ path: 'review', component: ReviewComponent},
{ path: 'show-reviews', component: ShowReviewsComponent},
{ path: 'help', component: HelpComponent},
{ path: 'mail', component: MailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    
    AdminPageComponent,
    ShowCustomersComponent,
    MobilePipe,
    CartComponent,
    
    ViewAllOrdersComponent,
    HomepageComponent,
    
    OrderHistoryComponent,
    ReviewComponent,
    ShowReviewsComponent,
    HelpComponent,
    MailComponent,
    
    ProductComponent,
    SellProductComponent,
    MyProductComponent,
    ProfileComponent,
    SearchProductComponent
    


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, HttpClientModule, RouterModule.forRoot(appRoot),

    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 



    
  ],
  providers: [MailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
