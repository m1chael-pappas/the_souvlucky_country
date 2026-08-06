/**
 * Single source of truth for the site's public origin.
 *
 * Set NEXT_PUBLIC_SITE_URL per environment (production, preview, local) so the
 * canonical URL always matches the host actually being served. Everything that
 * emits an absolute URL (metadataBase, JSON-LD, sitemap, robots) reads from
 * here rather than hardcoding the domain.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thesouvluckycountry.com.au"
).replace(/\/+$/, "");

/** Absolute URL for a site-relative path, e.g. absoluteUrl("/menu"). */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
