/**
 * @see [eslint-plugin-svelte3](https://github.com/sveltejs/eslint-plugin-svelte3)
 */
module.exports = {
  plugins: ['svelte3'],

  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],

  settings: {
    // eslint-disable-next-line global-require
    'svelte3/typescript': require('typescript'),
  },
};
