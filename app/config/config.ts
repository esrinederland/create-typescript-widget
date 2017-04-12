export const baseLayers = [{
    url: 'https://services.arcgisonline.nl/arcgis/rest/services/Basiskaarten/Topo/MapServer'
}]

export const basemapOptions : any = {
    title: 'Topo RD',
    id: 'topo-rd'
}

export const mapViewOptions : any = {
    container: 'viewDiv',
    zoom: 14
}

export const startLocation = { 
    x: 136775, 
    y: 455856, 
    spatialReference: 28992 
}