import React, { Component } from 'react';
import './index.css'
import TodoList from './components/todoList.js'

import Routes from './routes/routes.js'
import Header from './components/header.js'
import {categories} from './json/categories.json'

class App extends Component {
  state = {
    categories: categories,
  }

  render() {
    return (
      <div className="page">
        <Header />
        <Routes
          categories={this.state.categories}
        />
      </div>
    );
  }
}

export default App;
