import { defineConfig } from 'astro/config';

const rawBase = (process.env.BASE_PATH || '/').trim();
const normalizedBase =
  rawBase === '/' ? '/' : `/${rawBase.replace(/^\/+|\/+$/g, '')}`;
const siteUrl = process.env.SITE_URL?.trim() || undefined;

export default defineConfig({
  ...(siteUrl ? { site: siteUrl } : {}),
  base: normalizedBase,
  trailingSlash: 'always',
});
