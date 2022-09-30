import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoinService } from '../../services/coin.service';
import { SocialService } from '../../services/social.service';

@Component({
  selector: 'app-scoin-graph',
  templateUrl: './scoin-graph.component.html',
  styleUrls: ['./scoin-graph.component.scss'],
})
export class ScoinGraphComponent implements OnInit {
  elonSub?: Subscription;
  public graph = {
    data: [
      {
        name: 'coin',
        x: [],
        y: [],
        type: 'scatter',
        mode: 'lines',
        marker: { color: 'red' },
      },
      {
        name: 'tweets',
        x: [],
        y: [],
        text: [],
        type: 'scatter',
        mode: 'markers',
        hovertemplate: `<div class='test'>Test</div>`,
      },
    ],
    layout: { title: 'A Fancy Plot' },
  };

  constructor(
    private coinService: CoinService,
    private socialService: SocialService
  ) {}

  ngOnInit(): void {
    this.coinService.getDogeGraph().subscribe((res) => {
      this.graph.data[0].x = res.prices.map((point: any) => new Date(point[0]));
      this.graph.data[0].y = res.prices.map((point: any) => point[1]);
    });
    this.elonSub = this.socialService.getElonData().subscribe((res) => {
      this.graph.data[1].x = res.map((point: any) => {
        return point.created_at;
      });
      this.graph.data[1].y = res.map((point: any) => 0.062);
      this.graph.data[1].text = res.map((point: any) => point.text);
    });
    console.log(this.graph.data);
  }
}
