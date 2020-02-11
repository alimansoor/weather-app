import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

//model
import { IWeatherForecast } from '../models/api.model';

// service
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  //styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  @Input()
  forecast: IWeatherForecast;

  @Output() showOutline = new EventEmitter();

  @Input()
  selectedWeather: IWeatherForecast;

  @Input()
  unit: string;

  constructor(public helper: HelperService) { }

  ngOnInit() {
  }



  setWeather(weather: IWeatherForecast) {
    this.selectedWeather = weather;
   // console.log("WEATHER:::", weather);
    this.showOutline.emit(this.selectedWeather);
  }

}
