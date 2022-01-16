export interface Storage {
  state: string;
  layout: string;
  body: string;
  'spotlight-image': string;
  title: string;
}

export type State = 'draft' | 'complete' | 'live';
export type Layout = 'blog';

export interface Schema {
  slug: string;
  state: State;
  layout: Layout;
  body: string;
  spotlightImage: string;
  title: string;
}

export as namespace Post
