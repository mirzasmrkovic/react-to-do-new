import React from 'react'

export default function RenderProgress(props) {
  let progress = {width: props.percent + '%'}
  return (
    <div className="statusBar">
      <span className="progressBar"><span className="progress" style={progress}></span></span>
      <span className="percentage">{props.percent + '%'}</span>
    </div>
  )
}
