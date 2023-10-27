ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:5255").setExtent([547838.247459, 4001328.733364, 549338.721609, 4002054.829147]);
var wms_layers = [];

var lyr_Ortofoto_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ortofoto",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ortofoto_0.png",
    attributions: ' ',
                                projection: 'EPSG:5255',
                                alwaysInRange: true,
                                imageExtent: [547004.724500, 4000527.476197, 550499.616300, 4002218.692403]
                            })
                        });
var format_YAPI_ALAN_1 = new ol.format.GeoJSON();
var features_YAPI_ALAN_1 = format_YAPI_ALAN_1.readFeatures(json_YAPI_ALAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5255'});
var jsonSource_YAPI_ALAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YAPI_ALAN_1.addFeatures(features_YAPI_ALAN_1);
var lyr_YAPI_ALAN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YAPI_ALAN_1, 
                style: style_YAPI_ALAN_1,
                interactive: true,
                title: '<img src="styles/legend/YAPI_ALAN_1.png" /> YAPI_ALAN'
            });
var format_BNALAR_2 = new ol.format.GeoJSON();
var features_BNALAR_2 = format_BNALAR_2.readFeatures(json_BNALAR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5255'});
var jsonSource_BNALAR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BNALAR_2.addFeatures(features_BNALAR_2);
var lyr_BNALAR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BNALAR_2, 
                style: style_BNALAR_2,
                interactive: true,
                title: '<img src="styles/legend/BNALAR_2.png" /> BİNALAR'
            });
var format_POLGONLAR_3 = new ol.format.GeoJSON();
var features_POLGONLAR_3 = format_POLGONLAR_3.readFeatures(json_POLGONLAR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5255'});
var jsonSource_POLGONLAR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLGONLAR_3.addFeatures(features_POLGONLAR_3);
var lyr_POLGONLAR_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLGONLAR_3, 
                style: style_POLGONLAR_3,
                interactive: true,
                title: '<img src="styles/legend/POLGONLAR_3.png" /> POLİGONLAR'
            });

lyr_Ortofoto_0.setVisible(true);lyr_YAPI_ALAN_1.setVisible(true);lyr_BNALAR_2.setVisible(true);lyr_POLGONLAR_3.setVisible(true);
var layersList = [lyr_Ortofoto_0,lyr_YAPI_ALAN_1,lyr_BNALAR_2,lyr_POLGONLAR_3];
lyr_YAPI_ALAN_1.set('fieldAliases', {'YAPI': 'YAPI', 'AKTLAR': 'AKTLAR', 'AKT': 'AKT', });
lyr_BNALAR_2.set('fieldAliases', {});
lyr_POLGONLAR_3.set('fieldAliases', {'Name': 'Name', 'Y': 'Y', 'X': 'X', });
lyr_YAPI_ALAN_1.set('fieldImages', {'YAPI': 'TextEdit', 'AKTLAR': 'TextEdit', 'AKT': '', });
lyr_BNALAR_2.set('fieldImages', {});
lyr_POLGONLAR_3.set('fieldImages', {'Name': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_YAPI_ALAN_1.set('fieldLabels', {'YAPI': 'no label', 'AKTLAR': 'no label', 'AKT': 'no label', });
lyr_BNALAR_2.set('fieldLabels', {});
lyr_POLGONLAR_3.set('fieldLabels', {'Name': 'inline label', 'Y': 'inline label', 'X': 'inline label', });
lyr_POLGONLAR_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});