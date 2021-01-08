import React from 'react'
import './../index.css'
import Locations from './Locations'
class Sidebar extends React.Component{
    constructor() {
        super()
        this.state = {
            clicked:"locations"
            }
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            clicked:event
        })
    }
    render() {

        const locations = this.props.isLoading ? null : this.props.location.map((item, index) => <Locations item={item} index={index} key={index}/>)
        
        return (
            
            <aside id='sidebar'>
                <link rel="preload" href="./public/img/combined-shaped.png" as="image"/>
                <div className="iconbar">
                    <button className={this.state.clicked==="locations" ? "active" : "nonactive"} onClick={(e) => this.handleChange("locations")}>
                    {this.state.clicked==="locations" ? <img src="./public/img/combined-shape.png" srcSet="./public/img/combined-shape@2x.png 2x,
                        ./public/img/combined-shape@3x.png 3x" className="Combined-Shape" alt="loading" /> : <img src="./public/img/combined-shaped.png" srcSet="./public/img/combined-shaped@2x.png 2x,
                        ./public/img/combined-shaped@3x.png 3x" className="Combined-Shape" alt="loading" />}
                        {/* I had errors with puting image on the background 
                        (probably something with webpack, so i put images directly here) */}
                    </button>

                    <button className={this.state.clicked==="2" ? "active" : "nonactive"} onClick={(e) => this.handleChange("2")}>
                    {this.state.clicked==="2" ? <img src="./public/img/overlay-hovered.png" srcSet="./piblic/img/overlay-hovered@2x.png 2x,
             ./piblic/img/overlay-hovered@3x.png 3x" className="Overlay-Gray grayRectangle"/> : <img src="./public/img/overlay-gray.png" srcSet="./piblic/img/overlay-gray@2x.png 2x,
             ./piblic/img/overlay-gray@3x.png 3x" className="Overlay-Gray grayRectangle"/>}
                    </button>
                    <button className={this.state.clicked==="3" ? "active" : "nonactive"} onClick={(e) => this.handleChange("3")}>
                    {this.state.clicked==="3" ? <img src="./public/img/map-hovered-copy.png" srcSet="./public/img/map-hovered-copy@2x.png 2x,
             ./public/img/map-hovered-copy@3x.png 3x" className="Map-Hovered" /> : <img src="./public/img/map-hovered.png" srcSet="./public/img/map-hovered@2x.png 2x,
             ./public/img/map-hovered@3x.png 3x" className="Map-Hovered" />}
                    </button>
                </div>
                <main className="iconmenu" >
                    {this.state.clicked==="locations" ? locations : ""}
                </main>
            </aside>
        )
    }
}
export default Sidebar