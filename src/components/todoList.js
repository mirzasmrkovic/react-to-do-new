import React, { Component } from 'react';

import SelectedTodo from './selectedTodo.js'

class TaskNumber extends Component {
  render(){
    return(
      <div id="taskCount"><s>You have {this.props.tasks} tasks todo today.</s></div>
    )
  }
}

class TodoList extends Component {
  openSlide = () => {
    this.props.history.push('/todoList')
    this.props.handleTodo()
  }

  render() {
    return (
      <div>
        <div id="toDoContainer">
          <img src="alex.jpg" alt='profile-img' id="userAvatarImg"/>
          <div id="userGreet">Hello, Alex.</div>
          <div><s>reminder (add a way to edit reminders)</s></div>
          <div id="taskCount"><TaskNumber tasks={6}/></div>
        </div>
        <div id="variousToDos">
          <div id="date">
              <span>TODAY: {date.toUpperCase()}</span>
          </div>
          <div id="toDoListContainerSmall">
            <button className='slideArrows' onClick={this.props.changeSlideLeft}>
              <div></div>
              <svg version="1.1" className="leftArrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
              </svg>
            </button>
            <SelectedTodo
              closeSearch={this.props.closeSearch}
              openSlide={this.openSlide}
              categories={this.props.categories}
              slideNum={this.props.slideNum}
            />
            <button className='slideArrows' onClick={this.props.changeSlideRight}>
              <svg version="1.1" className="rightArrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList

let today = new Date()
let dd = today.getDate()
let mm = today.getMonth()
let yyyy = today.getFullYear()
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let date = months[mm] + ' ' + dd + ', ' + yyyy
