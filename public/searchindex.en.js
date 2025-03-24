var relearn_searchindex = [
  {
    "breadcrumb": "QGIS Activities",
    "content": "Vector and Raster DataHow to visualize vector and raster data in QGIS",
    "description": "Vector and Raster DataHow to visualize vector and raster data in QGIS",
    "tags": [],
    "title": "Spatial Data",
    "uri": "/qgis-act/spatial-data/index.html"
  },
  {
    "breadcrumb": "QGIS Activities \u003e  Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Activities",
    "uri": "/qgis-act/categories/activities/index.html"
  },
  {
    "breadcrumb": "QGIS Activities",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/qgis-act/categories/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Geographic Information Systems (GIS) are tools that allow us to visualize spatial data—data with a location—on maps. QGIS is an open-source software that we will use to make maps about community health.",
    "description": "Geographic Information Systems (GIS) are tools that allow us to visualize spatial data—data with a location—on maps. QGIS is an open-source software that we will use to make maps about community health.",
    "tags": [],
    "title": "QGIS Activities",
    "uri": "/qgis-act/index.html"
  },
  {
    "breadcrumb": "QGIS Activities \u003e  Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Reference",
    "uri": "/qgis-act/categories/reference/index.html"
  },
  {
    "breadcrumb": "QGIS Activities",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/qgis-act/tags/index.html"
  },
  {
    "breadcrumb": "QGIS Activities \u003e  Spatial Data",
    "content": "Versión en español Load the Data Download Click here to download the fires folder from Google Drive: Download the Data\nAbout the data:\nFile Name Description Source fire_points Points of fires from 1900s to recent CAL FIRE roads Lines of major roads in California US Census Bureau TIGER/Line fire_perimeters Outlines of burned area for 2025 fires Wildland Fire Interagency Geospatial Services (WFIGS) Group satellite_[date] Satellite images for three different days of the Palisades Fire: November 28, 2024; January 12, 2025; March 8, 2025 Sentinel-2 from the Copernicus Browser Vector Data We will visualize fire points, road lines, and burned areas from fires in Los Angeles.\nInfo “Vector data” refers to locations, places, or other parts of the Earth’s surface that are stored as points, lines, and polygons.\nAdd to QGIS Open a QGIS file and optionally add OpenStreetMap as the basemap and set the coordinate reference system (CRS) to EPSG:2229. Go to Layer \u003e Add Layer \u003e Add Vector Layer… Click the three dots … next to Vector Dataset(s) Find fires folder that you downloaded, go to the vector folder, and click and drag to select all 3 files. You can also select the first file, then press Shift while clicking the last file to select all 3 Click “Add” and then “Close” The map should look like this, but you may see different colors or a different order Important Remember to save the file by going to Project \u003e Save\nPoints Let’s change the points to fire icons and filter to only show fires that have happened in 2024 or 2025. Right click the fire_points layer and left click “Filter…” In the text box below “Provide Specific Filter Expression,” paste this: \"incident_date_created\" \u003e '2024-01-01' Click “OK” and the map will now show fires that have happened after January 1, 2024 Right click the fire_points layer and select “Properties” Click on “Symbology” to the left Under “Marker” click on “Simple Marker” Change the “Size” from 2 to 5 to make the points larger Change the “Fill color” to red Next to “Symbol layer type” click where it says “Simple Marker” and change it to “SVG Marker” Scroll to the bottom and type “fire” in the search box under SVG Images Click on one of the fire icons that you like Click “OK” View Information About Fires Click the “Identify Features” icon at the top of QGIS Left click on the fire_points layer to select it Click on any fire point on the map, and a tab will open with information about that fire. When using the Identify Features tool, you cannot use the mouse to move around the map, you can only click on the points Click the “Pan Map” icon at the top of QGIS to return to the default, so you can click and move around the map again Tip The “Identify Features” tool only works on the layer that you have selected (by left clicking on it). For example, we selected the fire_points layer to view more information about each fire point. You can also left click the roads.shp to select it, and then click on any road to show information about it. You can do this for the fire_perimeters layer as well.\nLines Let’s change the thickness and opacity of the lines. Right click the roads.shp layer and select “Properties” Click on “Symbology” to the left if it is not already selected Change the color to a light gray (or another color you want) Change the opacity to 50.0% (or test other percentages) Change the Width to 1 (or test other widths) Click “OK” (Optional) If you want to change the order of the layers, you can move a layer by clicking and dragging it. For example, you can click the roads.shp layer and, while holding down your mouse, drag it down so that it is below the fire_points and fire_perimeters layers, but above OSM Standard Important Remember to save the file by going to Project \u003e Save\nPolygons Let’s change the color and opacity of the burned areas. Right click the fire_perimeters layer and select “Properties” Click on “Symbology” to the left if it is not already selected Change the color to red (or another color you want) Change the opacity to 20.0% (or test other percentages) Click “OK” Raster Data We will visualize satellite images from Sentinel-2 from before and after the Palisades Fire, a devastating fire that started burning Los Angeles on January 7, 2025.\nInfo “Raster data” refers to areas of the Earth’s surface that are stored as values on a grid (pixels).\nAdd to QGIS Go to Layer \u003e Add Layer \u003e Add Raster Layer… Click the three dots … next to Raster dataset(s) Find fires folder that you downloaded, go to the raster folder, and click and drag to select all 3 files. You can also select the first file, then press Shift while clicking the last file to select all 3 Click “Add” and then “Close” Move the roads.shp, fire_perimeteres, and fire_points above all 3 satellite layers Optional: Move satellite_mar25 above the other two satellite layers, satellite_jan25 below that, and lastly satellite_nov24 Right click the first satellite layer (satellite_mar25) and click the first option, “Zoom to Layer(s)” The map should look like below Explore Before and After the Fire Click the check box next to the fire_perimeters to make the layer invisible. This makes it easier to see the satellite image Click the check box next to satellite_mar25 to compare it with the satellite image from January 2025 when the Palisades fire was actively burning. You can click the check box multiple times to turn it off and on again to compare how the land looked between January and March Make the satellite_mar25 layer invisible by unchecking it again if needed. Now, only satellite_jan25 and satellite_nov24 should be checked Click the check box next to satellite_jan25 to compare it with the satellite image from November 2024 before the Palisades fire started burning. Like before, you can click the check box multiple times to turn it off and on again to compare how the land looked Can you spot any other fires besides the Palisades fires? The Kenneth Fire (extinguished January 12, 2025 and burned 1000+ acres) is to the top left of the image, and the Woodley Fire (January 8, 2025; burned 30 acres) is to the top right of the image.",
    "description": "How to visualize vector and raster data in QGIS",
    "tags": [],
    "title": "Vector and Raster Data",
    "uri": "/qgis-act/spatial-data/vector-raster/index.html"
  }
]
