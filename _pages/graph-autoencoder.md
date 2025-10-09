---
title: Graph Autoencoder Anomaly Detection
permalink: /anomaly-detection/graph-autoencoder/
parent: Anomaly Detection
nav_order: 13
---

## Overview

The graph autoencoder (GAE) extends reconstruction-based anomaly detection by encoding spatial relationships between neighbouring InSAR points.
Nodes represent observation points, with edges defined by k-nearest neighbours in geographic space.

### Graph Construction

- **Nodes:** Individual time series.
- **Edges:** $k$-NN in latitude/longitude; edge weights proportional to the distance.
- **Features:** Normalised time-series embeddings and optional static metadata.

### Main idea

The idea is to first sample some seed nodes and then sample nodes from the neighborhood of each seed node.
The GAE must reconstruct the feature of each seed node from its neighborhood.

![]({{ '/assets/figs/graph-ae/gae-steps1-2.png' | relative_url }})

<img src="{{ '/assets/figs/graph-ae/gae-steps3.png' | relative_url }}" style="width: 50%; max-width: 350px; display: block; margin: 0 auto;">

Nodes associated with high reconstruction error will be considered outliers, as their features significantly differ from those of the neighbors.

This technique is particularly effective to spot noisy samples, e.g., due to some processing errors.

An example of a data batch used to train the GAE is given below.

<div class="embed-graph">
  <iframe src="{{ '/assets/figs/graph-ae/batch_graph.html' | relative_url }}"
          title="Batch Graph"
          loading="lazy"></iframe>
</div>

### Model architecture

The GAE model consists of an **encoder** and a **decoder**. The encoder has a stack of GCN layers, while the decoder is an MLP.
The architecture used is the following.

```yaml
architecture:
  name: Graph-AE
  type: AutoEncoder
  hparams:
    encoder_dims: [32, 32, 16, 16]
    latent_channels: 8
    decoder_dims: [8, 16]
    activation: "ReLU"
    batch_norm: True
    dropout: 0.1
```

## Results

### Lyngen

![]({{ '/assets/figs/graph-ae/mse_Graph-AE_Lyngen-small.png' | relative_url }})

![]({{ '/assets/figs/graph-ae/mse_thresh_Graph-AE_Lyngen-small.png' | relative_url }})

### Nordnes

![]({{ '/assets/figs/graph-ae/mse_Graph-AE_Nordnes.png' | relative_url }})

![]({{ '/assets/figs/graph-ae/mse_thresh_Graph-AE_Nordnes.png' | relative_url }})

### Svalbard

![]({{ '/assets/figs/graph-ae/mse_Graph-AE_Svalbard-1.png' | relative_url }})

![]({{ '/assets/figs/graph-ae/mse_thresh_Graph-AE_Svalbard-1.png' | relative_url }})
