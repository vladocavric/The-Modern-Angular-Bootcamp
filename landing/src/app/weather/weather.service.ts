import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {map, mergeMap, pluck, switchMap, filter, toArray, share, tap, catchError, retry} from "rxjs/operators";
import {OpenWeatherResponse} from "./open-weather-response";
import {NotificationsService} from "../notifications/notifications.service";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl = 'https://api.openweathermap.org/data/2.5/forecast?'
  apiKey = 'eb4b0bfa86364c295dd7d66aa6cad817'

  constructor(private http: HttpClient, private notificationsService: NotificationsService) {
  }

  getCurrentLocation() {
    return new Observable<GeolocationCoordinates>(observer => {
      window.navigator.geolocation.getCurrentPosition(position => {
        observer.next(position.coords)
        observer.complete()
      }, err => observer.error(err))
    }).pipe(
      retry(1),
      tap(
        () => {
          this.notificationsService.successMessage('Got the location')
        }),
      catchError(err => {
        this.notificationsService.errorMessage('Failed to get your location')
        return throwError(err)
      })
    )
  }

  getWeather() {
    return this.getCurrentLocation().pipe(
      map(coords => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', 'metric')
          .set('appid', this.apiKey)
      }),
      switchMap(params => this.http.get<OpenWeatherResponse>(this.baseUrl, {params})),
      pluck('list'),
      mergeMap(list => of(...list)),
      filter((value, index) => index % 8 === 0),
      map(value => {
        return {
          date: value.dt_txt,
          temperature: value.main.temp
        }
      }),
      toArray(),
      share(),
      tap(() => {
        this.notificationsService.successMessage('Got your weather')
      }, () => {
        this.notificationsService.errorMessage('Failed get your weather')
      })
    )
  }
}
