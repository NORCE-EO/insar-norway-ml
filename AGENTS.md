# Agent instructions — InSAR Norway ML site

This document gives AI agents (and contributors) the context and conventions for working on this repository.

## What this project is

- **Jekyll** static site using the **Just the Docs** theme (`remote_theme: just-the-docs/just-the-docs`).
- Content: results and methods from applying ML techniques to [InSAR Norway](https://insar.ngu.no/) data (anomaly detection, clustering, etc.).
- **Goals for the site**: clear navigation, professional look, dynamic image handling (preview + zoom on click), and an easy way to add new content.

## Where things live

| Purpose | Location |
|--------|----------|
| Site config, theme, collections | `_config.yml` |
| Page content (Markdown) | `_pages/*.md`, `index.md` |
| Custom CSS (gallery, lightbox, width) | `_sass/custom/custom.scss` |
| Custom head (MathJax, lightbox, favicon) | `_includes/head_custom.html` |
| Custom footer | `_includes/footer_custom.html` |
| Gallery includes | `_includes/gallery_section.html`, `_includes/gallery_figure.html` |
| Custom JS | `assets/js/lightbox.js`, `assets/js/mathjax_config.js` |
| Images | `assets/figs/` (by topic: `autoencoder/`, `clustering/`, etc.) |

## Rules and skills

- **Cursor rules** in `.cursor/rules/` define how to edit this site (navigation, images, adding content, styling). Prefer those rules when changing the site.
- **Repo-specific skills** in `.agents/skills/`:
  - **web-design-guidelines** — Use when reviewing UI, accessibility, or design. Fetches and applies [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines).
  - **web-component-design** — Use when adding or refactoring interactive UI (e.g. image lightbox): composition, accessibility, and consistent patterns.

When improving the site (navigation, image zoom, look-and-feel, content workflow), follow `.cursor/rules/` and, where relevant, apply the skills above.

## Priorities when improving the site

1. **Navigation** — Sidebar is built from page front matter: `nav_order`, `parent`, `has_children`. Add new pages to `_pages/` with the correct `parent` and `nav_order`.
2. **Images** — Use gallery includes for multi-figure sections; images open in the lightbox when clicked (`data-zoom`).
3. **Look and organization** — Override styles in `_sass/custom/custom.scss`; do not fork the theme.
4. **Adding content** — New page = new file in `_pages/` with `title`, `permalink`, `parent` (if child), `nav_order`; no separate nav file to edit.

## Tech constraints

- **Theme**: Just the Docs — override only via `_includes/`, `_sass/custom/`. No forking.
- **Build**: Jekyll (e.g. `bundle exec jekyll serve`). No Node build step.
- **Math**: MathJax loaded via `_includes/head_custom.html`; LaTeX in content works by default.

Keep the site buildable and ensure new content uses the same front matter pattern so the sidebar stays correct.
