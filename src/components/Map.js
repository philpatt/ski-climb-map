import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Places from './Places';

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

    mapMoved(latLng){
        // console.log('map latlng', map.getCenter);
        console.log('map moved', this.state.map.getCenter().lat())
        
        this.setState({
            center: 
                {
                    lat: this.state.map.getCenter().lat(),
                    lng: this.state.map.getCenter().lng()
                }
        })
    }

    mapLoaded(map){      
        if (this.state.map != null)
            return 
        this.setState({
            map: map
        })
    }


    render(){
        console.log('this.state.center',this.state.center);
        console.log('this.props', this.props);
        
        const markers = this.props.markers.map((venue,i) => {
            const marker = {
                position: {
                    lat: venue.location.lat,
                    lng: venue.location.lng
                }
            }
            return <Marker key={i} {...marker} />
        })
        return(
            <div>
                <GoogleMap
                    ref={this.mapLoaded.bind(this)}
                    onDragEnd={this.mapMoved.bind(this)}
                    defaultZoom={this.props.zoom}
                    defaultCenter={ this.props.center }>
                    { markers }
                </GoogleMap>
                
                <Places 
                    location={this.state.center}>
                </Places>
            </div>
        )
    }
}

export default withGoogleMap(Map)