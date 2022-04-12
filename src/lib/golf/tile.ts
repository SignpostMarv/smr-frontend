import { TILE_SIZE } from '$lib/golf/propTypes';

export class Tile {
  x: number;
  y: number;
  image: HTMLImageElement;

  constructor(x: number, y: number, img: HTMLImageElement) {
    this.x = x;
    this.y = y;
    this.image = img;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, this.x * TILE_SIZE, this.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}
