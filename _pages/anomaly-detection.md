---
title: Anomaly Detection
permalink: /anomaly-detection/
nav_order: 2
has_children: true
---

This section gathers methods that flag abnormal displacement patterns in the InSAR catalogue. The goal is to compare an interpretable baseline against deep models that exploit temporal and spatial structure.

{% capture baseline_content %}

- [RANSAC Baseline]({{ '/anomaly-detection/ransac/' | relative_url }}) - consensus-based robust fitting used for outlier detection and regularized resampling.

{% endcapture %}
{% include content_section.html title="Baseline" intro="Strong classical reference model." content=baseline_content %}

{% capture deep_content %}

- [Autoencoder]({{ '/anomaly-detection/autoencoder/' | relative_url }}) - point-wise reconstruction on reservoir embeddings.
- [Graph Autoencoder]({{ '/anomaly-detection/graph-autoencoder/' | relative_url }}) - reconstruction with explicit neighborhood context.

{% endcapture %}
{% include content_section.html title="Deep Learning Models" intro="Reconstruction-based methods with increasing relational capacity." content=deep_content %}
