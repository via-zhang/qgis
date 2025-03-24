var relearn_searchindex = [
  {
    "breadcrumb": "Actividades QGIS",
    "content": "Datos vectoriales y rasterizadosCómo visualizar datos vectoriales y ráster en QGIS",
    "description": "Datos vectoriales y rasterizadosCómo visualizar datos vectoriales y ráster en QGIS",
    "tags": [],
    "title": "Spatial Data",
    "uri": "/qgis-act/es/spatial-data/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Los Sistemas de Información Geográfica (SIG) son herramientas que nos permiten visualizar datos espaciales—datos con una ubicación—en mapas. QGIS es un software de código abierto en el que nos centraremos en estas actividades.",
    "description": "Los Sistemas de Información Geográfica (SIG) son herramientas que nos permiten visualizar datos espaciales—datos con una ubicación—en mapas. QGIS es un software de código abierto en el que nos centraremos en estas actividades.",
    "tags": [],
    "title": "Actividades QGIS",
    "uri": "/qgis-act/es/index.html"
  },
  {
    "breadcrumb": "Actividades QGIS \u003e  Categorías",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categoría :: Activities",
    "uri": "/qgis-act/es/categories/activities/index.html"
  },
  {
    "breadcrumb": "Actividades QGIS",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categorías",
    "uri": "/qgis-act/es/categories/index.html"
  },
  {
    "breadcrumb": "Actividades QGIS \u003e  Spatial Data",
    "content": "Cargar los datos Descargar Haga clic aquí para descargar la carpeta fires de Google Drive: Descargar los datos\nAcerca de los datos:\nNombre del archivo Descripción Fuente puntos_de_incendios Puntos de incendios desde 1900 hasta los más recientes CAL FIRE roads Líneas de las principales carreteras de California US Census Bureau TIGER/Line fire_perimeters Líneas de la zona quemada para 2025 incendios Wildland Fire Interagency Geospatial Services (WFIGS) Group satellite_[date] Imágenes de satélite de tres días diferentes del incendio de Palisades: 28 de noviembre de 2024; 12 de enero de 2025; 8 de marzo de 2025 Sentinel-2 del Navegador Copernicus Datos Vectoriales Vamos a visualizar puntos de fuego, líneas de carreteras y áreas quemadas de incendios en Los Ángeles.\nInformación «Datos vectoriales» se refiere a localizaciones, lugares u otras partes de la superficie terrestre que se almacenan como puntos, líneas y polígonos.\nAñadir a QGIS Abre un archivo QGIS y, opcionalmente, añade OpenStreetMap como mapa base y establece el sistema de referencia de coordenadas (CRS) en EPSG:2229. Vaya a Capa \u003e Añadir capa \u003e Añadir capa vectorial…. Haga clic en los tres puntos … junto a Conjunto(s) de datos vectoriales Busque la carpeta fires que ha descargado, vaya a la carpeta vector y haga clic y arrastre para seleccionar los 3 archivos. También puede seleccionar el primer archivo y, a continuación, pulse Mayús mientras hace clic en el último archivo para seleccionar los 3 Haga clic en «Añadir» y luego en «Cerrar» El mapa debe tener este aspecto, pero es posible que vea diferentes colores o un orden diferente Importante Recuerde guardar el archivo en Proyecto \u003e Guardar.\nPuntos Cambiemos los puntos por iconos de incendios y filtremos para que sólo aparezcan los incendios ocurridos en 2024 o 2025. Haga clic derecho en la capa fire_points y clic izquierdo en «Filtrar…» En el cuadro de texto situado debajo de «Proporcionar expresión de filtro específica», pegue lo siguiente: \"incident_date_created\" \u003e '2024-01-01' Haga clic en «Aceptar» y el mapa mostrará los incendios ocurridos después del 1 de enero de 2024. Haga clic con el botón derecho del ratón en la capa fire_points y seleccione «Propiedades» Haga clic en «Simbología» a la izquierda En «Marcador» haga clic en «Marcador simple» Cambia el «Tamaño» de 2 a 5 para que los puntos sean más grandes Cambia el «Color de relleno» a rojo Al lado de «Tipo de capa del símbolo» haz clic donde dice «Marcador simple» y cámbialo a «Marcador SVG» Desplácese hasta la parte inferior y escriba «fuego» en el cuadro de búsqueda en Imágenes SVG Haga clic en uno de los iconos de fuego que más te gusten Haga clic en «Aceptar» Ver información sobre incendios Haga clic en el icono «Identificar objetos espaciales» en la parte superior de QGIS Haga clic izquierdo en la capa fire_points para seleccionarla Haga clic en cualquier punto de incendio del mapa y se abrirá una pestaña con información sobre ese incendio. Cuando se utiliza la herramienta Identificar objetos espaciales, no se puede utilizar el ratón para moverse por el mapa, sólo se puede hacer clic en los puntos Haga clic en el icono «Pan Map» en la parte superior de QGIS para volver a la configuración por defecto, para que pueda hacer clic y moverse por el mapa de nuevo Consejo La herramienta «Identificar objetos espaciales» sólo funciona en la capa que haya seleccionado (haciendo clic con el botón izquierdo del ratón sobre ella). Por ejemplo, hemos seleccionado la capa fire_points para ver más información sobre cada punto de incendio. También puede hacer clic con el botón izquierdo del ratón en roads.shp para seleccionarla y, a continuación, hacer clic en cualquier carretera para mostrar información sobre ella. También puede hacer lo mismo con la capa fire_perimeters.\nLíneas Cambiemos el grosor y la opacidad de las líneas. Haga clic con el botón derecho del ratón en la capa roads.shp y seleccione «Propiedades». Haga clic en «Simbología» a la izquierda si no está ya seleccionada Cambie el color a un gris claro (u otro color que desee) Cambia la opacidad al 50.0% (o prueba otros porcentajes) Cambia el Ancho a 1 (o prueba otros anchos) Haga clic en «Aceptar». (Opcional) Si quieres cambiar el orden de las capas, puedes mover una capa haciendo clic en ella y arrastrándola. Por ejemplo, puede hacer clic en la capa roads.shp y, manteniendo pulsado el ratón, arrastrarla hacia abajo para que quede por debajo de las capas fire_points y fire_perimeters, pero por encima de OSM Standard Importante Recuerda guardar el archivo en Proyecto \u003e Guardar.\nPolígonos Cambiemos el color y la opacidad de las áreas quemadas. Haga clic con el botón derecho en la capa fire_perimeters y seleccione «Propiedades» Haga clic en «Simbología» a la izquierda si no está ya seleccionada Cambie el color a rojo (u otro color que desee) Cambia la opacidad al 20.0% (o prueba otros porcentajes) Haga clic en «Aceptar» Datos rasterizados Vamos a visualizar imágenes de satélite de Sentinel-2 de antes y después del incendio de Palisades, un devastador incendio que comenzó a quemar Los Ángeles el 7 de enero de 2025.\nInformación Los «datos ráster» se refieren a áreas de la superficie terrestre que se almacenan como valores en una cuadrícula (píxeles).\nAñadir a QGIS Vaya a Capa \u003e Añadir capa \u003e Añadir capa ráster…. Haga clic en los tres puntos … junto a Conjunto(s) de datos ráster Busque la carpeta fires que ha descargado, vaya a la carpeta raster y haga clic y arrastre para seleccionar los 3 archivos. También puede seleccionar el primer archivo y, a continuación, pulse Mayús mientras hace clic en el último archivo para seleccionar los 3 Haga clic en «Añadir» y luego en «Cerrar» Mueva el roads.shp, fire_perimeteres, y fire_points por encima de las 3 capas de satélite Opcional: Mueve satellite_mar25 por encima de las otras dos capas de satélite, satellite_jan25 por debajo y, por último, satellite_nov24. Haga clic con el botón derecho del ratón en la primera capa de satélite (satellite_mar25) y haz clic en la primera opción, «Zoom a la capa(s)» El mapa debería tener el siguiente aspecto Explorar antes y después del incendio. Haga clic en la casilla situada junto a fire_perimeters para hacer invisible la capa. Esto facilita la visualización de la imagen de satélite Haga clic en la casilla junto a satellite_mar25 para compararla con la imagen de satélite de enero de 2025, cuando el incendio de Palisades estaba activo. Puede hacer clic en la casilla de verificación varias veces para desactivarla y activarla de nuevo para comparar cómo se veía la tierra entre enero y marzo Haz invisible la capa satellite_mar25 desmarcándola de nuevo si es necesario. Ahora, sólo satellite_jan25 y satellite_nov24 deben estar marcadas Haga clic en la casilla junto a satellite_jan25 para compararla con la imagen de satélite de noviembre de 2024 antes de que el incendio de Palisades comenzara a arder. Como antes, puedes hacer clic en la casilla de verificación varias veces para apagarla y encenderla de nuevo para comparar cómo se veía el terreno ¿Puedes detectar otros incendios además de los de Palisades? El incendio de Kenneth (extinguido el 12 de enero de 2025 y que quemó más de 1000 acres) está en la parte superior izquierda de la imagen, y el incendio de Woodley (8 de enero de 2025; quemó 30 acres) está en la parte superior derecha de la imagen.",
    "description": "Cómo visualizar datos vectoriales y ráster en QGIS",
    "tags": [],
    "title": "Datos vectoriales y rasterizados",
    "uri": "/qgis-act/es/spatial-data/vector-raster/index.html"
  },
  {
    "breadcrumb": "Actividades QGIS \u003e  Categorías",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categoría :: Reference",
    "uri": "/qgis-act/es/categories/reference/index.html"
  },
  {
    "breadcrumb": "Actividades QGIS",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Etiquetas",
    "uri": "/qgis-act/es/tags/index.html"
  }
]
