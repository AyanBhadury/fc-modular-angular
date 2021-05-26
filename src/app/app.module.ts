import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

import FusionCharts from "fusioncharts/core";
import Pie from "fusioncharts/viz/pie2d";
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";


FusionChartsModule.fcRoot(FusionCharts, Pie, FusionTheme);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
