import React, { Component } from 'react';

import RenderProgress from './renderProgress.js'
import CurrentCat from './CurrentCat.js'
import TodoItem from './todoItem.js'

class TodoBody extends Component {
  render() {
    if (!this.props.todoBody) {
      this.props.history.push('/todo')
    }
    return (
      <div id='toDoBody'>
        <div className='todoBodyHeader'>
          <div className='categoryAvatar'>
            <svg version="1.1" className="avatarColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
              <path d={this.props.categories[this.props.slideNum].categoryImg}/>
            </svg>
          </div>
          <div className='addTodo'>
            <svg version="1.1" className="addIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
            </svg>
          </div>
        </div>
        <div className='toDoLists'>
          <div className='numOfTasks'>12 tasks</div>
          <div className='categoryName'><CurrentCat/></div>
          <RenderProgress
            openSlide={this.openSlide}
            categories={this.props.categories}
            slideNum={this.props.slideNum}
          />
        </div>
        <div className='listOfTodos'>
          <div className='unfinishedTodo'>
            <span className='todoTitle'>Todos to be finished</span>
            <div className='itemContainer'>
              {this.props.categories[this.props.slideNum].incompleteTodo.map((e,n) =>
                <TodoItem
                  todoText={e}
                  key={n}
                />
              )}
            </div>
          </div>
          <div className='finishedTodo'>
            <span className='todoTitle'>Finished todos</span>
            <div className='itemContainer'>
              {this.props.categories[this.props.slideNum].completeTodo.map((e,n) =>
                <TodoItem
                  todoText={e}
                  key={n}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoBody
