import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import TodoList from '../components/todoList.js'
import TodoBody from '../components/todoBody.js'
import AddTask from '../components/addTask.js'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path='/todo'
            render={(props) => <TodoList
              {...props}
              categories={this.props.categories}
              slideNum={this.props.slideNum}
              calculatedPercentage={this.props.calculatedPercentage}

              closeSearch={this.props.closeSearch}
              handleTodo={this.props.handleTodo}
              changeSlideLeft={this.props.changeSlideLeft}
              changeSlideRight={this.props.changeSlideRight}
            />}
          ></Route>
          <Route path='/todoList'
            render={(props) => <TodoBody
              {...props}
              todoBody={this.props.todoBody}
              calculatedPercentage={this.props.calculatedPercentage}
              slideNum={this.props.slideNum}
              categories={this.props.categories}

              handleAddTask={this.props.handleAddTask}
            />}
          ></Route>
          <Route path='/addTodo'
            render={(props) => <AddTask
              {...props}
              categories={this.props.categories}
              slideNum={this.props.slideNum}
              addTask={this.props.addTask}

              returnBack={this.props.returnBack}
            />}
          ></Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default Routes
