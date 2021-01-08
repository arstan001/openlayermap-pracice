import React from 'react'

const Locations = (props) => {
    return (
        <div className="location">
            <table>
                <thead>
                    <tr>
                        <th colSpan="2"><img src="./public/img/marker-annotation-colored.png" srcSet="./public/img/marker-annotation-colored@2x.png 2x,
./public/img/marker-annotation-colored@3x.png 3x" className="Marker-Annotation-Colored" />Location {props.index + 1}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Lat
                         </td>
                        <td>
                            <span className="detailinput">{props.item[1]}</span>
                    </tr>
                    <tr>
                        <td>
                            Long
                        </td>
                        <td>
                            <span className="detailinput">{props.item[0]}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Locations