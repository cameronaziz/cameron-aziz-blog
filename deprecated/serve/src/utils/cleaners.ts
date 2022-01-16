export const state = (state: string): Post.State => {
  switch (state) {
    case 'draft':
      return 'draft';
    case 'complete':
      return 'complete';
    case 'live':
      return 'live';
    default:
      throw new Error(`Unknown state: ${state}`);
  }
};

export const layout = (layout: string): Post.Layout => {
  switch (layout) {
    case 'blog':
      return 'blog';
    default:
      throw new Error(`Unknown layout: ${layout}`);
  }
};
