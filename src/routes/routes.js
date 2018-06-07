import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Todo from '../components/todo.js'
import TodoList from '../components/todoList.js'
import AddTask from '../components/addTask.js'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path='/todo'
            render={(props) => <Todo
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
            render={(props) => <TodoList
              {...props}
              todoBody={this.props.todoBody}
              calculatedPercentage={this.props.calculatedPercentage}
              slideNum={this.props.slideNum}
              categories={this.props.categories}

              handleAddTask={this.props.handleAddTask}
              removeTask={this.props.removeTask}
              handleTask={this.props.handleTask}
            />}
          ></Route>
          <Route path='/addTodo'
            render={(props) => <AddTask
              {...props}
              categories={this.props.categories}
              slideNum={this.props.slideNum}
              addTask={this.props.addTask}
              addNewTask={this.props.addNewTask}
            />}
          ></Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default Routes
