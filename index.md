---
layout: modern
title: InSAR Norway ML
---

<div class="hero">
    <h1>InSAR Norway<br><span class="hero-subtitle">Machine Learning Research</span></h1>
    <p>Exploring advanced techniques for automated detection and categorization of geophysical events in Norway.</p>
</div>

<section id="anomaly-detection">
    <h2 class="section-title">Anomaly Detection</h2>
    <div class="card-grid">
        <div class="card" onclick="window.location.href='{{ '/anomaly-detection/ransac/' | relative_url }}'">
            <h3>RANSAC Baseline</h3>
            <p>Robust linear regression for trend estimation and outlier detection in time series.</p>
            <span class="card-link">Explore Method <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
        </div>
        
        <div class="card" onclick="window.location.href='{{ '/anomaly-detection/autoencoder/' | relative_url }}'">
            <h3>Autoencoder</h3>
            <p>Deep learning reconstruction model for identifying anomalous behavior patterns.</p>
            <span class="card-link">Explore Method <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
        </div>

        <div class="card" onclick="window.location.href='{{ '/anomaly-detection/graph-autoencoder/' | relative_url }}'">
            <h3>Graph Autoencoder</h3>
            <p>Graph-based reconstruction for preserving spatial dependencies.</p>
            <span class="card-link">Explore Method <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
        </div>
    </div>
</section>

<section id="clustering">
    <h2 class="section-title">Clustering</h2>
    <div class="card-grid">
        <div class="card" onclick="window.location.href='{{ '/clustering/batched-kmeans/' | relative_url }}'">
            <h3>Batched K-Means</h3>
            <p>Scalable mini-batch clustering for large-scale InSAR datasets.</p>
            <span class="card-link">Explore Method <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
        </div>
        
        <div class="card" onclick="window.location.href='{{ '/clustering/spatial-smoothing-clustering/' | relative_url }}'">
            <h3>Spatial Smoothing</h3>
            <p>Enhancing clustering by smoothing features over graph neighborhoods.</p>
            <span class="card-link">Explore Method <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
        </div>
    </div>
</section>
