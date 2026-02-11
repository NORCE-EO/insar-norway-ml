---
title: Clustering
permalink: /clustering/
nav_order: 6
has_children: true
---

Clustering experiments group time series with similar deformation profiles. We contrast a purely temporal baseline against graph-based smoothing strategies that inject spatial consistency.

{% capture baseline_content %}

- [Batched K-means]({{ '/clustering/batched-kmeans/' | relative_url }}) - mini-batch centroid updates for scalable clustering on large datasets.

{% endcapture %}
{% include content_section.html title="Baseline" intro="Fast and scalable clustering over dynamic and static features." content=baseline_content %}

{% capture smooth_content %}

- [Spatial-Smoothing Clustering]({{ '/clustering/spatial-smoothing-clustering/' | relative_url }}) - graph-based smoothing before mini-batch clustering.

{% endcapture %}
{% include content_section.html title="Graph-Aware Extension" intro="Inject neighborhood information to reduce local noise and improve cluster coherence." content=smooth_content %}
