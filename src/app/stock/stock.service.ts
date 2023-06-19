import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

let params = new HttpParams().set('token', 'ci86h9hr01qnrgm326e0ci86h9hr01qnrgm326eg');

@Injectable({
  providedIn: 'root'
})
export class StockService {

  url = 'https://finnhub.io/api/v1';


  constructor(private http: HttpClient) { }

  getData() {
    params = params.set('q', 'siemens');
    return this.http.get<any>(this.url+'/search', { params: params });
  }

  getStockDE() {
    params = params.set('exchange', 'GDAXI');
    return this.http.get<any>(this.url+'/stock/symbol', { params: params });
  }

  getApple() {
    params = params.set('symbol', 'AAPL');
    return this.http.get<any>(this.url+'/quote', { params: params });
  }
}
