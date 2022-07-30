import React from "react";
import Auth from "../../utils/auth";
import { Link, renderMatches } from "react-router-dom";
import axios from 'axios';

function SearchBar() {
    const axios = require("axios");
    state = {
        results: []
    }

    const options = {
        method: 'GET',
        url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
        params: { term: 'bojack', country: 'uk' },
        headers: {
            'X-RapidAPI-Key': 'c1ad77c2admsh5b84afab4ae55c6p1137bbjsn2f03e9a2c7cf',
            'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
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
            <ul>{
                this.state.results.map(result => <li key={result.id}>{result.name}</li>)
            }</ul>
        )
    }
}

export default SearchBar;