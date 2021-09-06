import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';

import {SharedModule} from "./shared/shared.module";
import {WeatherModule} from "./weather/weather.module";
import {NotificationsModule} from "./notifications/notifications.module";
import {WorldNewsModule} from "./world-news/world-news.module";
import {TechNewsModule} from "./tech-news/tech-news.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    WeatherModule,
    NotificationsModule,
    WorldNewsModule,
    TechNewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
