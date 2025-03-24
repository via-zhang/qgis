+++
categories = ['activities']
title = 'Vector and Raster Data'
description = 'How to visualize vector and raster data in QGIS'
+++

## Load the Data
### Download
Click here to download the **fires** folder from Google Drive:
{{% button href="https://drive.google.com/drive/folders/1H1FcMVlTV2m5IdxUvTLFW6cKJTZ3YGxo?usp=drive_link" icon="download" %}}Download the Data{{% /button %}}

Information about the data:
| File Name             | Description     | Source      |
|-----------------------|-----------------|-------------|
| **fire_points** | Points of fires from 1900s to recent | [CAL FIRE](https://www.fire.ca.gov/incidents)
| **roads** | Lines of major roads in California | [US Census Bureau TIGER/Line](https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html)
| **fire_perimeters** | Outlines of burned area for 2025 fires | [Wildland Fire Interagency Geospatial Services (WFIGS) Group](https://hub-calfire-forestry.hub.arcgis.com/datasets/CALFIRE-Forestry::wfigs-2025-wildfire-perimeters)
| **satellite_[date]** | Satellite images for three different days of the Palisades Fire:<br>- November 28, 2024<br>- January 12, 2025<br>- March 8, 2025 | [Sentinel-2 from the Copernicus Browser](https://browser.dataspace.copernicus.eu/)

> [!TIP]
> Remember to save the file by going to Project > Save
<!-- ![Image description](image.png?width=60pc) -->

## Vector Data
We will visualize fire points, road lines, and burned areas from fires in Los Angeles.

> [!INFO]
> "Vector data" refers to locations, places, or other parts of the Earth's surface that are stored as points, lines, and polygons.

### Add to QGIS
Open the QGIS file you created in Week 1, which has OpenStreetMap as the basemap and EPSG:2229.
1. Go to Layer > Add Layer > Add Vector Layer...
2. Click the three dots ... next to Vector Dataset(s)
3. Find **fires** folder that you downloaded, go to the **vector** folder, and click and drag to select all 3 files. You can also select the first file, then press Shift while clicking the last file to select all 3
4. Click "Add" and then "Close"
5. Click on your bookmark under Spatial Bookmarks > User Bookmarks > LA to zoom to LA
6. The map should look like this, but you may see different colors
![Screenshot of QGIS with the data](add_data.png?width=60pc)

### Points


### Lines


### Polygons


## Raster Data
We will visualize satellite images from Sentinel-2 from before and after the Palisades Fire, a devastating fire that started burning Los Angeles on January 7, 2025.

> [!INFO]
> "Raster data" refers to areas of the Earth's surface that are stored as values on a grid (pixels).

### Add to QGIS
1. Go to Layer > Add Layer > Add Raster Layer...
2. Click the three dots ... next to Raster dataset(s)
3. Find **fires** folder that you downloaded, go to the **raster** folder, and click and drag to select all 3 files. You can also select the first file, then press Shift while clicking the last file to select all 3
4. Click "Add" and then "Close"
5. The map should look like this

