<script lang="js">
  import { Layer } from 'svelte-canvas';
  import { image_matrix_to_walls } from '$lib/golf/propTypes';

  export let walls = [];

  $: render = ({ context, width, height }) => {
    const draw = (wall) => {
      wall.draw(context);
    };
    image_matrix_to_walls(walls).forEach(draw);
  };
</script>

<Layer {render} />
