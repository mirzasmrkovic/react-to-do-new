import React, { Component } from 'react';

class AddTask extends Component{
  render() {
    if (!this.props.addTask) {
      this.props.history.push('/todoList')
    }

    return (
      <div className='flex-property flex-direction-column'>
      	<div className='input-container'>
      		<div className='input-description'>Add a new task</div>
      		<input className='input-todo' type='text' autoFocus/>
      		<div className='add-button'>
      			<svg version="1.1" className="addIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
      				<path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
      			</svg>
      		</div>
      	</div>
      </div>
    )
  }
}

export default AddTask
