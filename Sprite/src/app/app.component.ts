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
    this.Y = 0;
    this.W = 143;
    this.H = 193;
  };

  getURL():string{
      return this.URL;
  };

  getPositionX():number{
    return this.X;
  };

  getPositionY():number{
    return this.Y;
  };

  getWidth():number{
    return this.W;
  };

  getHeight():number{
    return this.H;
  };

  setNewCoords():void{
    if (this.X>-this.W*3){
      //'1'- горизонатльное расстояние между изображениями
      this.X -=this.W+1;
    } else{
      if(this.Y<-this.H*13){
        this.Y=0;
      }
      this.X = 0;
      //'1'- вертикальное расстояние между изображениями
      this.Y -=this.H+1;
    }
  };
}
