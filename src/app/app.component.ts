import { Component } from '@angular/core';
import { WeatherData } from './models/weatherData';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather-viewer';

  locations: WeatherData[];

  constructor(private weatherService: WeatherService) {
    this.locations = new Array();
  }
  ngOnInit() {
    this.weatherService.getCity('Porto Alegre').subscribe((location) => {
      this.locations.push(location);
      console.log(location.list[0]);
    });
    this.weatherService.getCity('Barra Bonita').subscribe((location) => {
      this.locations.push(location);
      console.log(location.list[0]);
    });
  }
}
