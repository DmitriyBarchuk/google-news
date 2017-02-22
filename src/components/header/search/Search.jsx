import React, { Component } from 'react'
import './Search.css'
import searchicon from './searchicon.png'

class Search extends Component {
    render() {
        return(
            <div className="search">
                <img src={searchicon} className="search-icon" alt=""/>
            </div>
        )
    }
}

export default Search