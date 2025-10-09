---
title: Clustering
permalink: /clustering/
nav_order: 2
has_children: true
toc: false
---

Clustering experiments aim to group time series with similar profiles.
We contrast an approaches that looks only at the dynamical patterns with Graph Neural Networks approaches that also account for spatial proximity of the time series.

- [Batched K-means]({{ '/clustering/batched-kmeans/' | relative_url }}) compresses the dataset with mini-batches and incremental centroid updates.
- [GNN-based clustering]({{ '/clustering/gnn-based-clustering/' | relative_url }}) learns assignments from a GNN trained with losses inspired by spectral clustering.
