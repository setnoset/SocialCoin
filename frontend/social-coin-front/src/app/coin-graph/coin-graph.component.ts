import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoinService } from '../services/coin.service';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';
@Component({
  selector: 'app-coin-graph',
  templateUrl: './coin-graph.component.html',
  styleUrls: ['./coin-graph.component.scss'],
})
export class CoinGraphComponent implements OnInit, OnDestroy {
  coinGraph: any;
  days: number = 30;
  coinId: string = '';
  coinCaptureSub!: Subscription;
  public scatterChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Coin Data',
        showLine: true,
      },
      {
        data: [],
        label: 'Twitter Data',
      },
    ],
  };
  public scatterChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        borderColor: 'green',
      },
      point: {
        radius: 5,
        hitRadius: 4,
        backgroundColor: 'black',
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
        adapters: {
          date: {
            locale: enUS,
          },
        },
      },
    },
  };
  public scatterChartType: ChartType = 'scatter';

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService
  ) {}

  ngOnInit(): void {
    this.coinCaptureSub = this.route.params.subscribe((res) => {
      this.coinId = res['id'];
    });
    this.getGraphData();
    this.scatterChartData.datasets[1].data = [
      { x: Date.parse('12 Sep 2022 00:00:00 GMT'), y: 1 },
      { x: Date.parse('22 Sep 2022 00:00:00 GMT'), y: 2 },
      { x: Date.parse('10 Sep 2022 00:00:00 GMT'), y: 3 },
    ];
  }

  getGraphData(): void {
    this.coinService.getGraphById(this.coinId).subscribe((res) => {
      setTimeout(() => {
        this.chart.chart?.update();
      });
      this.scatterChartData.datasets[0].data = res.prices.map((a: any) => {
        return { x: new Date(a[0]), y: a[1] };
      });
    });
  }

  ngOnDestroy(): void {
    this.coinCaptureSub.unsubscribe();
  }
}
