import { Injectable } from '@angular/core';
import { IslandsWeather } from '../components/islands/islands-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetweatherService {

  getWeather:any[] = IslandsWeather;

  constructor() { }
}
