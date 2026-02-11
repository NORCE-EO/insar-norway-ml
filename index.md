---
layout: default
title: InSAR Norway & Machine Learning
permalink: /
nav_order: 1
---

<div class="page-hero">
  <p class="page-hero__kicker">InSAR Norway - Machine Learning Research</p>
  <div class="page-hero__media">
    <img src="{{ '/assets/figs/cover_img.png' | relative_url }}" alt="InSAR Norway and machine learning overview" class="page-hero__img">
  </div>
  <p class="page-hero__lead">This site summarizes machine learning experiments run on the <a href="https://insar.ngu.no/">InSAR Norway</a> catalogue. Each section groups methods and figures so comparisons across regions and modeling choices stay fast and readable.</p>
</div>

{% capture anomaly_content %}

- [RANSAC Baseline]({{ '/anomaly-detection/ransac/' | relative_url }}) - robust line and plane fitting used for outlier detection and time-series regularization.
- [Autoencoder]({{ '/anomaly-detection/autoencoder/' | relative_url }}) - reconstruction-based anomaly scoring on regularized time series.
- [Graph Autoencoder]({{ '/anomaly-detection/graph-autoencoder/' | relative_url }}) - neighborhood-aware reconstruction to detect locally inconsistent behavior.

{% endcapture %}
{% include content_section.html title="Anomaly Detection" intro="Methods focused on identifying abnormal displacement patterns." content=anomaly_content %}

{% capture clustering_content %}

- [Batched K-means]({{ '/clustering/batched-kmeans/' | relative_url }}) - scalable mini-batch clustering for large InSAR feature sets.
- [Spatial-Smoothing Clustering]({{ '/clustering/spatial-smoothing-clustering/' | relative_url }}) - clustering on smoothed graph-aware features that combine temporal and spatial information.

{% endcapture %}
{% include content_section.html title="Clustering" intro="Methods that partition the catalogue into coherent deformation regimes." content=clustering_content %}
