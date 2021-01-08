import React, { useLayoutEffect, Component } from 'react'

import Sidebar from './components/Sidebar'
import MapSection from './components/MapSection'




class App extends React.Component {
  constructor(){
    super()
    this.state={
      isLoading: true,
      reqdata:[]
    }
  }
  componentDidMount(){
    fetch("https://angelswing-frontend-test-serverless-api.vercel.app/api/locations")
    .then(response => response.json())
    .then(data => {
      this.setState({
        isLoading: false,
        reqdata:data.locations
      })
    })
  }
  render(){
    
    return (
    <main id='main'>
      <Sidebar locations={this.state.reqdata} isLoading={this.state.isLoading}/>
      
      <MapSection/>
    </main>
  )}

}

export default App;
