import { readFileSync } from 'fs';

export function readHome(): string {
  return readFileSync(`/Users/eli/www/cp3/home.md`, 'utf8') as string;
}

export function readOurBeef(): string {
  return readFileSync(`/Users/eli/www/cp3/ourbeef.md`, 'utf8') as string;
}
