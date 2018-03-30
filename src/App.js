import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import Places from './components/Places';
class App extends Component {

  render() {
    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }
    return (
      <div>
        SKI CLIMB MAP
          <Map
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
