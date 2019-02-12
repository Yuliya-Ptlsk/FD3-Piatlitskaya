import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SpriteComponent } from './sprite.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, SpriteComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
