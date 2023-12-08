import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  promotions: any[] = []; // Replace with actual promotion model
  page: number = 0;
  size: number = 5;

  constructor(private promotionService: PromotionService) {}
  ngOnInit(): void {
    this.loadPromotions();
  }

  loadPromotions(page: number = 0, size: number = 5) {
    this.page = page;
    this.size = size;
    console.log(page);
    console.log(size);
        
    this.promotionService
      .getAllPromotionsByManager(page, size)
      .subscribe(
        (data: any) => {
          
          this.promotions = (data as any).content;;
          console.log(this.promotions);
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
