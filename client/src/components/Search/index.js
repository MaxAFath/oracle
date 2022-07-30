import React from "react";
import Auth from "../../utils/auth";
import { Link, renderMatches } from "react-router-dom";
import mediaSearch from '../../utils/lookup';

function SearchBar() {
    document.getElementById("submit").click(function (event) {
        event.preventDefault();
        var search = document.getElementById('search').value;
        var mediares = mediaSearch(search);
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