import { cp } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const src = new URL('../src/schema', import.meta.url);
const dest = new URL('../dist/schema', import.meta.url);

if (existsSync(new URL('../src/schema', import.meta.url))) {
  await cp(src, dest, { recursive: true });
  console.log('✓ Copied GraphQL SDL from src/schema -> dist/schema');
} else {
  console.warn('⚠ src/schema missing; nothing to copy');
}