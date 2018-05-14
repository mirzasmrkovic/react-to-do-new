import React, { Component } from 'react';
import CurrentCat from './CurrentCat'


class RenderProgress extends Component {
  render() {
    let progress = {width: this.props.percent + '%'}
    return (
      <div className="statusBar">
        <span className="progressBar"><span className="progress" style={progress}></span></span>
        <span className="percentage">{this.props.percent + '%'}</span>
      </div>
    )
  }
}

class RenderSlide extends Component {
  render() {
    return (
      <div onClick={this.props.handleSlide} className="toDoListsSmall">
        <div className="categoryAvatar">
          <svg className="avatarColor">
            <path d={this.props.categoryImg}></path>
          </svg>
        </div>
        <div className="numOfTasks">7 tasks</div>
        <div className="categoryName"><CurrentCat catName={this.props.catName}/></div>
        <RenderProgress percent={this.props.percent}/>
      </div>
    )
  }
}

export default RenderSlide
