import React, { Component } from 'react';
import './index.css'
import TodoList from './components/todoList.js'

import Routes from './routes/routes.js'

class App extends Component {
  render() {
    return (
      <div className="page">
          <Routes />
          <TodoList />
      </div>
    );
  }
}

export default App;
