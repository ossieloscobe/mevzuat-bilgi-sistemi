var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Calisma_Alanialma_alan_1 = new ol.format.GeoJSON();
var features_Calisma_Alanialma_alan_1 = format_Calisma_Alanialma_alan_1.readFeatures(json_Calisma_Alanialma_alan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calisma_Alanialma_alan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calisma_Alanialma_alan_1.addFeatures(features_Calisma_Alanialma_alan_1);
var lyr_Calisma_Alanialma_alan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Calisma_Alanialma_alan_1, 
                style: style_Calisma_Alanialma_alan_1,
                popuplayertitle: "Calisma_Alani — alma_alan",
                interactive: true,
                    title: '<img src="styles/legend/Calisma_Alanialma_alan_1.png" /> Calisma_Alani — alma_alan'
                });
var format_Parselparsel_2 = new ol.format.GeoJSON();
var features_Parselparsel_2 = format_Parselparsel_2.readFeatures(json_Parselparsel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parselparsel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parselparsel_2.addFeatures(features_Parselparsel_2);
var lyr_Parselparsel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parselparsel_2, 
                style: style_Parselparsel_2,
                popuplayertitle: "Parsel — parsel",
                interactive: true,
                    title: '<img src="styles/legend/Parselparsel_2.png" /> Parsel — parsel'
                });
var format_Yapi__3 = new ol.format.GeoJSON();
var features_Yapi__3 = format_Yapi__3.readFeatures(json_Yapi__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yapi__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yapi__3.addFeatures(features_Yapi__3);
var lyr_Yapi__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yapi__3, 
                style: style_Yapi__3,
                popuplayertitle: "Yapi_",
                interactive: true,
                    title: '<img src="styles/legend/Yapi__3.png" /> Yapi_'
                });

lyr_GoogleTerrain_0.setVisible(true);lyr_Calisma_Alanialma_alan_1.setVisible(true);lyr_Parselparsel_2.setVisible(true);lyr_Yapi__3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Calisma_Alanialma_alan_1,lyr_Parselparsel_2,lyr_Yapi__3];
lyr_Calisma_Alanialma_alan_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ADINUMARAS': 'ADINUMARAS', 'Area': 'Area', 'area_ha': 'area_ha', 'Area_km2': 'Area_km2', 'Area_last': 'Area_last', 'area_last_': 'area_last_', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Parselparsel_2.set('fieldAliases', {'fid': 'fid', 'İl': 'İl', 'İlçe': 'İlçe', 'Mahalle': 'Mahalle', 'Ada': 'Ada', 'Parsel': 'Parsel', 'Mevkii': 'Mevkii', 'Pafta': 'Pafta', 'Taşınmazın maliki': 'Taşınmazın maliki', 'Malik mevzuatı': 'Malik mevzuatı', 'Taşınmazın konumu': 'Taşınmazın konumu', 'Konum mevzuatı': 'Konum mevzuatı', 'Taşınmazın türü': 'Taşınmazın türü', 'Tür mevzuatı': 'Tür mevzuatı', 'Taşınmazın kullanım amacı': 'Taşınmazın kullanım amacı', 'Kullanım amacı mevzuatı': 'Kullanım amacı mevzuatı', 'Taşınmazın edinim şekli': 'Taşınmazın edinim şekli', 'Edinim şekli mevzuatı': 'Edinim şekli mevzuatı', 'Taşınmazın yükü': 'Taşınmazın yükü', 'Yük mevzuatı': 'Yük mevzuatı', });
lyr_Yapi__3.set('fieldAliases', {'fid': 'fid', 'İl': 'İl', 'İlçe': 'İlçe', 'Mahalle': 'Mahalle', 'Ada': 'Ada', 'Parsel': 'Parsel', 'Mevkii': 'Mevkii', 'Pafta': 'Pafta', 'Taşınmazın maliki': 'Taşınmazın maliki', 'Malik mevzuatı': 'Malik mevzuatı', 'Taşınmazın konumu': 'Taşınmazın konumu', 'Konum mevzuatı': 'Konum mevzuatı', 'Taşınmazın türü': 'Taşınmazın türü', 'Tür mevzuatı': 'Tür mevzuatı', 'Taşınmazın kullanım amacı': 'Taşınmazın kullanım amacı', 'Kullanım amacı mevzuatı': 'Kullanım amacı mevzuatı', 'Taşınmazın edinim şekli': 'Taşınmazın edinim şekli', 'Edinim şekli mevzuatı': 'Edinim şekli mevzuatı', 'Taşınmazın yükü': 'Taşınmazın yükü', 'Yük mevzuatı': 'Yük mevzuatı', });
lyr_Calisma_Alanialma_alan_1.set('fieldImages', {'fid': '', 'OBJECTID': '', 'ADINUMARAS': '', 'Area': '', 'area_ha': '', 'Area_km2': '', 'Area_last': '', 'area_last_': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Parselparsel_2.set('fieldImages', {'fid': '', 'İl': '', 'İlçe': '', 'Mahalle': '', 'Ada': '', 'Parsel': '', 'Mevkii': '', 'Pafta': '', 'Taşınmazın maliki': '', 'Malik mevzuatı': '', 'Taşınmazın konumu': '', 'Konum mevzuatı': '', 'Taşınmazın türü': '', 'Tür mevzuatı': '', 'Taşınmazın kullanım amacı': '', 'Kullanım amacı mevzuatı': '', 'Taşınmazın edinim şekli': '', 'Edinim şekli mevzuatı': '', 'Taşınmazın yükü': '', 'Yük mevzuatı': '', });
lyr_Yapi__3.set('fieldImages', {'fid': '', 'İl': '', 'İlçe': '', 'Mahalle': '', 'Ada': '', 'Parsel': '', 'Mevkii': '', 'Pafta': '', 'Taşınmazın maliki': '', 'Malik mevzuatı': '', 'Taşınmazın konumu': '', 'Konum mevzuatı': '', 'Taşınmazın türü': '', 'Tür mevzuatı': '', 'Taşınmazın kullanım amacı': '', 'Kullanım amacı mevzuatı': '', 'Taşınmazın edinim şekli': '', 'Edinim şekli mevzuatı': '', 'Taşınmazın yükü': '', 'Yük mevzuatı': '', });
lyr_Calisma_Alanialma_alan_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ADINUMARAS': 'no label', 'Area': 'no label', 'area_ha': 'no label', 'Area_km2': 'no label', 'Area_last': 'no label', 'area_last_': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Parselparsel_2.set('fieldLabels', {'fid': 'no label', 'İl': 'no label', 'İlçe': 'no label', 'Mahalle': 'no label', 'Ada': 'no label', 'Parsel': 'no label', 'Mevkii': 'no label', 'Pafta': 'no label', 'Taşınmazın maliki': 'no label', 'Malik mevzuatı': 'no label', 'Taşınmazın konumu': 'no label', 'Konum mevzuatı': 'no label', 'Taşınmazın türü': 'no label', 'Tür mevzuatı': 'no label', 'Taşınmazın kullanım amacı': 'no label', 'Kullanım amacı mevzuatı': 'no label', 'Taşınmazın edinim şekli': 'no label', 'Edinim şekli mevzuatı': 'no label', 'Taşınmazın yükü': 'no label', 'Yük mevzuatı': 'no label', });
lyr_Yapi__3.set('fieldLabels', {'fid': 'no label', 'İl': 'no label', 'İlçe': 'no label', 'Mahalle': 'no label', 'Ada': 'no label', 'Parsel': 'no label', 'Mevkii': 'no label', 'Pafta': 'no label', 'Taşınmazın maliki': 'no label', 'Malik mevzuatı': 'no label', 'Taşınmazın konumu': 'no label', 'Konum mevzuatı': 'no label', 'Taşınmazın türü': 'no label', 'Tür mevzuatı': 'no label', 'Taşınmazın kullanım amacı': 'no label', 'Kullanım amacı mevzuatı': 'no label', 'Taşınmazın edinim şekli': 'no label', 'Edinim şekli mevzuatı': 'no label', 'Taşınmazın yükü': 'no label', 'Yük mevzuatı': 'no label', });
lyr_Yapi__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});