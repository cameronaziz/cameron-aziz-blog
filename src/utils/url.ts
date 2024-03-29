import { derived, writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined';

const href = writable(isBrowser ? window.location.href : 'https://example.com');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const URL = isBrowser ? window.URL : require('url').URL;

if (isBrowser) {
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  const updateHref = () => href.set(window.location.href);

  history.pushState = function (...args) {
    originalPushState.apply(this, args);
    updateHref();
  };

  history.replaceState = function (...args) {
    originalReplaceState.apply(this, args);
    updateHref();
  };

  window.addEventListener('popstate', updateHref);
  window.addEventListener('hashchange', updateHref);
}

export default {
  subscribe: derived(href, ($href) => new URL($href)).subscribe,
  ssrSet: (urlHref: string): void => href.set(urlHref),
};
