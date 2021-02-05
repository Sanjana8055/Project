import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import { LoginComponent } from '../login/login.component';
import { LocalStorageService } from '../local-storage.service';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
declare var jQuery:any;
declare var webkitSpeechRecognition;


@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
 
  product: any
  editObject:any
  customer:any
  address:any
  productName: any;
  searchedproduct: any;
  searchItems : any;
  newProduct: any;
  reviewsList:any;
  rating: any;
  

  constructor(private service: ProjService, private local:LocalStorageService, private router: Router, private toastr: ToastrService) {
    this.address={state:'', street:'', city:'', houseNo:'', pincode:''}
    this.editObject={custId: '', custName: '', email: '', mobileNo:'', loginId: '', password:'',address: this.address}
   }


  ngOnInit() {
    this.customer=JSON.parse(this.local.getLocal());
    this.searchItems=JSON.parse(this.local.getLocal());
    this.service.getNewProduct().subscribe((result:any)=>{console.log(result); this.newProduct = result;} )
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

  callLogOut() {
    this.router.navigate(['login']);
  }


  routeTosellProduct() {
    this.router.navigate(['sell-product']);
  }
  routeToProfile() {
    this.router.navigate(['profile']);
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


  routeToHelp() {
    this.router.navigate(['help']);
  }
  routeToProduct() {
    this.router.navigate(['product']);
  }
  
  getAvgRating(productId: any) {
    this.service.getAvgRating(productId).subscribe((result: any)=>{console.log(result);this.rating = result;});
  }


 

  
  handleAddToCart2(product: any, quantity: any) {
    const i = this.newProduct.findIndex((element)=>{return element.productId === product.productId;});
    this.service.addToCart(this.customer.custId,this.newProduct[i].productId, quantity).subscribe((result:any)=>console.log(result));
    this.toastr.success('Product added to cart successfully!', 'Cart');
  }
  callHome() {
    this.router.navigate(['homepage']);
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
