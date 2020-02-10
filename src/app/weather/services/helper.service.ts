import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public convertTempToF(temp: number) {
    return temp * 1.8 + 32;
  }

  public getImagePath(abbreviation: string) {
    return `https://www.metaweather.com/static/img/weather/${abbreviation}.svg`;
  }

  public getDayId(date: string): number {
    return new Date(date).getDay(); 
  }

  public getDay(id: number): string {
    switch (id) {
      case 0:
          return 'Sunday';
          break;
      case 1:
          return 'Monday';
          break;
      case 2:
          return 'Tuesday';
          break;
      case 3:
          return 'Wednesday';
          break;
      case 4:
          return 'Thursday';
          break;
      case 5:
          return 'Friday';
          break;
      case 6:
          return 'Saturday';
          break;
      default:
          return '';
          break;
    }
    
  }
}
