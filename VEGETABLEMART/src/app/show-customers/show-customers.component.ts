import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {
  customers:any;
  constructor(private service: ProjService) { }

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe((result: any) => {console.log(result); this.customers = result});
    console.log(JSON.parse(this.customers));
  }

}

