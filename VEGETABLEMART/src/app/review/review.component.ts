import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { ProjService } from '../proj.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviews:any
  constructor(private local:LocalStorageService, private service:ProjService) { 
    this.reviews={product:'', customer:'', review:''}

  }
  productId:any
  customer:any
  review:any
  ngOnInit(): void {
  }

  reviewSubmit(review: any) {
    this.reviews.product =JSON.parse(localStorage.getItem('product'));
    this.reviews.customer = JSON.parse(this.local.getLocal());
    this.reviews.review = review;
    console.log(this.reviews);
  
    this.service.addReview(this.reviews).subscribe();

  }
}
