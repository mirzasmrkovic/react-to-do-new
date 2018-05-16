import React, { Component } from 'react';

import RenderSlide from './renderSlide.js'
import TodoBody from './todoBody.js'
import SearchBar from './searchbar.js'

class TaskNumber extends Component {
  render(){
    return(
      <div id="taskCount">You have {this.props.tasks} tasks todo today.</div>
    )
  }
}

class TodoList extends Component {
  state = {
    openSearch: false,
  }

  openSlide = () => {
    this.props.history.push('/todoList')
  }

  _handleSearch = () => {
    this.setState(prevState => {
      return {
        openSearch: !prevState.openSearch,
      }
    })
  }

  render () {
    return (
      <div>
        {this.state.openSearch && <SearchBar />}
        <div className="gradient"></div>
        <div id="toDoContainer">
          <img src="alex.jpg" id="userAvatarImg"/>
          <div id="userGreet">Hello, Alex.</div>
          <div>reminder (add a way to edit reminders)</div>
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
            <div id="selectedToDo">
              <RenderSlide
                openSlide={this.openSlide}
                categories={this.props.categories}
                slideNum={this.props.slideNum}
              />
            </div>
            <button className='slideArrows' onClick={this.props.changeSlideRight}>
              <svg version="1.1" className="rightArrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
              </svg>
            </button>
          </div>
        </div>
        {/*<TodoBody
          todoCategories={this.props.categories}
          categoryImg={this.props.categories[this.props.slideNum].categoryImg}
          calculatedPercentage={calculatedPercentage}
          slideNum={this.props.slideNum}
        />*/}
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
