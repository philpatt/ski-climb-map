import React, { Component } from 'react';
import utils from '../utils/api';



function ShowPlaces(props) {
   var places = props.places.venues;  
   console.log('show places', places); 
    return (
        <ul>
            {places.map( (place) => {
                return (
                    <li 
                    key= {place.id}
                    >
                        <a>{place.name}</a>
                    </li>
                )
            })}
        </ul>
    )
}

function Loading(){
    return (
        <div>
            loading...
        </div>
    )
}



class Places extends Component {
    constructor(props){
        super(props);
        this.state = {
            places: null,
            
        }

    }

    componentWillReceiveProps(){
        var lat = this.props.location.lat.toString();
        var lng = this.props.location.lng.toString();
        var location = lat + ',' + lng;
        utils.getVenues(location).then(function(venues){
            console.log('api call',location);            
            return (
                this.setState({
                    places: venues
                })
            )
        }.bind(this));
    }

    render(){
        return(
            <div>            
                <h3>Here are some places in your area</h3>
                {this.state.places === null ? <Loading /> : <ShowPlaces  places= {this.state.places}/>}
            </div>
        )
    }
}

export default Places;