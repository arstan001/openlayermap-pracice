import React, { useLayoutEffect } from 'react'
import OlMap from 'ol/Map'
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      sidebar
    </aside>
  )
}

const MapSection = () => {
  useLayoutEffect(() => {
    const map = new OlMap({
      layers: [
        new TileLayer({
          source: new OSM(),
        }) ],
      target: 'map-section',
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
      controls: [],
    });
  }, [])
  
  return (
    <section id='map-section'>
    </section>
  )
}

const App = () => {
  return (
    <main id='main'>
      <Sidebar />
      <MapSection />
    </main>
  )
}

export default App;
