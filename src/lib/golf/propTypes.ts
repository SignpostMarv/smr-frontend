import { assets } from '$app/paths';
import { browser } from '$app/env';
import { Tile } from './tile';
import { Wall } from './wall';

export const TILE_SIZE = 100;

function golf_asset_path(name: string): string {
  return assets + '/images/golf/' + name + '.png';
}

function get_img(name: string): HTMLImageElement {
  const img = browser ? new Image() : { src: '' };
  img.src = golf_asset_path(name);
  return <HTMLImageElement>img;
}

export function image_matrix_to_tiles(matrix: HTMLImageElement[][]): Tile[] {
  const height = matrix.length;
  const width = matrix[0].length;
  const tiles = new Array<Tile>(height * width);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const img = matrix[y][x];
      if (img !== null) tiles[y * width + x] = new Tile(x, y, img);
    }
  }
  return tiles;
}

export function image_matrix_to_walls(matrix: [HTMLImageElement, number][][]): Wall[] {
  const height = matrix.length;
  const width = matrix[0].length;
  const walls = new Array<Wall>(height * width);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const item = matrix[y][x];
      if (item[0] !== null) walls[y * width + x] = new Wall(x, y, item[0], item[1]);
    }
  }
  return walls;
}

// all Tile renderables
export const Grass = get_img('Grass');
export const FrictionGrass = get_img('Unmown grass');
export const Foundation1 = get_img('Foundation');
export const Foundation2 = get_img('Concrete Foundation');
export const Sand = get_img('Sand');

// all Wall renderables
export const CWall = get_img('1 wall concrete');
export const CWallCorner = get_img('2 wall concrete');
export const CWallPocket = get_img('3 wall concrete');
export const CWallSquare = get_img('4 wall concrete');
export const CWallCurve = get_img('Curve wall concrete');
export const CWallDiag = get_img('Diagonal wall concrete');

export const MWall = get_img('1 wall');
export const MWallCorner = get_img('2 wall');
export const MWallPocket = get_img('3 wall');
export const MWallSquare = get_img('4 wall');
export const MWallCurve = get_img('Curve wall');
export const MWallDiag = get_img('Diagonal wall');
export const Pillar = get_img('Pillar');
