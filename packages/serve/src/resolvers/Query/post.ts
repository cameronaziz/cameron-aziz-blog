// @ts-check
import { DATA_DIR } from '@settings';
import { Post } from '@typings';
import { cleaners } from '@utils';
import fs from 'fs';
import path from 'path';

const postsDir = path.join(DATA_DIR, 'posts');

interface Args {
  slug: string;
}

const post = (_parent: unknown, args: Args): Post.Schema => {
  console.log(args);
  const file = `${args.slug}.json`;
  const filePath = path.join(postsDir, file);
  const data = fs.readFileSync(filePath) as unknown as string;
  const rawPost: Post.Storage = JSON.parse(data);
  const post: Post.Schema = {
    slug: args.slug,
    state: cleaners.state(rawPost.state),
    layout: cleaners.layout(rawPost.layout),
    body: rawPost.body,
    spotlightImage: rawPost['spotlight-image'],
    title: rawPost.title,
  };
  console.log(post);
  return post;
};

export default post;
