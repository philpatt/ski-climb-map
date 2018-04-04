import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import utils from '../utils/api';
import Places from './Places';



// function ShowMarkers(props) {
//     var markers = props.markers;
    
//     return (
//         <div>hello</div>
//     )
// }


class Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            map: null,
            center: this.props.center,
            mapMoved: false,
        }
    }

    mapMoved(map){
        console.log('mapmoved',this.state.mapMoved)
        return (
            this.setState({
                mapMoved: true,
            })
        )
        // console.log('map latlng', map.getCenter);
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
        console.log('this.state.map', this.state.map);   
        if (this.state.map === null){
            console.log('running?');
            return (
                utils.getVenues(location).then(function (venues) {
                    return(
                        this.setState({
                            map: map,
                            places: venues,
                            mapMoved: false
                        })
                    )
                }.bind(this))
            )
        }
        console.log('maploaded state update', this.state)        
    }


    render(){
        console.log('this.state',this.state);
        // console.log('this.props', this.props);
        

        return (
            <div>
                <GoogleMap
                    ref={this.mapLoaded.bind(this)}
                    onDragEnd={this.mapMoved.bind(this)}
                    defaultZoom={this.props.zoom}
                    defaultCenter={ this.props.center }>
                </GoogleMap>
     
                <Places 
                    places={this.state.places}>
                </Places>
            </div>
        )
    }
}

export default withGoogleMap(Map)