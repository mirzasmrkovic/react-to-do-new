import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import TodoList from '../components/todoList.js'
import TodoBody from '../components/TodoBody.js'

export default () => (
  <BrowserRouter>
    <div>
      <Route
        path='/'
        render={(props) => <TodoList {...props} />}></Route>
      <Route path='/todo' component={TodoBody}></Route>
    </div>
  </BrowserRouter>
)
