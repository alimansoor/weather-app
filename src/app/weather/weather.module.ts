import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// components

import { DashboardComponent } from './dashboard/dashboard.component';
import { ForecastComponent } from './forecast/forecast.component';
import { OutlineComponent } from './outline/outline.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [DashboardComponent, ForecastComponent, OutlineComponent, SearchComponent],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  exports: [DashboardComponent, ForecastComponent]
})
export class WeatherModule { }
