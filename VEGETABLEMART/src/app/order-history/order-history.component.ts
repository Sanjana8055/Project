import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import { LoginComponent } from '../login/login.component';
import { LocalStorageService } from '../local-storage.service';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
declare var jQuery:any;

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  customer: any;
  orders: any;
  order: any;
  orderCount:any;
  productId:any;
  review:any;
  reviews:any;
  callReview:any;
  productName:any;
  searchItems :any;
  constructor(private service: ProjService, private local:LocalStorageService, private router: Router, private toastr: ToastrService) { 
    this.reviews={productId:'',  rating:''}
  }

  ngOnInit(): void {
    this.customer = JSON.parse(this.local.getLocal());
    console.log(this.customer.custId);
    this.service.viewMyOrders(this.customer.custId).subscribe((result: any) => {
      this.orders = result;
    });
    this.service.viewCountOfOrders(this.customer.custId).subscribe((result: any) => {console.log(result); this.orderCount = result; console.log(this.orderCount[0][0])});
  }
  callreview(product:any){
    localStorage.setItem('product',JSON.stringify(product));
    this.router.navigate(['review']);
  }

  showEditPopup(product:any){
    localStorage.setItem('product',JSON.stringify(product));
    jQuery('#reviewModel').modal('show');
  }
  routeToProfile() {
    this.router.navigate(['profile']);
  }

  giveRating(productId: any, rating: any){
    this.reviews.productId = productId;
 
    this.reviews.rating = rating;
    console.log(this.reviews);
    this.service.giveRating(this.reviews).subscribe((result: any) => { console.log(result); });
   
    this.toastr.success('added successfully!', 'Review');

  }
  callLogOut() {
    this.router.navigate(['login']);
  }
  routeTosellProduct() {
    this.router.navigate(['sell-product']);
  }
  routeToViewMyCart() {
    this.router.navigate(['cart']);
  }
  routeToProductAddedByMe() {
    this.router.navigate(['my-product']);
  }
  routeToMyOrders() {
    this.router.navigate(['order-history']);
  }

  // giveRating(productId: any, rating: any) {

    
  //   console.log("hii");
  //   this.service.giveRating(productId, rating).subscribe((result: any) => {console.log(result)});
  // }
  routeToProduct() {
     this.router.navigate(['product']);
   }
  searchProduct(productName: any) {
    this.productName = productName;
    this.service.searchProduct(this.productName).subscribe((result:any)=> {

      this.searchItems = result; this.local.setLocal(JSON.stringify(this.searchItems)); console.log(this.searchItems)
      if (this.searchItems) {

        this.router.navigate(['search-product']);
       
      } else {
        
          this.toastr.error('Product Does not exist');
        }
      });   
  }

}



    /* this.local.setLocalOrders(JSON.stringify(result));
       this.orders = JSON.parse(this.local.getLocalOrders());
    
    for (let order of this.orders) {
       if (!(order.orderId in this.orderIds)) {
         this.orderIds.push.apply(order.orderId);
       }
     }*/



