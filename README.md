# InSAR Norway & ML Results

The website link is [here](https://norce-eo.github.io/insar-norway-ml/).

## Maintenance Guide

### 1. Running Locally
To preview the site on your machine:
```bash
bundle exec jekyll serve
# Open http://localhost:4000/insar-norway-ml/
```

### 2. Adding New Pages
Create a new Markdown file in the `_pages` directory (e.g., `_pages/new-topic.md`). Use the following frontmatter:
```yaml
---
title: My New Topic
permalink: /category/my-new-topic/
parent: Category Name (e.g., Anomaly Detection)
nav_order: 10
---
```

### 3. Adding Images & Gallery
1.  Place your high-resolution images in `assets/figs/your-folder/`.
2.  **Generate Thumbnails:** To ensure fast loading, run the thumbnail generator script:
    ```bash
    ./assets/generate_thumbnails.sh
    ```
    This creates optimized thumbnails in a `thumbnails/` subdirectory for each folder.
3.  **Add to Page:** Use the `gallery_figure` include in your markdown:
    ```liquid
    {% include gallery_figure.html src="/assets/figs/your-folder/image.png" caption="Description" %}
    ```

### 4. Video & Math
- **Videos:** Place videos in `assets/video/`. For transcode instructions, check `assets/video/transcode.sh`.
- **Math:** Use standard LaTeX format. Inline: `$k$-means`. Block: `$$ \sum ... $$`.

### 5. Updating Styles
- Main styles are in `assets/css/modern-style.css`.
- Syntax highlighting theme is `assets/css/syntax.css` (Monokai).

### 6. Deployment
The site is built automatically via GitHub Pages. Just push your changes to the `main` branch.
