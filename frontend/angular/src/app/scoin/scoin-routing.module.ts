import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoinComponent } from './scoin.component';

const routes: Routes = [{ path: '', component: ScoinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoinRoutingModule { }
