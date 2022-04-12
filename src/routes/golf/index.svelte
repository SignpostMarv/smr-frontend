<script lang="js">
  import GolfBall from '$lib/components/golf/GolfBall.svelte';

  import { ball } from '$lib/golf/golfBall';
  import Floor from '$lib/components/golf/Floor.svelte';
  import { Canvas } from 'svelte-canvas';
  import { browser } from '$app/env';
  import { Tile } from '$lib/golf/tile';
  import { Grass } from '$lib/golf/tileRendering';

  const greens_l1 = [
    new Tile(0, 0, Grass, 1.0),
    new Tile(0, 1, Grass, 1.0),
    new Tile(0, 2, Grass, 1.0),
    new Tile(1, 1, Grass, 1.0),
    new Tile(2, 0, Grass, 1.0),
    new Tile(2, 1, Grass, 1.0),
    new Tile(2, 2, Grass, 1.0),
    new Tile(4, 0, Grass, 1.0),
    new Tile(4, 1, Grass, 1.0),
    new Tile(4, 2, Grass, 1.0)
  ];

  let width, height;
</script>

{#if browser}
  <Canvas width={960} height={640} bind:clientWidth={width} bind:clientHeight={height}>
    <Floor green_tiles={greens_l1} />
  </Canvas>

  <GolfBall />
  <p>width {width} height {height} x {ball.x} y {ball.y}</p>
{/if}
