<script lang="ts">
  import { assets } from '$app/paths';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  function new_energy_tween(energy: number) {
    const t = tweened<number>(energy, { duration: energy / 10, easing: cubicOut });
    t.set(0);
    return t;
  }

  let energy = new_energy_tween(0);
  $: in_motion = $energy != 0;
  let vx = 0;
  let vy = 0;
  $: vx = $energy / vx;
  $: vy = $energy / vx;
  let x = 0;
  let y = 0;
  $: x = x + vx;
  $: y = y + vy;

  let mouse_x: number;
  let mouse_y: number;

  function begin_swing(event: MouseEvent) {
    if (in_motion) {
      mouse_x = event.x;
      mouse_y = event.y;
    }
  }

  function hit(event: MouseEvent) {
    vx = mouse_x - event.x;
    vy = mouse_y - event.y;

    energy = new_energy_tween(Math.sqrt(vx ** 2 + vy ** 2));
  }
</script>

<svelte:window on:mousedown={begin_swing} on:mouseup={hit} />

<img
  src={assets + '/images/golf/Ball.png'}
  style="width: 50px;
                    height: auto;
                    position: absolute;
                      top: {y}px;
                      left: {x}px;
                      z-index: 69;
                    "
  alt=""
/>
