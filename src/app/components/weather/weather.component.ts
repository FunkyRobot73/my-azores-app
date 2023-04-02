import { Component } from '@angular/core';
import { GetweatherService } from 'src/app/services/getweather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  weatherData;
  constructor(private _weatherData:GetweatherService) {}

  this.weatherData = this._weatherData.getWeather();
}
