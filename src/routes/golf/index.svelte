<script>
  import GolfBall from '$lib/components/golf/GolfBall.svelte';

  import { ball } from '$lib/utils/golfBall';
  import Green from '$lib/components/golf/Green.svelte';
  import { Canvas } from 'svelte-canvas';
  let width, height;
</script>

<Canvas width={960} height={640} bind:clientWidth={width} bind:clientHeight={height}>
  <Green />
  <Green />
  <Green />
  <Green />
  <Green />
</Canvas>

<GolfBall />
<p>width {width} height {height} x {ball.x} y {ball.y}</p>
