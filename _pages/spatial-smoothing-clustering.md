---
title: Spatial-Smoothing Clustering
permalink: /clustering/spatial-smoothing-clustering/
parent: Clustering
nav_order: 8
---

This experiment extends [Batched K-means]({{ '/clustering/batched-kmeans/#batched-k-means-overview' | relative_url }}) by smoothing feature vectors over graph neighborhoods before clustering.

Smoothing combines each node feature with features from nearby nodes over $H$ hops:

$$
\boldsymbol{x}_i^{(h)} = \alpha \boldsymbol{x}_i^{(h - 1)} + (1 - \alpha) \left( \sum_{j \in \mathcal{N}_i} \boldsymbol{x}_j^{(h - 1)} \right), \qquad h=1, \dots, H
$$

where $\alpha$ controls how strongly the original feature is preserved and $\mathcal{N}_i$ is the neighborhood of node $i$.

### Method Visual Overview

{% include standalone_figure.html src="/assets/figs/clustering-smoothed/kmeans_smoothed.png" caption="Feature smoothing over graph neighborhoods before mini-batch clustering." max_width="650px" %}

The graph is built and sampled as in the [Graph Autoencoder]({{ '/anomaly-detection/graph-autoencoder/#graph-construction' | relative_url }}).

## Results

Results below use $H=3$ hops. More hops increase smoothing; fewer hops preserve more local variability.

{% capture lyngen_figures %}
{% include gallery_figure.html src="/assets/figs/clustering-smoothed/Lyngen-small_batched-kmeans-dyn_smoothed_map.png" caption="Lyngen: clustering partition (dynamic features only)." %}
{% include gallery_figure.html src="/assets/figs/clustering-smoothed/Lyngen-small_batched-kmeans-dyn_smoothed_clusters.png" caption="Lyngen: cluster mean and standard deviation (dynamic only)." %}
{% include gallery_figure.html src="/assets/figs/clustering-smoothed/Lyngen-small_batched-kmeans-dyn+static_smoothed_map.png" caption="Lyngen: clustering partition (dynamic and static features)." %}
{% include gallery_figure.html src="/assets/figs/clustering-smoothed/Lyngen-small_batched-kmeans-dyn+static_smoothed_clusters.png" caption="Lyngen: cluster mean and standard deviation (dynamic and static)." %}
{% endcapture %}
{% include gallery_section.html title="Lyngen" content=lyngen_figures %}

{% capture nordnes_figures %}
{% include gallery_figure.html src="/assets/figs/clustering-smoothed/Nordnes_batched-kmeans-dyn_smoothed_map.png" caption="Nordnes: clustering partition (dynamic features only)." %}
{% include gallery_figure.html src="/assets/figs/clustering-smoothed/Nordnes_batched-kmeans-dyn_smoothed_clusters.png" caption="Nordnes: cluster mean and standard deviation (dynamic only)." %}
{% include gallery_figure.html src="/assets/figs/clustering-smoothed/Nordnes_batched-kmeans-dyn+static_smoothed_map.png" caption="Nordnes: clustering partition (dynamic and static features)." %}
{% include gallery_figure.html src="/assets/figs/clustering-smoothed/Nordnes_batched-kmeans-dyn+static_smoothed_clusters.png" caption="Nordnes: cluster mean and standard deviation (dynamic and static)." %}
{% endcapture %}
{% include gallery_section.html title="Nordnes" content=nordnes_figures %}

{% capture svalbard_figures %}
{% include gallery_figure.html src="/assets/figs/clustering-smoothed/Svalbard-1_batched-kmeans-dyn_smoothed_map.png" caption="Svalbard: clustering partition (dynamic features only)." %}
{% include gallery_figure.html src="/assets/figs/clustering-smoothed/Svalbard-1_batched-kmeans-dyn_smoothed_clusters.png" caption="Svalbard: cluster mean and standard deviation (dynamic only)." %}
{% include gallery_figure.html src="/assets/figs/clustering-smoothed/Svalbard-1_batched-kmeans-dyn+static_smoothed_map.png" caption="Svalbard: clustering partition (dynamic and static features)." %}
{% include gallery_figure.html src="/assets/figs/clustering-smoothed/Svalbard-1_batched-kmeans-dyn+static_smoothed_clusters.png" caption="Svalbard: cluster mean and standard deviation (dynamic and static)." %}
{% endcapture %}
{% include gallery_section.html title="Svalbard" content=svalbard_figures %}
