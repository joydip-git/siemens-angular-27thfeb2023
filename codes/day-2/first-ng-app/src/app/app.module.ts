import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnotherComponent } from './another.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, AnotherComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App Module created')
  }
}
