import React from 'react'
import './../index.css'
import Locations from './Locations'
class Sidebar extends React.Component{
    constructor() {
        super()
        this.state = {
            clicked:"1"
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
                <div className="iconbar">
                    <button className={this.state.clicked==="1" ? "active" : "nonactive"} onClick={(e) => this.handleChange("1")}>
                        <img src="./public/img/combined-shape.png" srcSet="./public/img/combined-shape@2x.png 2x,
                        ./public/img/combined-shape@3x.png 3x" className="Combined-Shape" alt="loading" />
                    </button>

                    <button className={this.state.clicked==="2" ? "active" : "nonactive"} onClick={(e) => this.handleChange("2")}>
                        <img src="./public/img/overlay-gray.png" srcSet="./piblic/img/overlay-gray@2x.png 2x,
             ./piblic/img/overlay-gray@3x.png 3x" className="Overlay-Gray grayRectangle" />
                    </button>
                    <button className={this.state.clicked==="3" ? "active" : "nonactive"} onClick={(e) => this.handleChange("3")}>
                        <img src="./public/img/map-hovered.png" srcSet="./public/img/map-hovered@2x.png 2x,
             ./public/img/map-hovered@3x.png 3x" className="Map-Hovered" />
                    </button>
                </div>
                <main className="iconmenu">
                    {locations}
                </main>
            </aside>
        )
    }
}
export default Sidebar