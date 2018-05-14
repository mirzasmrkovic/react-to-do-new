import React, { Component } from 'react';


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

export default RenderProgress
