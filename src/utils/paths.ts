import path from 'path';

export const rootDir = (): string =>
  path.join(process.cwd(), '../..');

export const absolutePath = (relativePath: string): string =>
  path.join(rootDir(), relativePath);
