import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ChatpageComponent } from './component/chatpage/chatpage.component';
import { routing, appRoutingProviders } from './app.router';
import { OAuthService } from 'angular2-oauth2/oauth-service';

@NgModule({
  imports:      [ BrowserModule,
                  routing
                ],
  declarations: [ AppComponent,
                  HomeComponent,
                  ChatpageComponent,
                ],
  bootstrap:    [ AppComponent ],
  providers:    [ appRoutingProviders,
                  OAuthService,   // <-- Provider for OAuthService
                  HttpModule,
                  RouterModule
  ]
})
export class AppModule { }
