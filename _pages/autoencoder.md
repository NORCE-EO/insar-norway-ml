---
title: Autoencoder Anomaly Detection
permalink: /anomaly-detection/autoencoder/
parent: Anomaly Detection
nav_order: 4
---

## Overview

This report documents a reconstruction-based anomaly detector trained on regularly sampled InSAR time series.
The core assumption is that anomalous samples are rare. The autoencoder therefore learns the dominant manifold of normal behavior and produces larger reconstruction errors for atypical points.

## Time-Series Embedding with Reservoir Computing

As discussed in the [RANSAC section]({{ '/anomaly-detection/ransac/' | relative_url }}), the time series are first regularized by filling missing timestamps with robust trend estimates.
After regularization, each series is converted into a static embedding using Reservoir Computing.

### Method Visual Overview

{% include standalone_figure.html src="/assets/figs/autoencoder/autoencoder-idea.png" caption="Autoencoder principle: compress and reconstruct to expose anomalous behavior." %}

{% include standalone_figure.html src="/assets/figs/autoencoder/RC-overview.png" caption="Reservoir Computing pipeline used to convert each time series into a fixed embedding." %}

The vector representation can be, for example, the last reservoir state or readout weights trained on the sequence dynamics.
For a detailed introduction to Reservoir Computing embeddings, see [this reference](https://filippomb.github.io/python-time-series-handbook/notebooks/12/classification-clustering.html#time-series-embedding).

## Model Architecture and Training

We use a symmetric fully connected encoder-decoder with a low-dimensional bottleneck.

```yaml
architecture:
  name: Simple-AE
  type: AutoEncoder
  hparams:
    encoder_dims: [32, 16, 8, 4]
    decoder_dims: [8, 16, 32]
    activation: "ReLU"
    batch_norm: True
    dropout: 0.1
```

The model minimizes mean squared reconstruction error (MSE).
Inputs are reservoir embeddings without static features.

## Results

| Dataset | Train MAE | Test MAE |
| --- | --- | --- |
| Lyngen | 0.108 | 0.109 |
| Nordnes | 0.108 | 0.109 |
| Svalbard | 0.084 | 0.085 |

{% capture lyngen_figures %}
{% include gallery_figure.html src="/assets/figs/autoencoder/mse_Simple-AE_Lyngen-small.png" caption="Lyngen: reconstruction error map." %}
{% include gallery_figure.html src="/assets/figs/autoencoder/mse_thresh_Simple-AE_Lyngen-small.png" caption="Lyngen: top 2.5% highest-error points highlighted as anomalies." %}
{% endcapture %}
{% include gallery_section.html title="Lyngen" content=lyngen_figures %}

{% capture nordnes_figures %}
{% include gallery_figure.html src="/assets/figs/autoencoder/mse_Simple-AE_Nordnes.png" caption="Nordnes: reconstruction error map." %}
{% include gallery_figure.html src="/assets/figs/autoencoder/mse_thresh_Simple-AE_Nordnes.png" caption="Nordnes: top 2.5% highest-error points highlighted as anomalies." %}
{% endcapture %}
{% include gallery_section.html title="Nordnes" content=nordnes_figures %}

{% capture svalbard_figures %}
{% include gallery_figure.html src="/assets/figs/autoencoder/mse_Simple-AE_Svalbard-1.png" caption="Svalbard: reconstruction error map." %}
{% include gallery_figure.html src="/assets/figs/autoencoder/mse_thresh_Simple-AE_Svalbard-1.png" caption="Svalbard: top 2.5% highest-error points highlighted as anomalies." %}
{% endcapture %}
{% include gallery_section.html title="Svalbard" content=svalbard_figures %}

## Limitations

- No explicit spatial or relational structure is modeled.
- The embedding stage is unsupervised and optimized independently from the downstream anomaly objective.
