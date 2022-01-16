// @ts-check
import { DATA_DIR } from '@settings';
import { Post } from '@typings';
import { cleaners } from '@utils';
import fs from 'fs';
import path from 'path';

const postsDir = path.join(DATA_DIR, 'posts');

const posts = (): Post.Schema[] => {
  const postFiles = fs.readdirSync(postsDir);
  const posts = postFiles.map((file) => {
    const data = fs.readFileSync(path.join(postsDir, file)) as unknown as string;
    const rawPost: Post.Storage = JSON.parse(data);
    const post: Post.Schema = {
      slug: file.replace('.json', ''),
      state: cleaners.state(rawPost.state),
      layout: cleaners.layout(rawPost.layout),
      body: rawPost.body,
      spotlightImage: rawPost['spotlight-image'],
      title: rawPost.title,
    };
    return post;
  });
  return posts;
};

export default posts;
