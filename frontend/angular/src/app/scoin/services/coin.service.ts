import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  constructor(private http: HttpClient) {}

  getDogeGraph(): Observable<any> {
    return this.http.get(
      `https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=7`
    );
  }
}
