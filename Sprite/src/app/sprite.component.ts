import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector:'sprite',
  templateUrl: 'sprite.component.html',
  styleUrls:['sprite.component.css']
})

export class SpriteComponent {
  @Input('url')
  public url:string;
  @Input('offset-x')
  public offsetX:number;
  @Input('offset-y')
  public offsetY:number;
  @Input('width')
  public width:number;
  @Input('height')
  public height:number;

}
