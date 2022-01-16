import fs from 'fs';
import { absolutePath } from '../utils/paths';

export async function get() {
  const files = fs.readdirSync(absolutePath('data/posts'));

  const data = files.map((file) => {
    const filePath = absolutePath(`data/posts/${file}`);
    const fileData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileData);
  });
  return {body: {
      data,
    }};
}
