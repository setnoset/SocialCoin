import { NgModule } from '@angular/core';

import { ScoinRoutingModule } from './scoin-routing.module';
import { ScoinComponent } from './scoin.component';
import { SharedModule } from '../shared/shared.module';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { ScoinGraphComponent } from './components/scoin-graph/scoin-graph.component';
import { TooltipComponent } from './components/scoin-graph/tooltip/tooltip.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [ScoinComponent, ScoinGraphComponent, TooltipComponent],
  imports: [SharedModule, ScoinRoutingModule, PlotlyModule],
})
export class ScoinModule {}
