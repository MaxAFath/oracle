import React from "react";
import Auth from "../../utils/auth";
import axios from 'axios';
<<<<<<< HEAD
const client = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup';
const host = 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com';
const key = 'c1ad77c2admsh5b84afab4ae55c6p1137bbjsn2f03e9a2c7cf';
function SearchBar() {

    const axios = require("axios");
    state = {
        results: []
=======
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
>>>>>>> develop
    }
    document.getElementById("submit").click(function (event) {
        event.preventDefault();
        var search = document.getElementById('search').value;
        var mediares = lookup(search);
        console.log(mediares);
    })

<<<<<<< HEAD


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
=======
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
>>>>>>> develop
            </div>
        )
    }
}

export default SearchBar;

/*<ul>{
                this.state.results.map(result => <li key={result.id}>{result.name}</li>)
            }</ul>
*/