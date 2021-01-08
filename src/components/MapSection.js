import React, { useLayoutEffect } from 'react'

import OlMap from 'ol/Map'
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj';

import point from 'ol/geom/Point';
import Vector  from 'ol/source/Vector.js';
import VectorLayer  from 'ol/layer/Vector.js';
import { Circle } from 'ol/geom.js';
import Feature  from 'ol/Feature.js';
import { Style,Stroke} from 'ol/style.js';

function loclog(long, lon){
  var pnt = new point([long, lon]).transform('EPSG:4326', 'EPSG:3857')
  return pnt.getCoordinates();
}

    
    function MapSection(props){


      const locations = props.location.map(item => [item])
      useLayoutEffect(() => {
        
        const seoul = [126.9779451, 37.5662952];
        const seoulMercator = fromLonLat(seoul);

        const map = new OlMap({
          layers: [
            new TileLayer({
              source: new OSM(),
            })],
          target: 'map-section',
          view: new View({
            center: seoulMercator,
            zoom: 16,
          }),
          controls: [],
        })

        // if(props.isLoading === false){
          
        var changePoints
        props.isLoading ? changePoints = loclog(0, 0) : changePoints = loclog(props.location[0][1],props.location[0][0])
        var vectorSource = new Vector({projection: 'EPSG:4326'})
        
        var circle = new Circle(changePoints, 30);
        var CircleFeature = new Feature(circle);
        vectorSource.addFeatures([CircleFeature]);
        var vectorLayer =new VectorLayer({  //추가할 벡터레이어
          source: vectorSource,
          style: [
          new Style({
              stroke: new Stroke({   //두께
                  color: 'rgba( 0,0,205,0.9)',
                  width: 4
              })
          })]
        })

        var changePointsTwo
        props.isLoading ? changePointsTwo = loclog(1, 1) : changePointsTwo = loclog(props.location[1][1],props.location[1][0])
        var vectorSourceTwo = new Vector({projection: 'EPSG:4326'})
        
        var circleTwo = new Circle(changePointsTwo, 30);
        var CircleFeatureTwo = new Feature(circleTwo);
        vectorSourceTwo.addFeatures([CircleFeatureTwo]);
        var vectorLayerTwo =new VectorLayer({  //추가할 벡터레이어
          source: vectorSourceTwo,
          style: [
          new Style({
              stroke: new Stroke({   //두께
                  color: 'rgba( 0,0,205,0.9)',
                  width: 4
              })
          })]
        })

        var changePointsOne
        props.isLoading ? changePointsOne = loclog(1, 1) : changePointsOne = loclog(props.location[2][1],props.location[2][0])
        var vectorSourceOne = new Vector({projection: 'EPSG:4326'})
        
        var circleOne = new Circle(changePointsOne, 30);
        var CircleFeatureOne = new Feature(circleOne);
        vectorSourceOne.addFeatures([CircleFeatureOne]);
        var vectorLayerOne =new VectorLayer({  //추가할 벡터레이어
          source: vectorSourceOne,
          style: [
          new Style({
              stroke: new Stroke({   //두께
                  color: 'rgba( 0,0,205,0.9)',
                  width: 4
              })
          })]
        })

        map.addLayer(vectorLayer)        
        map.addLayer(vectorLayerOne)
        map.addLayer(vectorLayerTwo)
      
    },[])
    
    return (
      <section id='map-section'>
      </section>
    )
  }

export default MapSection