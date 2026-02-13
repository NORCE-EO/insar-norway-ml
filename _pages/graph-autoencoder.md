---
title: Graph Autoencoder Anomaly Detection
permalink: /anomaly-detection/graph-autoencoder/
parent: Anomaly Detection
nav_order: 5
---

## Overview

The graph autoencoder (GAE) extends reconstruction-based anomaly detection by explicitly modeling neighborhood relationships among nearby InSAR points.
Nodes represent observation points, and edges are built from geographic nearest neighbors.

## Graph Construction

- **Nodes:** individual time series.
- **Edges:** $k$-nearest neighbors in latitude/longitude, with distance-based weights.
- **Features:** normalized time-series embeddings and optional static metadata.

## Main Idea

Seed nodes and their sampled neighborhoods are passed through a graph encoder-decoder.
The model reconstructs each seed-node feature from local context. Nodes with large reconstruction errors are flagged as anomalies.

### GAE Workflow

{% include standalone_figure.html src="/assets/figs/graph-ae/gae-steps1-2.png" caption="Sampling seed nodes and neighborhood subgraphs." max_width="650px" %}

{% include standalone_figure.html src="/assets/figs/graph-ae/gae-steps3.png" caption="Graph autoencoder reconstruction objective on sampled neighborhoods." max_width="450px" %}

This setup is effective for identifying locally inconsistent behavior, including noisy samples caused by processing artifacts.

An example batch graph used during training is shown below.

<div class="embed-graph">
  <iframe src="{{ '/assets/figs/graph-ae/batch_graph.html' | relative_url }}"
          title="Sample training graph batch"
          loading="lazy"></iframe>
</div>

## Model Architecture

The GAE model contains a GCN-based encoder and an MLP decoder.

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

{% capture lyngen_figures %}
{% include gallery_figure.html src="/assets/figs/graph-ae/mse_Graph-AE_Lyngen-small.png" caption="Lyngen: reconstruction error map." %}
{% include gallery_figure.html src="/assets/figs/graph-ae/mse_thresh_Graph-AE_Lyngen-small.png" caption="Lyngen: highest-error points marked as candidate anomalies." %}
{% endcapture %}
{% include gallery_section.html title="Lyngen" content=lyngen_figures %}

{% capture nordnes_figures %}
{% include gallery_figure.html src="/assets/figs/graph-ae/mse_Graph-AE_Nordnes.png" caption="Nordnes: reconstruction error map." %}
{% include gallery_figure.html src="/assets/figs/graph-ae/mse_thresh_Graph-AE_Nordnes.png" caption="Nordnes: highest-error points marked as candidate anomalies." %}
{% endcapture %}
{% include gallery_section.html title="Nordnes" content=nordnes_figures %}

{% capture svalbard_figures %}
{% include gallery_figure.html src="/assets/figs/graph-ae/mse_Graph-AE_Svalbard-1.png" caption="Svalbard: reconstruction error map." %}
{% include gallery_figure.html src="/assets/figs/graph-ae/mse_thresh_Graph-AE_Svalbard-1.png" caption="Svalbard: highest-error points marked as candidate anomalies." %}
{% endcapture %}
{% include gallery_section.html title="Svalbard" content=svalbard_figures %}
