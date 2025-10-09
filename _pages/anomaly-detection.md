---
title: Anomaly Detection
permalink: /anomaly-detection/
nav_order: 1
has_children: true
toc: false
---

This section gathers methods that flag abnormal displacement patterns in the InSAR catalogue. The focus is on contrasting a robust baseline with deep-learning approaches that leverage reconstruction and relational cues.

- The [RANSAC baseline]({{ '/anomaly-detection/ransac/' | relative_url }}) provides interpretable consensus-driven outlier detection and produces regularised time series used downstream.
- The [autoencoder]({{ '/anomaly-detection/autoencoder/' | relative_url }}) benchmarks point-wise reconstruction errors on the regular grid produced by RANSAC.
- The [graph autoencoder]({{ '/anomaly-detection/graph-autoencoder/' | relative_url }}) extends the idea to spatial neighbourhood graphs to capture local correlations.
