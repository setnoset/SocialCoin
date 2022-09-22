import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  baseUrl: string = 'https://api.coingecko.com/api/v3/coins/';

  constructor(private http: HttpClient) {}

  getCoins(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}markets?vs_currency=usd&order=market_cap_desc&sparkline=false`
    );
  }

  getCoinById(coinId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${coinId}`);
  }

  getGraphById(coinId: string) {
    return this.http.get<any>(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30`
    );
  }
}
