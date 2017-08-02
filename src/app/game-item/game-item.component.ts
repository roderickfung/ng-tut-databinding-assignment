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
  public counting: boolean = true;

  constructor() { }

  ngOnInit() {
    this._interval();
  }

  public isOdd(item) {
    return item % 2 === 1 ? true : false;
  }

  public stopInterval() {
    clearInterval(this.count)
    this.counting = !this.counting;
  }

  public continueInterval() {
    this._interval()
    this.counting = !this.counting;
  }

  private _interval() {
    this.count = setInterval(() => {
      this.game.data.push(this.counter)
      this.counter += 1
    }, 1000)
  }

  public isCounting() {
    return this.counting;
  }

}
