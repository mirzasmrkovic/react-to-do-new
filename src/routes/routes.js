import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import TodoList from '../components/todoList.js'
import TodoBody from '../components/TodoBody.js'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path='/ee'
            render={(props) => <TodoList
              {...props}
              categories={this.props.categories}
            />}
          ></Route>
          <Route path='/todo' component={TodoBody}></Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default Routes
