import React from "react";
import Auth from "../../utils/auth";
import axios from 'axios';
//import mediaSearch from '../../utils/lookup';


function SearchBar() {
    function lookup(media) {
        const client = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup';
        const host = 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com';
        const key = 'c1ad77c2admsh5b84afab4ae55c6p1137bbjsn2f03e9a2c7cf';
    
        var result;
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
    document.getElementById("submit").click(function (event) {
        event.preventDefault();
        var search = document.getElementById('search').value;
        var mediares = lookup(search);
        console.log(mediares);
    })

    if (Auth) {
        return (
            <div className="search">
                <form id="user-form">
                    <label>Media you are searching for</label>
                    <input id="search" type="text"></input>
                    <input id="submit" type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
    else{
        return(
            <div className="search">
                <h2 className="warning">You must sign in to have acces to search functionality</h2>
            </div>
        )
    }
}

export default SearchBar;

/*<ul>{
                this.state.results.map(result => <li key={result.id}>{result.name}</li>)
            }</ul>
*/