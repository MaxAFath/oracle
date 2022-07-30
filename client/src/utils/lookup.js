import { gql } from '@apollo/client';
import axios from 'axios';

const client = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup';
const host = 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com';
const key = 'c1ad77c2admsh5b84afab4ae55c6p1137bbjsn2f03e9a2c7cf';

var result;
//removed for streamlining
//this method is for requesting with a specific country that is supported list is bellow
// supported territories uk, us, ar, at, be, br, ca, de, es, fr, ie, id, it, is, kr, my, mx, no, nl, pt, se & sg
/*export default function reqmedia(media, location) {
    const options = {
        method: 'GET',
        url: client,
        params: { term: media, country: location },
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };
    axios.request(options).then(function (response) {
        console.log(response.data);
        result = response.data;
    }).catch(function (error) {
        console.error(error);
    });
    return result

}*/
//request without any country
export default function reqmedia(media) {
    const options = {
        method: 'GET',
        url: client,
        params: { term: media },
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        result = response.data;
    }).catch(function (error) {
        console.error(error);
    });
    return result;
}

