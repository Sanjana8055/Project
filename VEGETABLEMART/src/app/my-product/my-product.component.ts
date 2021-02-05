import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent implements OnInit {
  customer:any;
  myProduct:any;
  constructor(private service: ProjService, private local: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.customer = JSON.parse(this.local.getLocal());
   
    this.service.viewMyProductAdded(this.customer.custId).subscribe((result:any)=> {console.log(result); this.myProduct = result;});
  }
  deleteMyProduct(product: any) {
    this.service.deleteMyProduct(product).subscribe((result: any) => {
      const i = this.myProduct.findIndex((element) => {return element.productId === product.productId;
          });
      this.myProduct.splice(i , 1);
        });
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
  routeToProduct() {
    this.router.navigate(['product']);
  }
}
