import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import Places from './components/Places';
class App extends Component {

  render() {
    const location = {
      lat: 47.6062,
      lng: -122.3321
    }
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
        SKI CLIMB MAP
          <Map
            markers = { markers }
            zoom={ 10 }
            center={ location }
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        <Places />

      </div>
    );
  }
}

export default App;
