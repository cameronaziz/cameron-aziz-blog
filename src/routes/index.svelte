<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch(`index.json`);
		const response = await res.json();

		return response;
	}
</script>

<script>
	import Breadcrumb from '../components/Breadcrumb.svelte';
	import Hero from '../components/Hero.svelte';
	import Posts from '../components/Posts.svelte';
	import Layout from './_layout.svelte';

	export let posts = [
		{
			slug: 'first-post',
			frontmatter: {
				title: 'Created with Svelte',
				date: '2020-01-01',
				preview: '/images/svelte.png',
				excerpt: 'I have been building with Svelte',
				tags: ['first', 'post']
			}
		},
		{
			slug: 'first-post',
			frontmatter: {
				preview: '/images/ml.png',
				title: 'Starting to learn Machine Learning',
				date: '2020-01-01',
				tags: ['first', 'post']
			}
		}
	];
	export let postsPerPage = 10;
</script>

<svelte:head>
	<title>Cameron Aziz - Blog</title>
</svelte:head>

<Layout segment="home">
	<Hero />
	<Posts {posts} limit={postsPerPage} />
	<Breadcrumb isFirst={true} isLast={postsPerPage > posts.length} page="1" />
</Layout>
