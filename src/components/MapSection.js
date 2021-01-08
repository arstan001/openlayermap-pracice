import React, { useLayoutEffect } from 'react'

import OlMap from 'ol/Map'
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj';


import Map from 'ol';
import point from 'ol/geom/Point';
import Vector  from 'ol/source/Vector.js';
import OlTileLayer from 'ol/layer/Tile.js';
import VectorLayer  from 'ol/layer/Vector.js';
import { Circle } from 'ol/geom.js';
import Feature  from 'ol/Feature.js';
import { Style,Stroke} from 'ol/style.js';



    
    const MapSection = (props) => {

      useLayoutEffect(() => {
        var pnt = new point([126.9779451, 37.5662952]).transform('EPSG:4326', 'EPSG:3857')
        var changePoints = pnt.getCoordinates();
        var vectorSource = new Vector({projection: 'EPSG:4326'})
        var layer = new OlTileLayer({  //Ol타일 레이어로 교체(임포트시 명칭충돌 방지)
          source: new OSM()  
        })
        var source = new Vector();
        var vector = new VectorLayer({ 
          source: source
        });
        var vectorSource = new Vector({projection: 'EPSG:4326'});
        var circle = new Circle(changePoints, 50);
        var CircleFeature = new Feature(circle);
        vectorSource.addFeatures([CircleFeature]);
        var vectorLayer =new VectorLayer({  //추가할 벡터레이어
          source: vectorSource,
          style: [
          new Style({
              stroke: new Stroke({   //두께
                  color: 'rgba( 240, 79, 79 ,0.9)',
                  width: 4
              })
          })]
        })
      const map = new OlMap({
        layers: [
          new TileLayer({
            source: new OSM(),
          }), vectorLayer],
        target: 'map-section',
        view: new View({
          center: changePoints,
          zoom: 16,
        }),
        controls: [],
      })},[])
    
    return (
      <section id='map-section'>
      </section>
    )
  }

export default MapSection