import React, { Component } from 'react';
import CurrentCat from './CurrentCat'
import RenderProgress from './renderProgress.js'

class SelectedTodo extends Component {
  _handleClick = () => {
    this.props.openSlide()
    this.props.closeSearch()
  }

  render() {
    let complete = this.props.categories[this.props.slideNum].completeTodo.length
    let incomplete = this.props.categories[this.props.slideNum].incompleteTodo.length
    let taskSum = complete + incomplete

    return (
      <div id="selectedToDo">
        <div onClick={this._handleClick} className="toDoListSmall">
          <div className="categoryAvatar">
            <svg className="avatarColor">
              <path d={this.props.categories[this.props.slideNum].categoryImg}></path>
            </svg>
          </div>
          <div className="numOfTasks">{taskSum} tasks</div>
          <div className="categoryName"><CurrentCat catName={this.props.categories[this.props.slideNum].category}/></div>
          <RenderProgress
            categories={this.props.categories}
            slideNum={this.props.slideNum}
          />
        </div>
      </div>
    )
  }
}

export default SelectedTodo
