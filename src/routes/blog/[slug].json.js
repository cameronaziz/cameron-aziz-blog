import fs from 'fs';
import { absolutePath } from '../../utils/paths';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(req) {
  const {slug} = req.params;
  const file = absolutePath(`data/posts/${slug}.json`);

  if (!fs.existsSync(file)) {
    return {status: 404};
  }

  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  return {body: {
      data,
    }};
}
