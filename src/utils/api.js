import axios from "axios";
import { Marker } from 'react-google-maps';



function getVenues(latlng){
    return axios.get('https://api.foursquare.com/v2/venues/search?ll='+latlng+'&oauth_token=SGDOMGGGKCBPNGVOSCSLKM5PSDFH4ODSM45RU2GNSFQG0DDA&v=20180402')
    .then(function(venues){
        return {
            venues: venues.data.response.venues
        }
    })
}

function getMarkers(param){
    console.log('getmarker param',param)
}

export default { getVenues}
