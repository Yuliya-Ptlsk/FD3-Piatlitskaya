import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumWord } from "./numword.pipe"

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,NumWord ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
