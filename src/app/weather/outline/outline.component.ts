import { Component, OnInit, Input } from '@angular/core';

//model
import { IWeatherForecast } from '../models/api.model';

// service
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'outline',
  templateUrl: './outline.component.html',
  //styleUrls: ['./outline.component.scss']
})
export class OutlineComponent implements OnInit {

  @Input()
  weather: IWeatherForecast;

  @Input()
  unit: string;

  @Input()
  location: string;

  constructor(private _helper: HelperService) { }

  ngOnInit() {
  }

}
