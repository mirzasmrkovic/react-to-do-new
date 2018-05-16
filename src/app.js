import React, { Component } from 'react';
import './index.css'
import TodoList from './components/todoList.js'

import Routes from './routes/routes.js'
import Header from './components/header.js'
import {categories} from './json/categories.json'

class App extends Component {
  state = {
    slideNum: 0,
    categories: categories,
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

  render() {
    return (
      <div className="page">
        <Header />
        <Routes
          slideNum={this.state.slideNum}
          changeSlideLeft={this.changeSlideLeft}
          changeSlideRight={this.changeSlideRight}
          categories={this.state.categories}
        />
      </div>
    );
  }
}

export default App;
