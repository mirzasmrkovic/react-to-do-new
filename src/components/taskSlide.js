import React, { Component } from 'react';

class TaskSlide extends Component {
  state = {
    closeSlide: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        closeSlide: true,
      })
      setTimeout(() => this.props.closeTaskSlide(), 200)
    }, 3000)
  }
  render() {
    return (
      <div onClick={this.props.closeTaskSlide} className={(this.state.closeSlide ? 'task-slide-close' : 'task-slide-open') + ' task-slide title-s bold-title uppercase flex-property justify-content-between align-items-center'}>
        <span>You added a new task to {this.props.addedCategory}</span>
        <div className='cursor-pointer'>
          <svg version="1.1" className="xIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 415 409.7"  xmlSpace="preserve">
            <path d="M224.2,204.9L411.3,20.2c2.5-2.5,4-5.9,4-9.3c0-3-1.1-5.7-3.2-7.7c-2-2-4.8-3.1-7.8-3.1c-3.4,0-6.9,1.5-9.4,4L207.8,188.7L20.8,4c-2.5-2.5-6-4-9.4-4c-3,0-5.8,1.1-7.8,3.1c-2,2-3.2,4.7-3.2,7.7c0,3.4,1.5,6.7,4,9.3l187.1,184.7L4.4,389.5c-2.5,2.4-3.9,5.5-4,8.7c-0.1,3.2,1,6.1,3.1,8.3c2,2,4.8,3.1,7.8,3.1c3.4,0,6.9-1.4,9.4-4L207.8,221l187.1,184.7c4.8,4.7,12.9,5.1,17.2,0.8c4.5-4.5,4.1-12.1-0.8-17L224.2,204.9z"/>
          </svg>
        </div>
      </div>
    )
  }
}

export default TaskSlide
