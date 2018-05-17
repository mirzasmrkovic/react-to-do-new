import React, { Component } from 'react';
import './css/index.css'
import './css/common.css'

import SearchBar from './components/searchbar.js'

import Routes from './routes/routes.js'
import Header from './components/header.js'
import {categories} from './json/categories.json'

class App extends Component {
  state = {
    slideNum: 0,
    categories: categories,
    openSearch: false,
    todoBody: false,
  }

  _handleReturn = () => {
    this.setState({
      todoBody: true,
    })
  }

  returnBack = () => {
    this.setState({
      todoBody: false,
    })
  }

  changeSlideLeft = () => {
    if (this.state.slideNum === 0) {
      this.setState({
        slideNum: (Object.keys(this.state.categories).length)-1,
      })
    }
    else {
      this.setState({
        slideNum: (this.state.slideNum - 1),
      })
    }
  }

  changeSlideRight = () => {
    if (this.state.slideNum === (Object.keys(this.state.categories).length)-1) {
      this.setState({
        slideNum: 0,
      })
    }
    else {
      this.setState({
        slideNum: (this.state.slideNum + 1),
      })
    }
  }

  _handleSearch = () => {
    this.setState(prevState => {
      return {
        openSearch: !prevState.openSearch,
      }
    })
  }

  closeSearch = () => {
    this.setState({
      openSearch: false,
    })
  }

  render() {
    return (
      <div className="page">
        <Header
          openSearch={this.state.openSearch}
          todoBody={this.state.todoBody}

          returnBack={this.returnBack}
          handleSearch={this._handleSearch}
        />
        {this.state.openSearch && <SearchBar />}
        <div className="gradient"></div>
        <Routes
          slideNum={this.state.slideNum}
          categories={this.state.categories}
          todoBody={this.state.todoBody}

          closeSearch={this.closeSearch}
          handleReturn={this._handleReturn}
          changeSlideLeft={this.changeSlideLeft}
          changeSlideRight={this.changeSlideRight}
        />
      </div>
    );
  }
}

export default App;
