import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header" className='raleway'>
        {!this.props.todoBody ? <div onClick={this.props.handleSearch} className="flex-property cursor-pointer margin-left-10 margin-right-10">
          {this.props.openSearch === false ?
            <svg version="1.1" className="searchIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 384 381"  xmlSpace="preserve">
              <path d="M385,360.7L271.7,247.3c20.8-26,33.3-59.1,33.3-95.1C305,68.1,236.9,0,153,0C69,0,1,68.2,1,152.2s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L361.7,384L385,360.7z M56.8,248.6C31.1,222.9,17,188.7,17,152.3S31.2,81.7,56.8,56s59.9-40,96.2-40s70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3c-25.7,25.7-59.9,39.9-96.2,39.9C116.7,288.5,82.5,274.3,56.8,248.6z"/>
            </svg> :
            <svg version="1.1" className="xIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 415 409.7"  xmlSpace="preserve">
              <path d="M224.2,204.9L411.3,20.2c2.5-2.5,4-5.9,4-9.3c0-3-1.1-5.7-3.2-7.7c-2-2-4.8-3.1-7.8-3.1c-3.4,0-6.9,1.5-9.4,4L207.8,188.7L20.8,4c-2.5-2.5-6-4-9.4-4c-3,0-5.8,1.1-7.8,3.1c-2,2-3.2,4.7-3.2,7.7c0,3.4,1.5,6.7,4,9.3l187.1,184.7L4.4,389.5c-2.5,2.4-3.9,5.5-4,8.7c-0.1,3.2,1,6.1,3.1,8.3c2,2,4.8,3.1,7.8,3.1c3.4,0,6.9-1.4,9.4-4L207.8,221l187.1,184.7c4.8,4.7,12.9,5.1,17.2,0.8c4.5-4.5,4.1-12.1-0.8-17L224.2,204.9z"/>
            </svg>
          }
        </div> :
          <div onClick={this.props.returnBack} className="returnBack cursor-pointer flex-property margin-left-10 margin-right-10">
            <svg version="1.1" className="backArrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24"  xmlSpace="preserve">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
            </svg>
          </div>
        }
        <div id="title" className='bold-title uppercase'>
          {this.props.todoBody ? (this.props.addTask ? 'add task' : this.props.categories[this.props.slideNum].category) : 'todo'}
        </div>
        <div className="menu cursor-pointer">
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
        </div>
      </div>
    )
  }
}

export default Header
