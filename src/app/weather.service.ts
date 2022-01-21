import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from './models/weatherData';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_KEY = "48e575d1e587a2bb198c17ae213293b7";
  API_URL = `http://api.openweathermap.org/data/2.5/find?units=metric&lang=pt_br&appid=${this.API_KEY}&q=`;

  constructor(private http:HttpClient) { }

  getCity(location: string){
    return this.http.get<WeatherData>(`${ this.API_URL }${location}`);
  }

}
