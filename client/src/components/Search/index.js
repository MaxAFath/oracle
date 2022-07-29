import React from "react";
import Auth from "../../utils/auth";
import { Link, renderMatches } from "react-router-dom";
import axios from 'axios';
const client = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup';
const host = 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com';
const key = 'c1ad77c2admsh5b84afab4ae55c6p1137bbjsn2f03e9a2c7cf';
function SearchBar() {

    const axios = require("axios");
    state = {
        results: []
    }



    const options = {
        method: 'GET',
        url: client,
        params: { term: 'bojack', country: 'us' },
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        const result = response.data;
        this.setState({ results });
    }).catch(function (error) {
        console.error(error);
    });
    if (Auth.loggedIn()) {
        return (
            <div>
                <label>Search to see where your show is streaming</label>
                <input id="show" type="text" size="42"></input>
                <input id="user-submit" class="submit-quote-button" type="submit" value="Submit"></input>
            </div>
        )
    }
}

export default SearchBar;

/*<ul>{
                this.state.results.map(result => <li key={result.id}>{result.name}</li>)
            }</ul>
*/