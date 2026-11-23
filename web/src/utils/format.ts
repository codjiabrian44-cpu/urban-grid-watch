export type Lang = 'fr' | 'en';

/**
 * Resolves a root-relative path against Astro's configured BASE_URL so static builds
 * work identically at root (/) and under an optional deployment subpath.
 */
export function withBase(route: string): string {
  const basePrefix = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  const cleanRoute = route.startsWith('/') ? route : `/${route}`;
  return basePrefix ? `${basePrefix}${cleanRoute}` : cleanRoute;
}

/**
 * Escapes raw HTML entities so markdown-derived copy remains safe before formatting.
 */
function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Renders inline copy safely: supports **bold**, *italic*, and clickable [SRC-XX] archival badges
 * linking directly to the localized bibliography entry (#src-XX). Binds any immediately trailing
 * punctuation to the final badge so punctuation never sits behind a gap or wraps alone.
 */
export function formatRichText(text: string, lang: Lang): string {
  let html = escapeHtml(text);

  // Convert backtick-wrapped or raw [SRC-XX, SRC-YY] citation groups into individual anchor links.
  html = html.replace(
    /`?\[(SRC-\d{2}(?:\s*,\s*SRC-\d{2})*)\]`?([.,;:)]?)/g,
    (_match, group: string, trailing: string) => {
      const ids = group.split(',').map((item) => item.trim());
      const labelPrefix = lang === 'fr' ? 'Voir source' : 'View source';
      const parts = ids.map((id, index) => {
        const anchor = id.toLowerCase();
        const badge = `<a class="cite-badge" href="${withBase(`/${lang}/sources/#${anchor}`)}" aria-label="${labelPrefix} ${id}">${id}</a>`;
        if (index === ids.length - 1 && trailing) {
          return `<span class="cite-tail">${badge}${trailing}</span>`;
        }
        return badge;
      });
      return `<span class="cite-group">${parts.join('')}</span>`;
    },
  );

  // Render inline code spans if any remain outside citations.
  html = html.replace(/`([^`]+)`/g, '<code class="inline-term">$1</code>');

  // Render **strong** first (allowing nested *italic* inside bold phrases), then *emphasis*.
  html = html.replace(/\*\*([\s\S]+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*\n]+?)\*/g, '<em>$1</em>');

  return html;
}
