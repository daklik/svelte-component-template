import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name }
	],
	plugins: [
		svelte({
			

				// By default, the client-side compiler is used. You
				// can also use the server-side rendering compiler
				generate: 'ssr',
		
				// ensure that extra attributes are added to head
				// elements for hydration (used with generate: 'ssr')
				hydratable: true,
		
				// Emit CSS as "files" for other plugins to process
				emitCss: false,

				// You can optionally set 'customElement' to 'true' to compile
				// your components to custom elements (aka web elements)
				customElement: false,
		  
				// Extract CSS into a single bundled file (recommended).
				// See note below
				css: function (css) {
				  // console.log(css.code); // the concatenated CSS
				  // console.log(css.map); // a sourcemap
		  
				  // creates `main.css` and `main.css.map`
				  // using a falsy name will default to the bundle name
				  // — pass `false` as the second argument if you don't want the sourcemap
				  css.write('button.css', false);
				},

				//svelte: require('svelte')
			  }
		),
		resolve()
	]
};
