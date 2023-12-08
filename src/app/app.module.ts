import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/includes/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, StatisticsComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, NgxPaginationModule, HttpClientModule, BrowserAnimationsModule, MatSlideToggleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
