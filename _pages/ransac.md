---
title: RANSAC Baseline
permalink: /anomaly-detection/ransac/
parent: Anomaly Detection
nav_order: 3
---

## Overview

Random Sample Consensus (RANSAC) is a robust estimator for fitting models in the presence of outliers.
At each iteration, it samples a minimal subset, fits a candidate model, scores inliers under a residual threshold, and retains the model with the strongest consensus.
Compared with ordinary least squares (OLS), it remains stable even when outliers are abundant.

{% capture overview_figures %}
{% include gallery_figure.html src="/assets/figs/ransac/ransac_vs_ols.png" caption="RANSAC vs OLS behavior under outlier contamination." %}
{% endcapture %}
{% include gallery_section.html title="RANSAC Intuition" content=overview_figures %}

We use RANSAC for:

- outlier detection through robust line and plane fitting;
- regularizing irregular time series before downstream embedding.

## Outlier Detection (Lyngen)

### Time-Series Line Fitting (point-wise)

For each time series $y(t)$, we fit a robust line $y = m \cdot t + c$.
Timestamps with residuals

$$
|y - (m \cdot t + c)| \leq \tau
$$

are classified as inliers.
Large disagreements between RANSAC and OLS identify unstable or noisy series.

{% capture lyngen_point_figures %}
{% include gallery_figure.html src="/assets/figs/ransac/Lyngen-small-2D-outliers-map.png" caption="Lyngen: top 2.5% outlier series highlighted on the map." %}
{% include gallery_figure.html src="/assets/figs/ransac/Lyngen-small-top-outlier-time-series.png" caption="Lyngen: highest-disagreement time series between RANSAC and OLS." %}
{% endcapture %}
{% include gallery_section.html title="Lyngen Point-Wise Outliers" content=lyngen_point_figures %}

### Spatial Plane Fitting (global)

We then fit local planes $z = a \cdot x + b \cdot y + c$, where $z$ is the per-point RANSAC slope and $(x, y)$ are geographic coordinates.
Using overlapping windows yields local consensus scores and reveals spatially inconsistent points.

{% capture lyngen_plane_figures %}
{% include gallery_figure.html src="/assets/figs/ransac/Lyngen-small-sliding-win.png" caption="Lyngen: sliding-window plane fitting and consensus map." %}
{% include gallery_figure.html src="/assets/figs/ransac/RANSAC-plane-(win=1.0).png" caption="Large windows can underfit local structure." %}
{% include gallery_figure.html src="/assets/figs/ransac/RANSAC-plane-(win=0.50).png" caption="Intermediate window size gives a better local/global tradeoff." %}
{% include gallery_figure.html src="/assets/figs/ransac/RANSAC-plane-(win=0.25).png" caption="Small windows can overfit local noise." %}
{% endcapture %}
{% include gallery_section.html title="Lyngen Sliding-Window Sensitivity" content=lyngen_plane_figures %}

To reduce window-size sensitivity, we run an iterative strategy with progressively larger tiles and looser consensus thresholds, peeling inliers at each step until no stable plane remains.

{% capture lyngen_iter_figures %}
{% include gallery_figure.html src="/assets/figs/ransac/Lyngen-small-iterative-sliding-win.png" caption="Lyngen: iterative sliding-window strategy for robust spatial outlier extraction." %}
{% endcapture %}
{% include gallery_section.html title="Lyngen Iterative Strategy" content=lyngen_iter_figures %}

## Other Results

{% capture nordnes_figures %}
{% include gallery_figure.html src="/assets/figs/ransac/Nordnes-2D-outliers-map.png" caption="Nordnes: map of point-wise outliers." %}
{% include gallery_figure.html src="/assets/figs/ransac/Nordnes-top-outlier-time-series.png" caption="Nordnes: highest-disagreement time series." %}
{% include gallery_figure.html src="/assets/figs/ransac/Nordnes-sliding-win.png" caption="Nordnes: sliding-window spatial plane fitting." %}
{% include gallery_figure.html src="/assets/figs/ransac/Nordnes-iterative-sliding-win.png" caption="Nordnes: iterative spatial outlier extraction." %}
{% endcapture %}
{% include gallery_section.html title="Nordnes" content=nordnes_figures %}

{% capture svalbard_figures %}
{% include gallery_figure.html src="/assets/figs/ransac/Svalbard-sliding-win.png" caption="Svalbard: sliding-window plane fitting." %}
{% include gallery_figure.html src="/assets/figs/ransac/Svalbard-iterative-sliding-win.png" caption="Svalbard: iterative spatial outlier extraction." %}
{% endcapture %}
{% include gallery_section.html title="Svalbard" content=svalbard_figures %}

## Resampling Irregular Time Series

Before Reservoir Computing embeddings, irregular series are transformed to a regular grid using the robust RANSAC trend.
Observed values are preserved at acquisition timestamps, while missing timestamps are filled with the fitted trend.

Procedure:

1. Fit RANSAC on $(t, y)$ for each series to estimate slope $m$ and intercept $c$.
2. Build a regular grid `t_reg` over `[t_min, t_max]`.
3. Fill missing values with $\hat{y}(t) = m \cdot t + c$ and keep observed values where available.

{% capture resample_figures %}
{% include gallery_figure.html src="/assets/figs/ransac/ransac-regularization.png" caption="RANSAC-based regularization of irregularly sampled time series." %}
{% endcapture %}
{% include gallery_section.html title="Time-Series Regularization" content=resample_figures %}
