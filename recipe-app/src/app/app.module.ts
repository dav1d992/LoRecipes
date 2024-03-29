import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), HttpClientModule, AppRoutingModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
