<script lang="js">
  import GolfBall from '$lib/components/golf/GolfBall.svelte';

  import { ball } from '$lib/golf/golfBall';
  import Floor from '$lib/components/golf/Floor.svelte';
  import Walls from '$lib/components/golf/Walls.svelte';
  import { Canvas } from 'svelte-canvas';
  import { browser } from '$app/env';

  import {
    CWall,
    CWallCorner,
    CWallPocket,
    Foundation1,
    Foundation2,
    FrictionGrass,
    Grass,
    MWallSquare,
    Sand
  } from '$lib/golf/propTypes';

  const floor1 = [
    [Foundation1, Sand, Foundation1, Grass, FrictionGrass, FrictionGrass],
    [Foundation1, Foundation1, Foundation1, Foundation2, Foundation2, Foundation2],
    [Foundation1, Sand, Foundation1, Grass, FrictionGrass, FrictionGrass]
  ];

  const walls1 = [
    [
      [CWallCorner, 0],
      [CWall, 90],
      [CWall, 90],
      [CWall, 90],
      [CWall, 90],
      [CWallCorner, 90]
    ],
    [
      [CWall, 0],
      [null, null],
      [null, null],
      [MWallSquare, 0],
      [null, null],
      [CWall, 180]
    ],
    [
      [CWallCorner, 270],
      [CWallCorner, 180],
      [CWall, 270],
      [CWall, 270],
      [CWall, 270],
      [CWallPocket, 180]
    ]
  ];

  let width, height;
</script>

{#if browser}
  <Canvas width={960} height={640} bind:clientWidth={width} bind:clientHeight={height}>
    <Floor tiles={floor1} />
    <Walls walls={walls1} />
  </Canvas>

  <GolfBall />
  <p>width {width} height {height} x {ball.x} y {ball.y}</p>
{/if}
