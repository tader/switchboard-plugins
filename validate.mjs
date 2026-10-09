import fs from 'node:fs';
import assert from 'node:assert/strict';
const file = new URL('./plugins.json', import.meta.url);
const text = fs.readFileSync(file, 'utf8');
assert(Buffer.byteLength(text) <= 1024 * 1024, 'Catalog must be at most 1 MB');
const catalog = JSON.parse(text);
assert.equal(catalog.schemaVersion, 1, 'Unsupported schema version');
assert(Array.isArray(catalog.plugins), 'plugins must be an array');
const ids = new Set();
for (const p of catalog.plugins) {
  assert(p && typeof p.id === 'string' && /^[a-z0-9][a-z0-9-]{0,63}$/.test(p.id), 'Invalid plugin id');
  assert(!ids.has(p.id), `Duplicate plugin id: ${p.id}`);
  ids.add(p.id);
  assert(typeof p.name === 'string' && p.name.trim(), `Missing name: ${p.id}`);
  assert(typeof p.description === 'string', `Missing description: ${p.id}`);
  assert(typeof p.repo === 'string' && /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(p.repo) && !p.repo.split('/').some(p => p === '.' || p === '..'), `Invalid repo: ${p.id}`);
  if (p.icon !== undefined) { const icon = new URL(p.icon); assert(icon.protocol === 'https:' && icon.hostname === 'raw.githubusercontent.com' && !icon.username && !icon.password && !icon.port, `Invalid icon: ${p.id}`); }
  if (p.ref !== undefined) assert(typeof p.ref === 'string' && p.ref && !/[\x00-\x20\x7f]/.test(p.ref), `Invalid ref: ${p.id}`);
  if (p.path !== undefined) assert(typeof p.path === 'string' && p.path && p.path === p.path.trim() && !p.path.startsWith('/') && !p.path.endsWith('/') && !/[\\\x00-\x1f\x7f]/.test(p.path) && !p.path.split('/').some(p => p === '..' || p === '.'), `Invalid path: ${p.id}`);
}
console.log(`Validated ${ids.size} plugin listings`);
