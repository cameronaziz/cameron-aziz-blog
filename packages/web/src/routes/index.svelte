<script lang="ts">
	import { ApolloClient, InMemoryCache } from '@apollo/client';
	import { query, setClient } from 'svelte-apollo';
	import Breadcrumb from '../components/Breadcrumb.svelte';
	import Hero from '../components/Hero.svelte';
	import Posts from '../components/Posts.svelte';
	import { GET_POSTS } from '../queries';
	import type Blog from '../typings/blog';
	import type GraphQL from '../typings/graphql';
	import Layout from './_layout.svelte';

	const client = new ApolloClient({
		uri: 'http://localhost:4000/',
		cache: new InMemoryCache()
	});

	setClient(client);
	export let postsPerPage = 10;

	const posts = query<GraphQL.Response<Blog.Post[], 'posts'>, void>(GET_POSTS);
</script>

<svelte:head>
	<title>Cameron Aziz - Blog</title>
</svelte:head>

<Layout segment="home">
	<Hero />
	<Posts limit={postsPerPage} {posts} />
	<Breadcrumb isFirst={true} isLast={true} page="1" />
</Layout>
