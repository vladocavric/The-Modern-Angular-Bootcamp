import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: { date: string, temperature: number, }[] = [];

  constructor(
    private weatherService: WeatherService
  ) {
    this.weatherService.getWeather().subscribe(weatherData => {
      this.weatherData = [...weatherData]
    })
  }

  ngOnInit(): void {

  }

}
