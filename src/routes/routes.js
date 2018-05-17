import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import TodoList from '../components/todoList.js'
import TodoBody from '../components/todoBody.js'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path='/todo'
            render={(props) => <TodoList
              {...props}
              slideNum={this.props.slideNum}
              calculatedPercentage={this.props.calculatedPercentage}
              categories={this.props.categories}

              closeSearch={this.props.closeSearch}
              handleReturn={this.props.handleReturn}
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
            />}
          ></Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default Routes
