import json from '@rollup/plugin-json';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';


const plugins = [
  json(
    {
      compact: true,
    },
  ),
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    vite: {
      plugins,
    },
    target: '#svelte',
  },
};

export default config;
