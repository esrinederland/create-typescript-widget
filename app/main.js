define(["require", "exports", "esri/Map", "esri/views/MapView", "esri/layers/TileLayer", "esri/Basemap", "esri/geometry/Point", "./config/config", "./widgets/Recenter"], function (require, exports, Map, MapView, TileLayer, Basemap, Point, config_1, Recenter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    config_1.basemapOptions.baseLayers = config_1.baseLayers.map(function (x) { return new TileLayer(x); });
    var basemap = new Basemap(config_1.basemapOptions);
    var map = new Map({ basemap: basemap });
    config_1.mapViewOptions.map = map;
    config_1.mapViewOptions.center = new Point(config_1.startLocation);
    var view = new MapView(config_1.mapViewOptions);
    var widget = new Recenter_1.Recenter({
        view: view,
        initialZoom: config_1.mapViewOptions.zoom,
        initialCenter: config_1.mapViewOptions.center
    });
    view.ui.add(widget, 'top-right');
});
//# sourceMappingURL=main.js.map