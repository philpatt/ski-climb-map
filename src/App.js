import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      location : {
        lat : 47.6062,
        lng : -122.3321
      }
    }
  }
  render() {
    // console.log('whats on app',this.props)
    const markers = [ 
      {
        location: {
          lat: 47.6062,
          lng: -122.3321
        }
      }
    ]

    return (
      <div>
          <Map
            markers = { markers }
            zoom={ 10 }
            center={ this.state.location }
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            >
          </Map>

      </div>
    );
  }
}

export default App;
