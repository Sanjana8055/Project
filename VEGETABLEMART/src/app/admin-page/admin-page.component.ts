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
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  newProduct:any;
  productName:any;
  searchedproduct:any;
  quantity : any;
  product:any;
  searchItems : any;
  products :any;
  constructor(private service: ProjService, private local:LocalStorageService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getNewProduct().subscribe((result:any)=>{console.log(result);
     this.newProduct = result;} )

    // this.service.getNewProduct().subscribe((result: any) => {
     // this.products = result; console.log(this.products);
  
        
     // });
     this.service.getNewProduct().subscribe((result: any) => {
      this.products = result; console.log(this.products);
  
      });
  }
  callLogOut() {
    this.local.logout();
    this.router.navigate(['login']);
  }
  routeTosellProduct() {
    this.local.logout();
    this.router.navigate(['sell-product']);
  }
  routeToViewCustomers() {
    this.router.navigate(['show-customers']);
  }
  routeToViewAllOrders() {
    this.router.navigate(['view-all-orders']);
  }
  delete(product:any){
    console.log("i"+product.productId)
    this.service.deleteProductAddedByAdmin(product.productId).subscribe((result: any) => {
      const i = this.products.findIndex((element) => {
        return element.productName === product.productName;
      });
      console.log("i" + i);
      this.products.splice(i, 1);
    });
    
  }
  
  routeToAdmin() {
    this.router.navigate(['admin-page']);
  }
  
  callHome() {
    this.router.navigate(['homepage']);
  }
  update(quantity: any, productId:any) {
    

    //this.service.updateProduct(quantity,productId).subscribe();
    console.log("i"+productId)
    this.service.updateProduct(quantity,productId).subscribe((result: any) => {
      const i = this.products.findIndex((element) => {
        return element.productName === this.products.productName;
      });
      console.log("i" + i);
      this.products.splice(i, 1);
    });
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
