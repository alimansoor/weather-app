import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//model
import { forecasts } from '../../../assets/data/weather';
import { IWeatherForecast } from '../models/api.model';

//services
import { WeatherService } from '../services/weather.service';

//rxjs
import { fromEvent, of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  //styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public forecasts: Array<IWeatherForecast>;

  public selectedWeather: IWeatherForecast;

  public location: string;

  public unit: string = 'Celsius';

  public param: string;
  
  

  constructor(private _weatherService: WeatherService, 
    private _router: Router, 
    private _route: ActivatedRoute) { }

  ngOnInit() {

     // GET ROUTE PARAM
     this._route.paramMap.subscribe((params: ParamMap) => {
      
      this.param = this._route.snapshot.paramMap.get("param");

      // CALL WEATHER API
      this.getWeather(this.param);   
    });
  }

  setWeather(weather: IWeatherForecast) {
    this.selectedWeather = weather;
  }

  updateUnit() {
    console.log("Update Temperature");
    this.unit == 'Fahrenheit' ? this.unit = 'Celsius' : this.unit = 'Fahrenheit';
  }

  setParam(param: string) {
    this._router.navigate(['/dashboard', param]);
  }

  getWeather(location: string = 'melbourne') {
    this._weatherService.getLocationId(location).pipe(mergeMap(response => this._weatherService.getWeather(response.woeid))).subscribe(
      data => {
        this.forecasts = data.consolidated_weather;
        this.location = data.title;
        this.selectedWeather = this.forecasts[0];
      },
      err => {
        this.forecasts = [];
        console.error("Couldn't connect to the API");
      }
    );
  }


}
