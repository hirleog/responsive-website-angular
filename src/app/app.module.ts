import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './template/nav/nav.component';
import { SliderComponent } from './components/slider/slider.component';
import { ScreenServiceComponent } from './components/screen-service/screen-service.component';
import { FooterComponent } from './template/footer/footer.component';
import { WhatPeopleSayComponent } from './components/what-people-say/what-people-say.component';
import { AboutComponent } from './components/about/about.component';
// import { ButtonModule } from 'primeng/button';
// import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SliderComponent,
    ScreenServiceComponent,
    FooterComponent,
    WhatPeopleSayComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // ButtonModule,
    // CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
