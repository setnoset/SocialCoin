import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CoinService } from '../services/coin.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss'],
})
export class CoinListComponent implements OnInit {
  coinsData!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'symbol',
    'current_price',
    'price_change_percentage_24h',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private coinService: CoinService, private router: Router) {}

  ngOnInit(): void {
    this.coinService.getCoins().subscribe((res) => {
      this.coinsData = new MatTableDataSource(res);
      this.coinsData.paginator = this.paginator;
      this.coinsData.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.coinsData.filter = filterValue.trim().toLowerCase();

    if (this.coinsData.paginator) {
      this.coinsData.paginator.firstPage();
    }
  }

  goToDetails(row: any): void {
    this.router.navigate(['coin-graph', row.id]);
  }
}
