import { Game } from '../../models/game.model';
 import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  public counter: number = 1;
  @Output() public newGame = new EventEmitter<{id: number, data: Array<number>}>();

  constructor() { }
  
  public onAddGame() {
    this.newGame.emit({
      id: this.counter,
      data: []
    });
    this.counter +=1;
  }
}