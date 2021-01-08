import React from 'react'

const Sidebar = (props) => {
    const locations = props
    return (
      <aside id='sidebar'>
        sidebar <p>long: {props.isLoading ? null : props.locations[0][0]} </p>
      </aside>
    )
  }
  export default Sidebar