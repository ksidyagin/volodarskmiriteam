import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { HttpClientModule } from "@angular/common/http";

import { MapComponent } from './map.component';

const mapConfig: YaConfig = {
  apikey: '23215eb4-11da-4e8e-b8d2-4e3bb79ec298',
  lang: 'ru_RU',
};

@NgModule({
  imports: [BrowserModule, FormsModule, AngularYandexMapsModule.forRoot(mapConfig), HttpClientModule],
  declarations: [MapComponent],
})
export class AppModule { }
