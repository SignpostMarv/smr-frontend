<script>
  import GolfBall from '$lib/components/golf/GolfBall.svelte';

  import { ball } from '$lib/utils/golfBall';
  import Green from '$lib/components/golf/Green.svelte';
  let width, height;
</script>

<!--<div bind:clientWidth={width} bind:clientHeight={height}>-->
<Green />
<Green />
<Green />
<Green />
<Green />
<!--</div>-->

<GolfBall />
<p>width {width} height {height} x {ball.x} y {ball.y}</p>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>
