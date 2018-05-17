import React, { Component } from 'react';
import './index.css'

import TodoList from './components/todoList.js'
import SearchBar from './components/searchbar.js'

import Routes from './routes/routes.js'
import Header from './components/header.js'
import {categories} from './json/categories.json'

class App extends Component {
  state = {
    slideNum: 0,
    categories: categories,
    openSearch: false,
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
          handleSearch={this._handleSearch}
        />
        {this.state.openSearch && <SearchBar />}
        <div className="gradient"></div>
        <Routes
          slideNum={this.state.slideNum}
          categories={this.state.categories}

          closeSearch={this.closeSearch}
          changeSlideLeft={this.changeSlideLeft}
          changeSlideRight={this.changeSlideRight}
        />
      </div>
    );
  }
}

export default App;
