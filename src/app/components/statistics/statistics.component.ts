import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  promotionsStatistics: any;
  ngOnInit(): void {
    console.log('ta trajel');
    
    this.getStatistics();
  }

  constructor(private promotionService: PromotionService) {}


  getStatistics() {
    this.promotionService.getStatistics().subscribe(
      (data) => {
        this.promotionsStatistics = data;
        console.log(this.promotionsStatistics);
      },
      (error) => {
        console.error('Error fetching promotions:', error);
      }
    );
  }
}
