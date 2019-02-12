import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite-holder',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  private URL:string;
  private X:number;
  private Y:number;
  private W:number;
  private H:number;

  constructor(){
    this.URL = 'http://fe.it-academy.by/Examples/cards2.png';
    this.X = 0;
    this.Y = -2325;
    this.W = 140;
    this.H = 190;
  };

  getURL():string{
      return this.URL;
  };

  getPositionX():number{
    return this.X
  };

  getPositionY():number{
    return this.Y
  };

  getWidth():number{
    return this.W
  };

  getHeight():number{
    return this.H
  };

}
