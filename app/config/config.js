define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.baseLayers = [{
            url: 'https://services.arcgisonline.nl/arcgis/rest/services/Basiskaarten/Topo/MapServer'
        }];
    exports.basemapOptions = {
        title: 'Topo RD',
        id: 'topo-rd'
    };
    exports.mapViewOptions = {
        container: 'viewDiv',
        zoom: 14
    };
    exports.startLocation = {
        x: 136775,
        y: 455856,
        spatialReference: 28992
    };
});
//# sourceMappingURL=config.js.map