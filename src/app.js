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
    todoBody: true,
    addTask: true,
  }

  _handleTodo = () => {
    this.setState({
      todoBody: true,
    })
  }

  returnBack = () => {
    if (this.state.addTask) {
      this.setState({
        addTask: false,
      })
    }
    else {
      this.setState({
        todoBody: false,
      })
    }
  }

  _handleAddTask = () => {
    this.setState({
      addTask: true,
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
          categories={this.state.categories}
          slideNum={this.state.slideNum}
          openSearch={this.state.openSearch}
          todoBody={this.state.todoBody}
          addTask={this.state.addTask}

          returnBack={this.returnBack}
          handleSearch={this._handleSearch}
        />
        {this.state.openSearch && <SearchBar />}
        <div className="gradient"></div>
        <Routes
          slideNum={this.state.slideNum}
          categories={this.state.categories}
          todoBody={this.state.todoBody}
          addTask={this.state.addTask}

          handleAddTask={this._handleAddTask}
          closeSearch={this.closeSearch}
          handleTodo={this._handleTodo}
          changeSlideLeft={this.changeSlideLeft}
          changeSlideRight={this.changeSlideRight}
        />
      </div>
    );
  }
}

export default App;
