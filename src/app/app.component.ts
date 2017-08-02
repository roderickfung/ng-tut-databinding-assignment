import { Component } from '@angular/core';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public games: Array<Object> = [];

  public onAddGame(newGame: {id: number, data: Array<number>}) {
    console.log('app newGame:', newGame)
    this.games.push({
      id: newGame.id,
      data: newGame.data
    })
  }

  public onDeleteGame(game) {
    this.games = this.games.filter(val => val !== game);
  }
}
