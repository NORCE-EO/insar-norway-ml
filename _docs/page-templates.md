# Page template options for figure layout

Choose one (or mix) of these templates for `_pages` content. All use a **shared convention**: figures are wrapped in a container with a class so the site CSS/JS can provide side-by-side layout and click-to-zoom. After you pick, we implement the corresponding layout + lightbox.

---

## Template A — Two-column figure pairs

**Idea:** Pair figures side-by-side (e.g. “map” + “clusters”) so each region or concept shows two images in one row. Good for your current “map then clusters” pattern.

**Layout sketch:**
```
[  Figure 1  ] [  Figure 2  ]
     caption       caption
```
On narrow screens, columns stack vertically.

**Best for:** Batched K-means, Spatial-Smoothing, Autoencoder (mse + mse_thresh pairs), RANSAC (e.g. 2D map + time series).

**Example markup (Liquid + HTML):**
```html
<div class="figure-grid figure-grid--2col">
  <figure class="figure-grid__item">
    <a href="{{ '/assets/figs/clustering/Lyngen-small_batched-kmeans-dyn_map.png' | relative_url }}" class="figure-zoom" data-zoom>
      <img src="{{ '/assets/figs/clustering/Lyngen-small_batched-kmeans-dyn_map.png' | relative_url }}" alt="Lyngen clustering map (dynamic)" loading="lazy">
    </a>
    <figcaption>Clustering partition (dynamic features only).</figcaption>
  </figure>
  <figure class="figure-grid__item">
    <a href="{{ '/assets/figs/clustering/Lyngen-small_batched-kmeans-dyn_clusters.png' | relative_url }}" class="figure-zoom" data-zoom>
      <img src="{{ '/assets/figs/clustering/Lyngen-small_batched-kmeans-dyn_clusters.png' | relative_url }}" alt="Lyngen cluster stats (dynamic)" loading="lazy">
    </a>
    <figcaption>Mean and standard deviation of each cluster (dynamic only).</figcaption>
  </figure>
</div>
```

**Pros:** Minimal change from current structure; clear pairing.  
**Cons:** Only 2 per row; for 4 figures per region you get 2 rows.

---

## Template B — Three-column bird’s-eye (compare regions)

**Idea:** One row per “type” of figure, with columns = regions (Lyngen | Nordnes | Svalbard). Gives a direct bird’s-eye comparison across regions.

**Layout sketch:**
```
[ Lyngen map ] [ Nordnes map ] [ Svalbard map ]
     caption        caption         caption
[ Lyngen clusters ] [ Nordnes clusters ] [ Svalbard clusters ]
```
On narrow screens, columns stack (Lyngen block, then Nordnes, then Svalbard).

**Best for:** Results sections where you show the same kind of plot for each region and want to compare at a glance.

**Example markup:**
```html
<h3>Clustering partition (dynamic features only)</h3>
<div class="figure-grid figure-grid--3col">
  <figure class="figure-grid__item">
    <a href="..." class="figure-zoom" data-zoom><img src=".../Lyngen-small_batched-kmeans-dyn_map.png" alt="Lyngen" loading="lazy"></a>
    <figcaption>Lyngen</figcaption>
  </figure>
  <figure class="figure-grid__item">
    <a href="..." class="figure-zoom" data-zoom><img src=".../Nordnes_batched-kmeans-dyn_map.png" alt="Nordnes" loading="lazy"></a>
    <figcaption>Nordnes</figcaption>
  </figure>
  <figure class="figure-grid__item">
    <a href="..." class="figure-zoom" data-zoom><img src=".../Svalbard-1_batched-kmeans-dyn_map.png" alt="Svalbard" loading="lazy"></a>
    <figcaption>Svalbard</figcaption>
  </figure>
</div>
```

**Pros:** Strong bird’s-eye comparison; fewer rows.  
**Cons:** Reorders content (by “figure type” then region instead of “region” then figures); may need to restructure section headings.

---

## Template C — Responsive gallery (2–3 columns, many thumbnails)

**Idea:** All figures in a responsive grid (2 columns on tablet, 3 on desktop). Each cell is a thumbnail with optional short caption; click opens full-size in a lightbox. Maximizes “many pictures at once” without fixed pairing.

**Layout sketch:**
```
[ fig1 ] [ fig2 ] [ fig3 ]
[ fig4 ] [ fig5 ] [ fig6 ]
```
Captions can sit under each thumbnail or only in the lightbox.

**Best for:** RANSAC (many different plots), or any page where you’re okay with a gallery feel and optional short captions (e.g. “Lyngen – map”, “Lyngen – clusters”).

**Example markup:**
```html
<div class="figure-grid figure-grid--gallery">
  <figure class="figure-grid__item">
    <a href="{{ '/assets/figs/...' | relative_url }}" class="figure-zoom" data-zoom>
      <img src="{{ '/assets/figs/...' | relative_url }}" alt="Lyngen map" loading="lazy">
    </a>
    <figcaption>Lyngen — map</figcaption>
  </figure>
  <!-- more items -->
</div>
```

**Pros:** Very flexible; works for 4, 6, or 12 figures; clear “click to zoom” affordance.  
**Cons:** Less narrative order than “two-column pairs”; captions need to be short to avoid clutter.

---

## Template D — Hybrid: section text + two-column pairs per region

**Idea:** Keep your current narrative (Overview → Results → Lyngen → Nordnes → Svalbard). Within each region, use **Template A** (two-column pairs) so “map + clusters” sit side-by-side. Combines readability with a more compact, bird’s-eye-friendly layout.

**Layout sketch:**
```
### Lyngen
Clustering partition (dynamic only) | Mean and std (dynamic only)
[   map   ] [ clusters ]

Clustering partition (dyn+static)    | Mean and std (dyn+static)
[   map   ] [ clusters ]

### Nordnes
... same pattern ...
```

**Best for:** Batched K-means, Spatial-Smoothing Clustering, Autoencoder — any page that already has “region → 2 or 4 figures” and you want to keep the narrative but reduce vertical scroll.

**Markup:** Same as Template A; you just use multiple `figure-grid--2col` blocks per region (one for each pair).

**Pros:** Preserves current section flow; clear pairing; easy to add to existing pages.  
**Cons:** Still 2 (or 4) figures per region block, not a single 3-way comparison row.

---

## Shared behavior (all templates)

- **Click to zoom:** Every figure link uses `class="figure-zoom"` and `data-zoom`. One shared script opens the image in a lightbox/overlay (full-size or scaled), with Escape to close and optional focus trap for accessibility.
- **Captions:** Use `<figure>` + `<figcaption>` so captions are associated and can be shown in the lightbox if desired.
- **Paths:** Keep using `{{ '/assets/figs/...' | relative_url }}` for both `href` (zoom target) and `img src`.

---

## Recommendation

- **Template D (Hybrid)** is the most direct upgrade: keep your current page structure, add two-column pairs and click-to-zoom. No reordering of content.
- **Template B** is best if you want a strong “compare regions in one row” bird’s-eye view and are okay restructuring some sections (e.g. “Maps (all regions)” then “Clusters (all regions)”).
- **Template A** is the minimal change (only add pairs; no region restructuring).
- **Template C** fits RANSAC or any page with many heterogeneous figures where a gallery is acceptable.

You can also **mix**: e.g. Template D for Batched K-means and Spatial-Smoothing, Template B for one “Results at a glance” section on the homepage or a summary page, and Template C for RANSAC.

Tell me which template(s) you want (e.g. “D for clustering pages, A for autoencoder, C for RANSAC”), and I’ll implement the layout classes, lightbox script, and convert one or two pages as examples.
