import React, { Component } from 'react';

import RenderSlide from './RenderSlide'
import TodoBody from './TodoBody'
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
    slideNum: 0,
    categories: this.props.categories,
    openSearch: false,
  }

  _handleSlide = () => {
    this.props.history.push('/todo')
  }

  changeSlideLeft = () => {
    if (this.state.slideNum === 0) {
      this.setState({
        slideNum: (Object.keys(this.state.categories).length)-1,
      })
    }
    else {
      this.setState({
        slideNum: (this.state.slideNum - 1),
      })
    }
  }

  changeSlideRight = () => {
    if (this.state.slideNum === (Object.keys(this.state.categories).length)-1) {
      this.setState({
        slideNum: 0,
      })
    }
    else {
      this.setState({
        slideNum: (this.state.slideNum + 1),
      })
    }
  }

  _handleSearch = () => {
    this.setState(prevState => {
      return {
        openSearch: !prevState.openSearch,
      }
    })
  }

  render () {
    let notFinished = this.state.categories[this.state.slideNum].incompleteTodo.length
    let finished = this.state.categories[this.state.slideNum].completeTodo.length
    let calculatedPercentage = (finished/(notFinished + finished)*100).toFixed(1)

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
            <button className='slideArrows' onClick={this.changeSlideLeft}>
              <div></div>
              <svg version="1.1" className="leftArrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
              </svg>
            </button>
            <div id="selectedToDo">
              <RenderSlide
                handleSlide={this._handleSlide}
                categoryImg={this.state.categories[this.state.slideNum].categoryImg}
                catName={this.state.categories[this.state.slideNum].category}
                percent={calculatedPercentage}
              />
            </div>
            <button className='slideArrows' onClick={this.changeSlideRight}>
              <svg version="1.1" className="rightArrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
              </svg>
            </button>
          </div>
        </div>
        {/*<TodoBody
          todoCategories={this.state.categories}
          categoryImg={this.state.categories[this.state.slideNum].categoryImg}
          calculatedPercentage={calculatedPercentage}
          slideNum={this.state.slideNum}
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
