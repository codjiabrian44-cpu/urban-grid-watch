import { defineConfig } from 'astro/config';

// Production is served from the custom domain https://br1an.tech at the root.
// Both values can still be overridden via env (PUBLIC_* preferred, legacy names accepted).
const DEFAULT_SITE_URL = 'https://br1an.tech';
const DEFAULT_BASE_PATH = '/';

const rawBase = (
  process.env.PUBLIC_BASE_PATH ??
  process.env.BASE_PATH ??
  DEFAULT_BASE_PATH
).trim();
const trimmedBase = rawBase.replace(/^\/+|\/+$/g, '');
const normalizedBase = trimmedBase === '' ? '/' : `/${trimmedBase}`;
const siteUrl =
  (process.env.PUBLIC_SITE_URL ?? process.env.SITE_URL ?? '').trim() ||
  DEFAULT_SITE_URL;

export default defineConfig({
  site: siteUrl,
  base: normalizedBase,
  trailingSlash: 'always',
});
