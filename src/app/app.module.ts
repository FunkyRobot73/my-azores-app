import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IslandsComponent } from './components/islands/islands.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IslandsComponent,
    WeatherComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
