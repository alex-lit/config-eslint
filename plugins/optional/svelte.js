/**
 * @see [eslint-plugin-svelte3](https://github.com/sveltejs/eslint-plugin-svelte3)
 */
module.exports = {
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],

  plugins: ['svelte3'],

  settings: {
    // eslint-disable-next-line global-require
    'svelte3/typescript': require('typescript'),
  },
};
