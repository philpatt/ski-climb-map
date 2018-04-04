import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import utils from '../utils/api';
import Places from './Places';



function ShowMarkers(props) {
    // console.log('showmarker',props)
    var markers = props.markers;
    // console.log('showmarker renamed', markers)
    
    return (
        <div>gunna return this as markers</div>
    )
}


class Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            map: null,
            center: this.props.center,

        }
    }

    mapMoved(map){
        console.log('map', map);
        // console.log('mapmoved', map.latLng.lat())
        // this.setState({
        //     center: 
        //         {
        //             lat: map.latLng.lat(),
        //             lng: map.latLng.lng()
        //         }
        // })
    }

    mapLoaded(map){
        console.log('mapLoaded',map);
        var lat = this.state.center.lat.toString();
        var lng = this.state.center.lng.toString();
        var location = lat + ',' + lng;
        if (this.state.map === null){
            console.log('running?');
            utils.getVenues(location).then(function (venues) {
                return(
                    this.setState({
                        map: map,
                        places: venues
                    })
                )
            }.bind(this))
        }
        console.log('this.state update', this.state)        
        
    }


    render(){
        console.log('this.state.center',this.state.center);
        console.log('this.state.map', this.state.map);
        
        return (
            <div>
                <GoogleMap
                    ref={this.mapLoaded.bind(this)}
                    onDragEnd={this.mapMoved.bind(this)}
                    defaultZoom={this.props.zoom}
                    defaultCenter={ this.props.center }>
                    <ShowMarkers markers = {this.state.places}/>
                </GoogleMap>                 
                <Places 
                    places={this.state.places}>
                </Places>
            </div>
        )
    }
}

export default withGoogleMap(Map)