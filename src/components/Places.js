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
    console.log('loading')
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

    render(){
        console.log('places props', this.props.places);
        console.log('places state', this.state.places);

        
        
        return(
            <div>            
                <h3>Here are some places in your area</h3>
                {this.props.places === undefined ? <Loading /> : <ShowPlaces  places= {this.props.places}/>}
            </div>
        )
    }
}

export default Places;