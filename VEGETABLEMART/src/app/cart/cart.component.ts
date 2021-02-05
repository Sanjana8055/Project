import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import { LocalStorageService } from '../local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
declare var jQuery:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartTotal = 0;
  address:any;
  editObject:any;
  productName: any;
  searchItems : any;
  customer: any;
  cartItems: any;
  reviews : any;
  constructor(private service: ProjService, private local:LocalStorageService, private router: Router, private toastr: ToastrService) {
    this.reviews = {rating :'',productId : ''}
   }
  
 
  ngOnInit(): void {
    this.customer = JSON.parse(this.local.getLocal());
    this.service.viewMyCart(this.customer.custId).subscribe((result: any) => {
    this.cartItems = result; console.log(this.cartItems);

      this.cartItems.forEach(element => {
        this.cartTotal += (element.price)
      });

      console.log("cartTotal" + this.cartTotal);


    });


  }
  placeOrder(custId: any) {
    this.service.placeOrder(custId).subscribe((result: any) => { console.log(result) });
    this.toastr.success('Order has Placed Successfully', 'Place Order');
          
  }

  removeFromCart(cartItem: any) {
    console.log("i"+cartItem.cartId)
    this.service.removeFromCart(cartItem.cartId).subscribe((result: any) => {
      const i = this.cartItems.findIndex((element) => {
        return element.productName === cartItem.productName;
      });
      console.log("i" + i);
      this.cartItems.splice(i, 1);
    });
  }

  showEditPopup(){
    this.editObject = this.customer;
    console.log(this.editObject);
    jQuery('#custModel').modal('show');
  }
  updateCust() {
    this.service.updateCust(this.editObject).subscribe();
    console.log(this.editObject)
  }
  routeToProfile() {
    this.router.navigate(['profile']);
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
  callHome() {
    this.router.navigate(['homepage']);
  }
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


