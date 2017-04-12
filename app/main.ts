import Map = require('esri/Map');
import MapView = require('esri/views/MapView');
import TileLayer = require('esri/layers/TileLayer');
import Basemap = require('esri/Basemap');
import Point = require('esri/geometry/Point');

import { mapViewOptions, baseLayers, basemapOptions, startLocation } from './config/config';
import { Recenter } from './widgets/Recenter';

basemapOptions.baseLayers = baseLayers.map(x => new TileLayer(x));

const basemap = new Basemap(basemapOptions);
const map = new Map({ basemap });

mapViewOptions.map = map;
mapViewOptions.center = new Point(startLocation);

const view = new MapView(mapViewOptions);

const widget = new Recenter(<any>{
    view,
    initialZoom: mapViewOptions.zoom,
    initialCenter: mapViewOptions.center
});
view.ui.add(widget, 'top-right');
