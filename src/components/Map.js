import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import utils from '../utils/api';
import Places from './Places';



function ShowMarkers(props) {
    // console.log('showmarker',props)

    var markers = props.markers;
    // console.log('showmarker', markers)
    
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
            // venues: ,
        }
    }

    mapMoved(map){
        // console.log('map latlng', map.getCenter);
        console.log('mapmoved',map)
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
                            places: venues
                        })
                    )
                }.bind(this))
            )
        }
        console.log('maploaded state update', this.state)        
        
    }
    componentDidMount(map){
        if (this.state.map !== null) {
            console.log('running?', map);
            return (
                this.setState({
                    map: map

                })
            )
        }
    }

    render(){
        console.log('this.state.center',this.state);
        // console.log('this.props', this.props);
        

        return (
            <div>
                <GoogleMap
                    ref={this.mapLoaded.bind(this)}
                    onDragEnd={this.mapMoved.bind(this)}
                    defaultZoom={this.props.zoom}
                    defaultCenter={ this.props.center }>
                    <ShowMarkers markers = {this.props.markers}/>
                </GoogleMap>
     
                <Places 
                    places={this.state.places}>
                </Places>
            </div>
        )
    }
}

export default withGoogleMap(Map)