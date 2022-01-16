<script lang="ts">
	import { ApolloClient, InMemoryCache } from '@apollo/client';
	import { setClient } from 'svelte-apollo';
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';

	const client = new ApolloClient({
		uri: 'http://localhost:4000/',
		cache: new InMemoryCache(),
	});

	setClient(client);

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
