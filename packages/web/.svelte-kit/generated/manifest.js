const c = [
	() => import("../runtime/components/layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/contact.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/blog/[slug].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/contact.svelte
	[/^\/contact\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/blog/[slug].svelte
	[/^\/blog\/([^/]+?)\/?$/, [c[0], c[5]], [c[1]], (m) => ({ slug: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];