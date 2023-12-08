// promotion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  private apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getAllPromotionsByManager(page: number, size: number): Observable<any[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any>(`${this.apiUrl}/managers/promotions`, { params });
  }
  refusePromotion(promotionCenterId: any): Observable<boolean> {
    return this.http.post<boolean>(
      `${this.apiUrl}/managers/promotions/refuse`,
      promotionCenterId
    );
  }
  acceptPromotion(promotionCenterId: any): Observable<boolean> {
    console.log(promotionCenterId);

    return this.http.post<boolean>(
      `${this.apiUrl}/managers/promotions/accept`,
      promotionCenterId
    );
  }
}
