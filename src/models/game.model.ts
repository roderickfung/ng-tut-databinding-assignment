export class Game {
  public id: number;
  public data: Array<number> = [];

  constructor(id: number, data: Array<number>) {
    this.id = id;
    this.data = data;
  }
}