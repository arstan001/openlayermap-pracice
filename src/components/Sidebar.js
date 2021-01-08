import React from 'react'
import './../index.css'
import Locations from './Locations'
const Sidebar = (props) => {
    let locations = props.isLoading ? null : props.locations.map((item, index) => <Locations item={item} index={index} key={index}/>
    )
    console.log(locations)
    return (
        <aside id='sidebar'>
            <div className="iconbar">
                <div className="active">
                    <img src="./public/img/combined-shape.png" srcSet="./public/img/combined-shape@2x.png 2x,
             ./public/img/combined-shape@3x.png 3x" className="Combined-Shape" alt="loading" />
                </div>
                <div className="non-active">
                    <img src="./public/img/overlay-gray.png" srcSet="./piblic/img/overlay-gray@2x.png 2x,
             ./piblic/img/overlay-gray@3x.png 3x" className="Overlay-Gray grayRectangle" />
                </div>
                <div className="non-active">
                    <img src="./public/img/map-hovered.png" srcSet="./public/img/map-hovered@2x.png 2x,
             ./public/img/map-hovered@3x.png 3x" className="Map-Hovered" />
                </div>
            </div>

            <main className="iconmenu">
                {props.isLoading ? null : locations }
            </main>
        </aside>
    )
}
export default Sidebar