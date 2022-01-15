import svelte from 'rollup-plugin-svelte';
import preprocess from 'svelte-preprocess';


const plugins = [svelte(
    {preprocess: preprocess()}
  )]

const config = () => ({plugins});

export default config;
