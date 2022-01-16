import path from 'path';

export const absolutePath = (relativePath: string): string =>
  path.join(process.cwd(), relativePath);
