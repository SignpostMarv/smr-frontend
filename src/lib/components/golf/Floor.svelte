<script lang="js">
  import { Layer } from 'svelte-canvas';
  import { image_matrix_to_tiles } from '$lib/golf/propTypes';

  export let tiles = [];

  $: render = ({ context, width, height }) => {
    const draw = (tile) => {
      tile.draw(context);
    };
    image_matrix_to_tiles(tiles).forEach(draw);
  };
</script>

<Layer {render} />
