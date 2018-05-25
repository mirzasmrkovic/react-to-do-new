import React, { Component } from 'react';

class RenderProgress extends Component {
  render() {
    let notFinished = this.props.categories[this.props.slideNum].incomplete.length
    let finished = this.props.categories[this.props.slideNum].complete.length
    let calculatedPercentage = (finished/(notFinished + finished)*100).toFixed(1)

    let progress = {width: calculatedPercentage + '%'}
    return (
      <div className="statusBar">
        <span className="progressBar"><span className="progress" style={progress}></span></span>
        <span className="percentage lato">{calculatedPercentage + '%'}</span>
      </div>
    )
  }
}

export default RenderProgress
