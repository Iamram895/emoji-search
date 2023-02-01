import React, { Component } from 'react'
import "./SearchBar.css"

export default class Searchbar extends Component {
    handleText = (event) => {
        this.props.handleSearchChange(event)
    }


  render() {
    return (
      <div className='search-input'>
        <div>
        <input placeholder="Search"  className='input-text' onChange={this.handleText}/>
        </div>
        
      </div>
    )
  }
}
