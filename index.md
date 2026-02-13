---
layout: modern
title: InSAR Norway Machine Learning
permalink: /
---

<div class="hero">
    <h1>InSAR Norway</h1>
    <h1>Machine Learning Research</h1>
    <p>Exploring advanced techniques for automated detection and categorization of geophysical events in Norway.</p>
</div>

<section id="anomaly-detection">
    <h2 class="section-title">Anomaly Detection</h2>
    <div class="card-grid">
        <a href="{{ '/anomaly-detection/ransac/' | relative_url }}" class="card">
            <h3>RANSAC Baseline</h3>
            <p>Robust line and plane fitting used for outlier detection and time-series regularization.</p>
            <span class="card-link">View Method <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg></span>
        </a>
        <a href="{{ '/anomaly-detection/autoencoder/' | relative_url }}" class="card">
            <h3>Autoencoder</h3>
            <p>Reconstruction-based anomaly scoring on regularized time series for detecting subtle deviations.</p>
            <span class="card-link">View Method <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg></span>
        </a>
        <a href="{{ '/anomaly-detection/graph-autoencoder/' | relative_url }}" class="card">
            <h3>Graph Autoencoder</h3>
            <p>Neighborhood-aware reconstruction to detect locally inconsistent behavior using graph neural networks.</p>
            <span class="card-link">View Method <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg></span>
        </a>
    </div>
</section>

<section id="clustering">
    <h2 class="section-title">Clustering</h2>
    <div class="card-grid">
        <a href="{{ '/clustering/batched-kmeans/' | relative_url }}" class="card">
            <h3>Batched K-means</h3>
            <p>Scalable mini-batch clustering for large InSAR feature sets, enabling efficient processing of massive datasets.</p>
            <span class="card-link">View Method <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg></span>
        </a>
        <a href="{{ '/clustering/spatial-smoothing-clustering/' | relative_url }}" class="card">
            <h3>Spatial-Smoothing Clustering</h3>
            <p>Clustering on smoothed graph-aware features that combine temporal information with spatial context.</p>
            <span class="card-link">View Method <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg></span>
        </a>
    </div>
</section>
