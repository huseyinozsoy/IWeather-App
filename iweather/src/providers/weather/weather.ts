//import { Http } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; 


@Injectable()
export class WeatherProvider {
  apiKey = '6363cba1e916efbb9ccbc1fe97780faf';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    //this.url = 'api.openweathermap.org/data/2.5/weather?q='+this.getweather('London','uk')+'&APPID='+this.apiKey;
    this.url = 'http://api.openweathermap.org/data/2.5/weather';
    
  }

  getWeather(city,country){
    return this.http.get(this.url+'?q='+city+','+country+'&APPID='+this.apiKey+"&units=metric")
      .map(res=>res.json());
  }
}
