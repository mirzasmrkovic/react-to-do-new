import React, { Component } from 'react';
import CurrentCat from './CurrentCat'
import RenderProgress from './renderProgress.js'

class RenderSlide extends Component {
  render() {
    return (
      <div onClick={this.props.openSlide} className="toDoListSmall">
        <div className="categoryAvatar">
          <svg className="avatarColor">
            <path d={this.props.categories[this.props.slideNum].categoryImg}></path>
          </svg>
        </div>
        <div className="numOfTasks">7 tasks</div>
        <div className="categoryName"><CurrentCat catName={this.props.categories[this.props.slideNum].category}/></div>
        <RenderProgress
          categories={this.props.categories}
          slideNum={this.props.slideNum}
        />
      </div>
    )
  }
}

export default RenderSlide
