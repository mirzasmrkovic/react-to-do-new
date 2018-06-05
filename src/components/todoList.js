import React, { Component } from 'react';

import RenderProgress from './renderProgress.js'
import CurrentCat from './CurrentCat.js'
import TodoItem from './todoItem.js'

class TodoList extends Component {
  _handleClick = () => {
    this.props.history.push('/addTodo')
    this.props.handleAddTask()
  }

  render() {
    if (!this.props.todoBody) {
      this.props.history.push('/todo')
    }

    let complete = this.props.categories[this.props.slideNum].complete.length
    let incomplete = this.props.categories[this.props.slideNum].incomplete.length
    let taskSum = complete + incomplete

    return (
      <div className='todo-list'>
        <div className='todoBodyHeader'>
          <div className='categoryAvatar'>
            <svg version="1.1" className="avatarColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
              <path d={this.props.categories[this.props.slideNum].categoryImg}/>
            </svg>
          </div>
          <div onClick={this._handleClick} className='add-todo flex-property align-items-center justify-content-center'>
            <svg version="1.1" className="addIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
            </svg>
          </div>
        </div>
        <div className='toDoLists'>
          <div className='numOfTasks'>{taskSum} tasks</div>
          <div className='categoryName'><CurrentCat/></div>
          <RenderProgress
            openSlide={this.openSlide}
            categories={this.props.categories}
            slideNum={this.props.slideNum}
          />
        </div>
        <div className='listOfTodos'>
          <div className='unfinishedTodo'>
            <span className='uppercase light-gray bold-title'>Todos to be finished</span>
            <div className='itemContainer'>
              {this.props.categories[this.props.slideNum].incomplete.map((e,n) =>
                <TodoItem
                  todoText={e}
                  key={n}
                  completed={false}
                />
              )}
            </div>
          </div>
          <div className='finishedTodo'>
            <span className='uppercase light-gray bold-title'>Finished todos</span>
            <div className='itemContainer'>
              {this.props.categories[this.props.slideNum].complete.map((e,n) =>
                <TodoItem
                  todoText={e}
                  key={n}
                  completed={true}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList
