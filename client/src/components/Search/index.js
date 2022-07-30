import React from "react";
import Auth from "../../utils/auth";
import { Link, renderMatches } from "react-router-dom";
import axios from 'axios';
import mediaSearch from '../../utils/queries';

function SearchBar() {
   $("#submit").click(function(event){
    event.preventDefault();
    var search = document.getElementById('search').value;
    var mediares = mediaSearch(search);
   })


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

export default SearchBar;