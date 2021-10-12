<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	/**
	 * Label of the Button. Keep it short!
	 */
	export let label = 'Button'
	let el

	
	function dispatchClick() {
		/**
		 * Dispatch event onButtonClick on button click
		 */
		dispatch('onButtonClick', {
			source: el,
		})
	}
</script>

<button on:click={dispatchClick} class="dgad-button" bind:this="{el}">
	{label}
</button>


<style>
	/* Write your CSS here */
    button {
        color: black
    }
</style>