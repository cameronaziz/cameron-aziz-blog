<script context="module">
	export async function load(req) {
		const {
			params,
			url: { origin },
		} = req;
		const res = await fetch(`${origin}/blog/${params.slug}.json`);
		const json = await res.json();

		if (res.status !== 200) {
			return {
				props: {
					error: json.error,
				},
			};
		}

		return {
			props: {
				post: json.data,
			},
		};
	}
</script>

<script lang="ts">
	import Layout from '../_layout.svelte';

	export let post: Blog.Post = {} as any;
</script>

<svelte:head>
	<!-- <title>{$post.data.post.title}</title> -->
</svelte:head>

<Layout segment="home">
	<div class="container">
		<h1>{post.title}</h1>
		{#if post['spotlight-image']}
			<img src={post['spotlight-image']} alt="" />
		{/if}
		<div class="content">
			{post.body}
		</div>
	</div>
</Layout>

<style lang="scss">
	.container {
		max-width: 800px;
		margin: 0 auto;
	}

	h1 {
		font-weight: 600;
		margin-top: 2rem;
		text-align: center;
	}

	img {
		object-fit: cover;
		margin: 0 auto;
		max-width: 100%;
		display: block;
		height: auto;
		border-radius: 10px;
		box-shadow: 0 4px 20px rgba(150, 150, 150, 0.25);
		-webkit-box-shadow: 0 4px 20px rgba(150, 150, 150, 0.25);
		transition: 250ms ease-in all;
		margin-bottom: 15px;
	}

	.content {
		:global(h2) {
			font-size: 1.4em;
			font-weight: 500;
		}

		:global(pre) {
			background-color: #f9f9f9;
			box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
			padding: 0.5em;
			border-radius: 2px;
			overflow-x: auto;
			:global(code) {
				background-color: transparent;
				padding: 0;
			}
		}

		:global(ul) {
			line-height: 1.5;
			:global(li) {
				margin: 0 0 0.5em 0;
			}
		}
	}
</style>
