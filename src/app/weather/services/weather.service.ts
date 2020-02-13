import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { catchError, } from 'rxjs/operators';
import { mergeMap, delay } from 'rxjs/operators';

// model
import { ILocation, IWeather, IGeoLocation } from '../models/api.model';

// model


// config
const CONFIG_BASE_URL = 'https://www.metaweather.com/api/location';

const CONFIG_LOCAL_URL = '/assets/data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  public getLocationId(location: string) {
   // let url = `${CONFIG_BASE_URL}/search/?query=${location}`;
   let url = `${CONFIG_LOCAL_URL}/location.json`;
    return this._http.get<ILocation[]>(url).pipe(
        map(response => response.filter(obj => obj.title.toLowerCase() === location.toLowerCase())[0])
    )
  }

  public getWeather(id: number) {
    let url = `${CONFIG_LOCAL_URL}/weather.json`;  
    return this._http.get<IWeather[]>(url).pipe(
      map(response => response.filter(obj => obj.woeid === id)[0])
    ); 
  }

  public getCoordinates() : Promise<Object> {
    return new Promise((resolve, reject) => {
      if(this._isGeoLocationSupported) {
        navigator.geolocation.getCurrentPosition(response => resolve({longitude: response.coords.longitude, latitude: response.coords.latitude}));
      }
      else {
        reject(Error("Geolocation is not supported by this browser."));
      }
    });
  }

  _isGeoLocationSupported() {
    navigator.geolocation ? true : false;
  }
}
