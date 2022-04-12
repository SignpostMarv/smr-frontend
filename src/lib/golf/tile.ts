import { TILE_SIZE } from '$lib/golf/tileRendering';

export class Tile {
  x: number;
  y: number;
  image: HTMLImageElement;
  size: number; // should be 0-1

  constructor(x: number, y: number, img: HTMLImageElement, size: number) {
    this.x = x;
    this.y = y;
    this.image = img;
    this.size = size;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const actual_size = TILE_SIZE * this.size;
    const size_offset = (TILE_SIZE - actual_size) / 2; // if my math checks out this should be zero for normal tiles
    ctx.drawImage(
      this.image,
      this.x * TILE_SIZE + size_offset,
      this.y * TILE_SIZE + size_offset,
      actual_size,
      actual_size
    );
  }
}
