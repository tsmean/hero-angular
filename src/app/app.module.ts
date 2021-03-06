import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeroModule} from './hero/index';

import { ResourceModule } from '@tsmean/resource';

import {NotifyModule} from 'notify-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ResourceModule.forRoot('http://demo.tsmean.com:4242/api/v1'),
    NotifyModule.forRoot(),
    HeroModule.forRoot(),
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
