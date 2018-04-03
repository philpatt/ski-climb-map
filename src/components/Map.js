import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import utils from '../utils/api';
import Places from './Places';



function ShowMarkers(props) {
    console.log('showmarker',props.map)
    return (
        <div>hello</div>
    )
}


class Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            map: null,
            center: this.props.center,
            markers: 
            {
                lat: 0,
                lng: 0
            },
        }
    }

    mapMoved(){
        // console.log('map latlng', map.getCenter);
        console.log('map moved', this.state.map.getCenter())
        this.setState({
            center: 
                {
                    lat: this.state.map.getCenter().lat(),
                    lng: this.state.map.getCenter().lng()
                }
        })
    }

    mapLoaded(map){
        console.log('maaap',map);      
        if (this.state.map != null)
            return 
        this.setState({
            map: map
        })
    }
    render(){
        console.log('this.state.center',this.state.center);
        console.log('this.props', this.props);
        

        return (
            <div>
                <GoogleMap
                    ref={this.mapLoaded.bind(this)}
                    onDragEnd={this.mapMoved.bind(this)}
                    defaultZoom={this.props.zoom}
                    defaultCenter={ this.props.center }>
                    <ShowMarkers map={this.state.map}/>
                </GoogleMap>
                
                <Places 
                    location={this.state.center}>
                </Places>
            </div>
        )
    }
}

export default withGoogleMap(Map)