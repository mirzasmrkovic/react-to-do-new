import React, { Component } from 'react';

class RenderProgress extends Component {
  render() {
    let notFinished = this.props.categories[this.props.slideNum].incompleteTodo.length
    let finished = this.props.categories[this.props.slideNum].completeTodo.length
    let calculatedPercentage = (finished/(notFinished + finished)*100).toFixed(1)

    let progress = {width: calculatedPercentage + '%'}
    return (
      <div className="statusBar">
        <span className="progressBar"><span className="progress" style={progress}></span></span>
        <span className="percentage">{calculatedPercentage + '%'}</span>
      </div>
    )
  }
}

export default RenderProgress
