
import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';

@Component({
  selector: 'app-show-reviews',
  templateUrl: './show-reviews.component.html',
  styleUrls: ['./show-reviews.component.css']
})
export class ShowReviewsComponent implements OnInit {
  product:any;
 reviewsList:any;
 rating: any;
  constructor(private service:ProjService) { }

  ngOnInit(): void {
    this.product = JSON.parse(localStorage.getItem("product"));
    this.service.getReviewsByProductId(this.product.productId).subscribe((result:any) => {this.reviewsList = result;console.log(result)});
    this.service.getAvgRating(this.product.productId).subscribe((result: any)=>{console.log(result);this.rating = result;});
  }
  

}
