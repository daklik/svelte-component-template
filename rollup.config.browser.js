import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.browser, 'format': 'umd', name:'dcad_design_system' },
	],
	plugins: [
		svelte({
			

				// By default, the client-side compiler is used. You
				// can also use the server-side rendering compiler
				generate: 'dom',
		
				// ensure that extra attributes are added to head
				// elements for hydration (used with generate: 'ssr')
				hydratable: true,
		
				// Emit CSS as "files" for other plugins to process
				emitCss: false,

				// You can optionally set 'customElement' to 'true' to compile
				// your components to custom elements (aka web elements)
				customElement: false,

				//svelte: require('svelte')
			  }
		),
		resolve()
	]
};
