import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className={(this.props.menuAnimation ? 'slide-down' : 'slide-up') + ' menu-container'}>
        menu
      </div>
    )
  }
}

export default Menu
