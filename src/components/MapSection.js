import React, { useLayoutEffect } from 'react'

import OlMap from 'ol/Map'
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj';


const MapSection = () => {
    const seoul = [126.9779451, 37.5662952];
    const seoulMercator = fromLonLat(seoul);
    useLayoutEffect(() => {
      const map = new OlMap({
        layers: [
          new TileLayer({
            source: new OSM(),
          }) ],
        target: 'map-section',
        view: new View({
          center: seoulMercator,
          zoom: 16,
        }),
        controls: [],
      });
    }, [])
    
    return (
      <section id='map-section'>
      </section>
    )
  }
  export default MapSection