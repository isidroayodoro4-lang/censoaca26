var wms_layers = [];


        var lyr_mapag_0 = new ol.layer.Tile({
            'title': 'mapag',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x=https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_mapa_1 = new ol.format.GeoJSON();
var features_mapa_1 = format_mapa_1.readFeatures(json_mapa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapa_1.addFeatures(features_mapa_1);
var lyr_mapa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapa_1, 
                style: style_mapa_1,
                popuplayertitle: 'mapa',
                interactive: true,
    title: 'mapa<br />\
    <img src="styles/legend/mapa_1_0.png" /> <br />\
    <img src="styles/legend/mapa_1_1.png" /> ARBOL<br />\
    <img src="styles/legend/mapa_1_2.png" /> CFE 11 MTS<br />\
    <img src="styles/legend/mapa_1_3.png" /> CFE 9 MTS<br />\
    <img src="styles/legend/mapa_1_4.png" /> FACHADA<br />\
    <img src="styles/legend/mapa_1_5.png" /> OTRO<br />\
    <img src="styles/legend/mapa_1_6.png" /> PLAZA<br />\
    <img src="styles/legend/mapa_1_7.png" /> POSTE AYUNTAMIENTO<br />\
    <img src="styles/legend/mapa_1_8.png" /> POSTE FONATUR<br />\
    <img src="styles/legend/mapa_1_9.png" /> TELMEX<br />\
    <img src="styles/legend/mapa_1_10.png" /> UNIDAD DEPORTIVA<br />' });

lyr_mapag_0.setVisible(true);lyr_mapa_1.setVisible(true);
var layersList = [lyr_mapag_0,lyr_mapa_1];
lyr_mapa_1.set('fieldAliases', {'_UBICACI�N_latitude': '_UBICACI�N_latitude', '_UBICACI�N_longitude': '_UBICACI�N_longitude', 'POSTE': 'POSTE', 'TOMAR FOTO_URL': 'TOMAR FOTO_URL', });
lyr_mapa_1.set('fieldImages', {'_UBICACI�N_latitude': 'TextEdit', '_UBICACI�N_longitude': 'TextEdit', 'POSTE': 'TextEdit', 'TOMAR FOTO_URL': 'TextEdit', });
lyr_mapa_1.set('fieldLabels', {'_UBICACI�N_latitude': 'no label', '_UBICACI�N_longitude': 'no label', 'POSTE': 'no label', 'TOMAR FOTO_URL': 'no label', });
lyr_mapa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});