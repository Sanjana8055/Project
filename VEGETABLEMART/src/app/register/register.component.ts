import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjService } from '../proj.service';
import { ToastrService } from 'ngx-toastr';
import { MailComponent } from '../mail/mail.component';
declare var nodemailer: any;
declare const sendMail:any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  customer: any;
  address: any;
  confirmPassword: any;
  loginIds: any;
  registerForm: any;
  mailOptions: any;
  constructor(private router: Router, private service: ProjService,
    private toastr: ToastrService, private mail: MailComponent) {

    this.address = { state: '', street: '', city: '', houseNo: '', pincode: '' }
    this.customer = { custId: '', custName: '', email: '', mobileNo: '', loginId: '', password: '', address: this.address }
  }

  ngOnInit(): void {   
    this.service.getAllLoginIds().subscribe((result: any) => { console.log(result); this.loginIds = result });
  }

  register(registerForm: any): void {
    console.log(this.customer.email);
    localStorage.setItem('email',JSON.stringify(this.customer.email));
    console.log(this.customer.email);
    this.service.regCustomer(this.customer).subscribe((result: any) => { console.log(result); });
    console.log(this.customer);
    this.toastr.success('Registration Successfull!', 'Register');
    this.router.navigate(['login']);  

  }



}
