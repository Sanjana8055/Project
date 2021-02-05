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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  customer:any;
  editObject:any;
  address : any;
  productName: any;
  constructor(private service: ProjService, private local:LocalStorageService, private router: Router, private toastr: ToastrService) {
    this.address={state:'', street:'', city:'', houseNo:'', pincode:''}
    this.editObject={custId: '', custName: '', email: '', mobileNo:'', loginId: '', password:'',address: this.address}
   }


  ngOnInit(): void {
    
    this.customer=JSON.parse(this.local.getLocal());

    this.editObject = this.customer;
    console.log(this.editObject);
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
  routeToViewMyCart() {
    this.router.navigate(['cart']);
  }
  routeToMyOrders() {
    this.router.navigate(['order-history']);
  }
  routeToProfile() {
    this.router.navigate(['profile']);
  }
  routeToHelp() {
    this.router.navigate(['help']);
  }
  routeToProduct() {
    this.router.navigate(['product']);
  }
  callLogOut() {
    this.router.navigate(['login']);
  }
 
  

}
