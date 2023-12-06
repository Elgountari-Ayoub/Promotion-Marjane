import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
  promotions: any[] = []; // Replace with actual promotion model
  pageSize: number = 7;
  currentPage: number = 1;

  constructor(private promotionService: PromotionService) {
  }
  ngOnInit(): void {
    this.loadPromotions();
  }

  loadPromotions() {
    this.promotionService.getAllPromotionsByManager().subscribe(
      data => {
        console.log(data[0]);
        
        this.promotions = data;
      },
      error => {
        console.error('Error fetching promotions:', error);
      }
    );
  }

  acceptPromotion(promotion: any) {
    // Logic to accept promotion
    console.log('Accepted:', promotion);
  }

  refusePromotion(promotion: any) {
    // Logic to refuse promotion
    console.log('Refused:', promotion);
  }
}
