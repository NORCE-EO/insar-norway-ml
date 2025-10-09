var store = [{
        "title": "Anomaly Detection",
        "excerpt":"This section gathers methods that flag abnormal displacement patterns in the InSAR catalogue. The focus is on contrasting a robust baseline with deep-learning approaches that leverage reconstruction and relational cues. The RANSAC baseline provides interpretable consensus-driven outlier detection and produces regularised time series used downstream. The autoencoder benchmarks point-wise reconstruction...","categories": [],
        "tags": [],
        "url": "/insar-norway-ml/anomaly-detection/",
        "teaser": null
      },{
        "title": "Autoencoder Anomaly Detection",
        "excerpt":"Overview This report documents a reconstruction-based anomaly detector trained on regularly sampled InSAR time series. The intuition is that an autoencoder will map the majority of the data to a compact latent space. Under the assumption that anomalous data are rare, these will not live in the same manifold in...","categories": [],
        "tags": [],
        "url": "/insar-norway-ml/anomaly-detection/autoencoder/",
        "teaser": null
      },{
        "title": "Batched K-means",
        "excerpt":"Mini-batch $k$-means provides a scalable baseline to partition the InSAR catalogue into coherent deformation regimes. By processing small batches, it keeps memory usage manageable while approximating the centroid updates of classic $k$-means. Why naive $k$-Means fails here Due to the size of the dataset, the full feature matrix cannot fit...","categories": [],
        "tags": [],
        "url": "/insar-norway-ml/clustering/batched-kmeans/",
        "teaser": null
      },{
        "title": "Clustering",
        "excerpt":"Clustering experiments aim to group time series with similar profiles. We contrast an approaches that looks only at the dynamical patterns with Graph Neural Networks approaches that also account for spatial proximity of the time series. Batched K-means compresses the dataset with mini-batches and incremental centroid updates. GNN-based clustering learns...","categories": [],
        "tags": [],
        "url": "/insar-norway-ml/clustering/",
        "teaser": null
      },{
        "title": "GNN-based Clustering",
        "excerpt":"🛠️ WORK IN PROGRESS  ","categories": [],
        "tags": [],
        "url": "/insar-norway-ml/clustering/gnn-based-clustering/",
        "teaser": null
      },{
        "title": "Graph Autoencoder Anomaly Detection",
        "excerpt":"Overview The graph autoencoder (GAE) extends reconstruction-based anomaly detection by encoding spatial relationships between neighbouring InSAR points. Nodes represent observation points, with edges defined by k-nearest neighbours in geographic space. Graph Construction Nodes: Individual time series. Edges: $k$-NN in latitude/longitude; edge weights proportional to the distance. Features: Normalised time-series embeddings...","categories": [],
        "tags": [],
        "url": "/insar-norway-ml/anomaly-detection/graph-autoencoder/",
        "teaser": null
      },{
        "title": "RANSAC Baseline",
        "excerpt":"Overview Random Sample Consensus (RANSAC) is a robust estimation method that fits a model to data containing outliers. It iteratively samples minimal subsets of points (2D or 3D), fits a candidate model (e.g., a line or a plane), scores it by counting inliers within a residual threshold, and keeps the...","categories": [],
        "tags": [],
        "url": "/insar-norway-ml/anomaly-detection/ransac/",
        "teaser": null
      },{
        "title": "Semi-supervised Learning",
        "excerpt":"Semi-supervised learning combines sparse human annotations with the spatial and temporal structure of InSAR data. Experiments here should show where unlabeled observations borrow strength from neighbours to improve classification fidelity.      Graph-based SSL Method details the current pipeline for propagating labels and handling confidence thresholds.  ","categories": [],
        "tags": [],
        "url": "/insar-norway-ml/semi-supervised-learning/",
        "teaser": null
      },{
        "title": "Graph-based Semi-supervised Method",
        "excerpt":"🛠️ WORK IN PROGRESS Overview We study a graph-based semi-supervised approach that propagates sparse human annotations to unlabelled InSAR points, based on spatial proximity and temporal similarity. Problem Setup (draft) Labels: A small subset of points annotated as stable, gradually deforming, or rapidly deforming. Graph: Nodes correspond to InSAR points;...","categories": [],
        "tags": [],
        "url": "/insar-norway-ml/semi-supervised-learning/ss-method/",
        "teaser": null
      },]
