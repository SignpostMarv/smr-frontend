import { assets } from '$app/paths';
import { browser } from '$app/env';

function golf_asset(name: string): string {
  return assets + '/images/golf/' + name + '.png';
}

function tile(name: string): HTMLImageElement {
  const img = browser ? new Image() : { src: '' };
  img.src = golf_asset(name);
  return <HTMLImageElement>img;
}

export const TILE_SIZE = 100;
export const Grass = tile('Grass');
export const FrictionGrass = tile('Unmown grass');
export const Foundation1 = tile('Foundation');
export const Foundation2 = tile('Concrete Foundation');
export const Sand = tile('Sand');
