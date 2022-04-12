import { Tile } from './tile';
import {
  CWall,
  CWallCorner,
  CWallPocket,
  CWallSquare,
  MWall,
  MWallCorner,
  MWallPocket,
  MWallSquare,
  Pillar,
  TILE_SIZE
} from '$lib/golf/propTypes';

enum Walls {
  N = 1 << 0,
  E = 1 << 1,
  S = 1 << 2,
  W = 1 << 3
}

const radians = Math.PI / 180;

export class Wall extends Tile {
  wall_collisions: Walls;
  image_rotation: number;
  size: number;

  constructor(x: number, y: number, img: HTMLImageElement, rot: number) {
    super(x, y, img);
    this.size = img == Pillar ? 0.6 : 1;
    this.image_rotation = rot;
  }

  get_collision_enum(): Walls {
    let walls: Walls;
    switch (this.image) {
      case CWall:
      case MWall: {
        walls = Walls.W;
        break;
      }
      case CWallCorner:
      case MWallCorner: {
        walls = Walls.W | Walls.N;
        break;
      }
      case CWallPocket:
      case MWallPocket: {
        walls = Walls.W | Walls.N | Walls.E;
        break;
      }
      case CWallSquare:
      case MWallSquare: {
        walls = 0xf;
        break;
      }
    }

    if (this.image_rotation != 0) {
      const right = Math.floor(this.image_rotation / 90) % 4;
      const left = 4 - right;
      walls = (walls << left) | (walls >> right);
    }
    return walls;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // save the unrotated context of the canvas so we can restore it later
    // the alternative is to untranslate & unrotate after drawing
    ctx.save();
    const actual_size = TILE_SIZE * this.size;
    const half = actual_size / 2;
    const size_offset = (TILE_SIZE - actual_size) / 2; // if my math checks out this should be zero for normal tiles

    // move to the center of the canvas
    ctx.translate(this.x * TILE_SIZE + size_offset + half, this.y * TILE_SIZE + size_offset + half);

    // rotate the canvas to the specified degrees
    ctx.rotate(this.image_rotation * radians);

    // draw the image
    // since the context is rotated, the image will be rotated also
    ctx.drawImage(this.image, -half, -half, actual_size, actual_size);

    // we’re done with the rotating so restore the unrotated context
    ctx.restore();
  }
}
