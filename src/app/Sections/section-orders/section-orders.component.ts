import { Component, OnInit } from '@angular/core';

import { Review } from 'src/app/shared/review';
import { ReviewService } from 'src/app/review.service';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css'],
})
export class SectionOrdersComponent implements OnInit {
  constructor(private reviewService: ReviewService) { }

  reviews: Review[] = [];


  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    this.reviewService.getReviews()
      .subscribe(reviews => this.reviews = reviews);
  }
}
