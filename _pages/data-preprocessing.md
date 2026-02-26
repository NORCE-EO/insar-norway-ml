---
title: Data Preprocessing
permalink: /data-preprocessing/
nav_order: 1
has_children: true
---

This section covers the data preprocessing steps applied to the InSAR catalogue, ensuring the quality and consistency of the time series before processing them with machine learning algorithms.

{% capture preprocessing_content %}

- [Ambiguity Correction]({{ '/data-preprocessing/ambiguity-correction/' | relative_url }}) - Methods to correct phase ambiguity.

{% endcapture %}
{% include content_section.html title="Ambiguity Correction" intro="Phase unwrapping and correction techniques." content=preprocessing_content %}

{% capture imputation_content %}

- [Data Imputation]({{ '/data-preprocessing/data-imputation/' | relative_url }}) - Methods to handle missing data and outliers.

{% endcapture %}
{% include content_section.html title="Data Imputation" intro="Techniques for filling gaps in time series." content=imputation_content %}
