import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-view-all-orders',
  templateUrl: './view-all-orders.component.html',
  styleUrls: ['./view-all-orders.component.css']
})
export class ViewAllOrdersComponent implements OnInit {
  orders:any;
  constructor(private service:ProjService) { }

  ngOnInit(): void {
    this.service.viewAllOrders().subscribe((result: any)=>{console.log(result); this.orders=result;});
  }
  deliverOrder(orderId: any) {
    this.service.deliverOrder(orderId).subscribe((result: any)=>{console.log(result);});
  }

}
