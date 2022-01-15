<script>
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<main>
	<Nav {segment} />
	<div class="container">
		<slot />
	</div>
	<Footer />
</main>

<style lang="scss">
	main {
		position: relative;
		width: 100%;
		max-width: 1200px;
		background-color: white;
		padding: 0 2em 1em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	.container {
		padding: 1em 0.5em;
		position: relative;
	}
</style>
