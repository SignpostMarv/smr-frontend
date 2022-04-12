<script lang="js">
  import { Layer } from 'svelte-canvas';

  export let green_tiles = [];

  $: render = ({ context, width, height }) => {
    // t: Tile
    const draw = (t) => {
      t.draw(context);
    };
    green_tiles.forEach(draw);
  };
</script>

<Layer {render} />
