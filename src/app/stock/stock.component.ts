import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './quote';
import { StockService } from './stock.service';



@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit{

  stock: Quote | undefined;

  constructor(private stockService: StockService) {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.stockService.getApple()
      .subscribe((data) => this.stock = data);
  }
}
