<script lang="js">
  import GolfBall from '$lib/components/golf/GolfBall.svelte';

  import { ball } from '$lib/golf/golfBall';
  import Floor from '$lib/components/golf/Floor.svelte';
  import Walls from '$lib/components/golf/Walls.svelte';
  import { Canvas } from 'svelte-canvas';
  import { browser } from '$app/env';

  import {
    string_to_nested_matrix,
    theme_matrix_to_map,
    /*
    CWall,
    CWallCorner,
    CWallPocket,
    */
    Foundation1,
    /*
    Foundation2,
    */
    FrictionGrass,
    Grass,
    /*
    MWallSquare,
    */
    Sand
  } from '$lib/golf/propTypes';

  const floor1_H = [
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
  ];

  const floor1_I = [
    [1, 1, 1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [1, 1, 1, 1, 1],
  ];

  const floor1_E = [
    [1, 1, 1, 1, 1],
    [1],
    [1, 1, 1, 1, 1],
    [1],
    [1, 1, 1, 1, 1],
  ];

  const floor1_L = [
    [1],
    [1],
    [1],
    [1],
    [1, 1, 1, 1, 1],
  ];

  const floor1_O = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ];

  const floor1_W = [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1,],
  ];

  const floor1_R = [
    [1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 1],
    [1, 0, 0, 1],
  ];

  const floor1_D = [
    [1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1],
  ];

  const floor1_space = [
    [3, 3, 3],
    [3, 3, 3],
    [3, 3, 3],
    [3, 3, 3],
    [3, 3, 3],
  ];

  const floor1_letter_space = [
    [3],
    [3],
    [3],
    [3],
    [3],
  ];

  const floor1_dictionary = {
    '|': floor1_letter_space,
    ' ': floor1_space,
    'd': floor1_D,
    'e': floor1_E,
    'h': floor1_H,
    'l': floor1_L,
    'o': floor1_O,
    'r': floor1_R,
    'w': floor1_W,
  };

  const [floor1, walls1] = theme_matrix_to_map(
    string_to_nested_matrix('hello world', floor1_dictionary),
    FrictionGrass,
    Foundation1,
    Sand,
    Grass
  );

  /*
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
  */

  let width = floor1[0].length, height = floor1.length;

  width *= 256;
  height *= 256;

  width += 2;
  height += 2;
</script>

{#if browser}
  <Canvas width={width} height={height} bind:clientWidth={width} bind:clientHeight={height}>
    <Floor tiles={floor1} />
    <Walls walls={walls1} />
  </Canvas>

  <GolfBall />
  <p>width {width} height {height} x {ball.x} y {ball.y}</p>
{/if}
