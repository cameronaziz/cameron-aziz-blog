<script lang="ts">
	import type Blog from '../typings/blog';

	export let limit = -1;
	export let posts: Blog.Post[];
</script>

<div class="posts">
	{#each posts.slice(0, limit) as post}
		<a class="post" href="/blog/{post.slug}">
			{#if post['spotlight-image']}
				<img src={post['spotlight-image']} alt="" />
			{/if}
			<h2>{post.title}</h2>
			<div class="description">{post.body}</div>
		</a>
	{/each}
</div>

<style lang="scss">
	.posts {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 2rem;
	}

	.post {
		cursor: pointer;
		text-decoration: none;
		img {
			box-shadow: 0 4px 20px rgba(150, 150, 150, 0.25);
			margin-bottom: 15px;
			aspect-ratio: 5 / 2;
			object-fit: cover;
			width: 100%;
			border-radius: 1.5rem;
			-webkit-box-shadow: 0 4px 20px rgba(150, 150, 150, 0.25);
			transition: 250ms ease-in all;
		}

		h2 {
			margin: 0;
			padding: 0 0.5rem;
			font-size: 1.25rem;
			font-weight: 600;
		}

		.description {
			padding: 0.5rem;
			opacity: 0.4;
		}

		&:hover {
			img {
				box-shadow: 0 4px 20px rgba(100, 100, 100, 0.25);
				-webkit-box-shadow: 0 4px 20px rgba(100, 100, 100, 0.25);
				transform: translateY(-2px);
			}
		}
	}

	@media (max-width: 767px) {
		.posts {
			grid-template-columns: 1fr;
		}
		.post:nth-child(4n + 1),
		.post:nth-child(4n + 2),
		.post:nth-child(4n + 3),
		.post:nth-child(4n + 4) {
			grid-column: span 1;
		}
	}
</style>
