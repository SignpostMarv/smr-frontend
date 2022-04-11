<script lang="js">
  import { assets } from '$app/paths';
  import { Layer } from 'svelte-canvas/src';

  let image;

  image = new HTMLImageElement();
  image.src = assets + '/images/golf/Grass.png';

  let x = 0;
  let y = 0;

  $: render = ({ context, width, height }) => {
    context.drawImage(image, x, y);
  };
</script>

<Layer {render} />
