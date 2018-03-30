import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


class Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            map: null
        }
    }
    mapMoved(){
        console.log('map moved', JSON.stringify(this.state.map.getCenter()))
    }

    mapLoaded(map){
        if (this.state.map != null)
            return 
        
        this.setState({
            map: map
        })
    }
    
    render(){
    const markers = this.props.makers || []
    console.log(this.props)
        return(
            <GoogleMap
                ref={this.mapLoaded.bind(this)}
                onDragEnd={this.mapMoved.bind(this)}
                defaultZoom={this.props.zoom}
                defaultCenter={ this.props.center }>
                    {markers.map((marker, index)=>(
                        <Marker {...marker} />
                    )
                )}
            </GoogleMap>
        )
    }
}

export default withGoogleMap(Map)