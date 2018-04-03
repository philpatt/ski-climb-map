import axios from "axios";


function getVenues(latlng){
    return axios.get('https://api.foursquare.com/v2/venues/search?ll='+latlng+'&oauth_token=SGDOMGGGKCBPNGVOSCSLKM5PSDFH4ODSM45RU2GNSFQG0DDA&v=20180402')
    .then(function(venues){
        return {
            venues: venues.data.response.venues
        }
    })
}

export default { getVenues }
