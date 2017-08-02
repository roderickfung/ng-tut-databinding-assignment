import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {

  @Input('gameItem') public game: { id: number, data: Array<number> };
  public counter: number = 1;
  public count;

  constructor() { }

  ngOnInit() {
    this.count = setInterval(() => {
      this.game.data.push(this.counter)
      this.counter += 1
    }, 1000);
  }

  public isOdd(item) {
    return item % 2 === 1 ? true : false;
  }

  public stopInterval() {
    clearInterval(this.count)
  }

}
