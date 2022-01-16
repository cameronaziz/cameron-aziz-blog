<script context="module">
	export async function load(req) {
		const {
			url: { origin },
		} = req;
		const res = await fetch(`${origin}/index.json`);
		const json = await res.json();
		console.log(json.data);

		if (res.status !== 200) {
			return {
				props: {
					error: json.error,
				},
			};
		}

		return {
			props: {
				posts: json.data,
			},
		};
	}
</script>

<script lang="ts">
	import Breadcrumb from '../components/Breadcrumb.svelte';
	import Hero from '../components/Hero.svelte';
	import Posts from '../components/Posts.svelte';
	import type Blog from '../typings/blog';
	import Layout from './_layout.svelte';

	export let postsPerPage = 10;
	export let posts: Blog.Post[];
</script>

<svelte:head>
	<title>Cameron Aziz - Blog</title>
</svelte:head>

<Layout segment="home">
	<Hero />
	<Posts limit={postsPerPage} {posts} />
	<Breadcrumb isFirst={true} isLast={true} page="1" />
</Layout>
