---
title: Autoencoder Anomaly Detection
permalink: /anomaly-detection/autoencoder/
parent: Anomaly Detection
nav_order: 2
---

## Overview

This report documents a reconstruction-based anomaly detector trained on regularly sampled InSAR time series.
The intuition is that an autoencoder will map the majority of the data to a compact latent space.
Under the assumption that anomalous data are *rare*, these will not live in the same manifold in the latent space and, thus, when projected there will yield a high reconstruction error when decoded back.
Such a reconstruction error can be used to determine which data point is anomalous and which is not.

![]({{ '/assets/figs/autoencoder/autoencoder-idea.png' | relative_url }})

## Time series Embedding with Reservoir Computing

As discussed in the [RANSAC section]({{ '/anomaly-detection/autoencoder/#time-series-embedding-with-reservoir-computing' | relative_url }}), the time series are first pre-processed by filling the missing months with the RANSAC interpolant.

Afterwards, the time series are converted into *static vectors* using Reservoir Computing.
The basic idea is that an untrained recurrent architectures, the **Reservoir**, processes the time series and returns a *vectorial representation* containing all the dynamical features of the time series.

![]({{ '/assets/figs/autoencoder/RC-overview.png' | relative_url }})

The vectorial representation can be, for example, the last state of the Reservoir's states, a set of linear weights used to predict the next output or the next Reservoir's state.
For more information about time series embeddings with RC, see [here](https://filippomb.github.io/python-time-series-handbook/notebooks/12/classification-clustering.html#time-series-embedding).

## Model Architecture and training

We use a symmetric fully connected encoder/decoder with bottleneck dimension.

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

The model is trained to minimize the mse.

The input are the Reservoir embeddings without the static features.

## Results

| Dataset | Train MAE | Test MAE |
| --- | --- | --- |
| Lyngen   | 0.108 | 0.109 |
| Nordnes  | 0.108 | 0.109 |
| Svalbard | 0.084 | 0.085 |

### Lyngen

Below, we plot the reconstruction error for each data point.

![]({{ '/assets/figs/autoencoder/mse_Simple-AE_Lyngen-small.png' | relative_url }})

Then, we select the points with the top $2.5\%$ reconstruction error and we plot them as triangles. The color-coding is given by the mean velocity of each time series.

![]({{ '/assets/figs/autoencoder/mse_thresh_Simple-AE_Lyngen-small.png' | relative_url }})

### Nordnes

![]({{ '/assets/figs/autoencoder/mse_Simple-AE_Nordnes.png' | relative_url }})

![]({{ '/assets/figs/autoencoder/mse_thresh_Simple-AE_Nordnes.png' | relative_url }})

### Svalbard

![]({{ '/assets/figs/autoencoder/mse_Simple-AE_Svalbard-1.png' | relative_url }})

![]({{ '/assets/figs/autoencoder/mse_thresh_Simple-AE_Svalbard-1.png' | relative_url }})

## Limitations

- No relational/spatial information is considered.
- Time series embedding is unsupervised and occur in a preprocessing step, which is agnostic of the downstream task (i.e., the AE reconstruction).
