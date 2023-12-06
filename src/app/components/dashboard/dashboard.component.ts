import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  promotions: any[] = []; // Replace with actual promotion model
  pageSize: number = 7;
  currentPage: number = 1;

  constructor(private promotionService: PromotionService) {}
  ngOnInit(): void {
    this.loadPromotions();
  }

  loadPromotions() {
    this.promotionService.getAllPromotionsByManager().subscribe(
      (data) => {
        console.log(data);

        this.promotions = data;
      },
      (error) => {
        console.error('Error fetching promotions:', error);
      }
    );
  }

  acceptPromotion(promotionCenterId: any) {
    this.promotionService.acceptPromotion(promotionCenterId).subscribe(
      (result) => {
        console.log('Promotion accepted:', result);
        this.loadPromotions();
      },
      (error) => {
        console.error('Error refusing promotion:', error);
      }
    );
  }

  refusePromotion(promotionCenterId: any) {
    this.promotionService.refusePromotion(promotionCenterId).subscribe(
      (result) => {
        console.log('Promotion refused:', result);
        this.loadPromotions();
      },
      (error) => {
        console.error('Error refusing promotion:', error);
      }
    );
  }
}
