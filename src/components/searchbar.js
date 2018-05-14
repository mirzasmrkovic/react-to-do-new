import React, { Component } from 'react';

class SearchBar extends Component {
  render(){
    return (
      <div className="searchBarContainer">
        <input className='searchBar searchBarOpen' placeholder='Search for a to-do'/>
      </div>
    )
  }
}

export default SearchBar
