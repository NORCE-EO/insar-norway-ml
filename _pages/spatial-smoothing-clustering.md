---
title: Spatial-Smoothing Clustering
permalink: /clustering/spatial-smoothing-clustering/
parent: Clustering
---


We repeated the same approach as in [Batched k-means]({{ '/clustering/batched-kmeans/# Batched $k$-Means overview' | relative_url }}) with the difference that the feature vectors are smoothed spatially.
Smoothing is implemented by combining the features of each node with those of the neighborhood at $H$-hops:

$$
\boldsymbol{x}_i^{(h)} = \alpha \boldsymbol{x}_i^{(h - 1)} + (1 - \alpha) \left( \sum_{j \in \mathcal{N}_i} \boldsymbol{x}_j^{(h - 1)} \right) \qquad h=1, \dots, H
$$

where $\boldsymbol{x}_i^{(h)}$ are the features after applying smoothing $h$ times, $\alpha$ controls the smoothing level, and $\mathcal{N}_i$ is the neighborhood of the $i$-th node.
At each iteration, the features are smoothed by combining them with neighbors from a larger neighbordhood, i.e., a neighbordhood reachable with multiple hops from the start.

<img src="{{ '/assets/figs/clustering-smoothed/kmeans_smoothed.png' | relative_url }}" style="width: 100%; max-width: 650px; display: block; margin: 0 auto;">

The graph is build (and sampled) as for in the [Graph Auto Encoder]({{ '/anomaly-detection/graph-autoencoder/# Graph Construction' | relative_url }}).

## Results

The results are obtained using $H=3$ hops. More hops would result in more smoothing, while less hops less smoothing.

### Lyngen

Clustering partition (dynamic features only).

![]({{ '/assets/figs/clustering-smoothed/Lyngen-small_batched-kmeans-dyn_smoothed_map.png' | relative_url }})

Mean and standard deviation of each cluster (dynamic features only).

![]({{ '/assets/figs/clustering-smoothed/Lyngen-small_batched-kmeans-dyn_smoothed_clusters.png' | relative_url }})

Clustering partition (dynamic and static features).

![]({{ '/assets/figs/clustering-smoothed/Lyngen-small_batched-kmeans-dyn+static_smoothed_map.png' | relative_url }})

Mean and standard deviation of each cluster (dynamic and static features).

![]({{ '/assets/figs/clustering-smoothed/Lyngen-small_batched-kmeans-dyn+static_smoothed_clusters.png' | relative_url }})

### Nordnes

Clustering partition (dynamic features only).

![]({{ '/assets/figs/clustering-smoothed/Nordnes_batched-kmeans-dyn_smoothed_map.png' | relative_url }})

Mean and standard deviation of each cluster (dynamic features only).

![]({{ '/assets/figs/clustering-smoothed/Nordnes_batched-kmeans-dyn_smoothed_clusters.png' | relative_url }})

Clustering partition (dynamic and static features).

![]({{ '/assets/figs/clustering-smoothed/Nordnes_batched-kmeans-dyn+static_smoothed_map.png' | relative_url }})

Mean and standard deviation of each cluster (dynamic and static features).

![]({{ '/assets/figs/clustering-smoothed/Nordnes_batched-kmeans-dyn+static_smoothed_clusters.png' | relative_url }})

### Svalbard

Clustering partition (dynamic features only).

![]({{ '/assets/figs/clustering-smoothed/Svalbard-1_batched-kmeans-dyn_smoothed_map.png' | relative_url }})

Mean and standard deviation of each cluster (dynamic features only).

![]({{ '/assets/figs/clustering-smoothed/Svalbard-1_batched-kmeans-dyn_smoothed_clusters.png' | relative_url }})

Clustering partition (dynamic and static features).

![]({{ '/assets/figs/clustering-smoothed/Svalbard-1_batched-kmeans-dyn+static_smoothed_map.png' | relative_url }})

Mean and standard deviation of each cluster (dynamic and static features).

![]({{ '/assets/figs/clustering-smoothed/Svalbard-1_batched-kmeans-dyn+static_smoothed_clusters.png' | relative_url }})
