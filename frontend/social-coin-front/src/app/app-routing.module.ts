import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinGraphComponent } from './coin-graph/coin-graph.component';
import { CoinListComponent } from './coin-list/coin-list.component';

const routes: Routes = [
  { path: 'coin-list', component: CoinListComponent },
  { path: 'coin-graph/:id', component: CoinGraphComponent },
  { path: '', redirectTo: '/coin-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
