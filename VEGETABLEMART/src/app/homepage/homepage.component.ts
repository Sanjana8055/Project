import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
newProduct : any;
  constructor(private service:ProjService) { }

  ngOnInit(): void {

    this.service.getNewProduct().subscribe((result:any)=>{console.log(result); this.newProduct = result;} )
    console.log("deliver orders")

    this.service.deliverOrders().subscribe();
  }

}
