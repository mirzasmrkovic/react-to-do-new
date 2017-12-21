import React from 'react'
import RenderProgress from './RenderProgress'
import CurrentCat from './CurrentCat'

export default function TodoBody(props) {
  console.log('aa')
  return (
    <div id='toDoBody'>
      <div className='todoBodyHeader'>
        <div className='categoryAvatar'>
          <svg version="1.1" className="avatarColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
            <path d="M24 22h-24v-15h24v15zm-15-20c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z"/>
          </svg>
        </div>
        <div className='addTodo'>
          <svg version="1.1" className="addIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
          </svg>
        </div>
      </div>
      <div className='toDoLists'>
        <div className='numOfTasks'>12 tasks</div>
        <div className='categoryName'><CurrentCat catName={props.todoCategories[props.slideNum].categoryName}/></div>
        <RenderProgress percent={props.calculatedPercentage}/>
      </div>
      <div className='listOfTodos'>
        <div className='unfinishedTodo'>
          <span className='todoTitle'>Todos to be finished</span>
          <div className='itemContainer'>
            <div className='todoItems'>
              <div className='textCheckContainer'>
                <div className='checkMarkContainer'>
                  <svg version="1.1" className="checkMark" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
                    <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/>
                  </svg>
                </div>
                <div className='textContainer'>Meet Meet Meet Meet Meet Meet Meet Meet Meet Meet </div>
              </div>
              <div className='deleteItem'>
                <svg version="1.1" className="deleteIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 415 409.7">
                  <path d="M224.2,204.9L411.3,20.2c2.5-2.5,4-5.9,4-9.3c0-3-1.1-5.7-3.2-7.7c-2-2-4.8-3.1-7.8-3.1c-3.4,0-6.9,1.5-9.4,4L207.8,188.7L20.8,4c-2.5-2.5-6-4-9.4-4c-3,0-5.8,1.1-7.8,3.1c-2,2-3.2,4.7-3.2,7.7c0,3.4,1.5,6.7,4,9.3l187.1,184.7L4.4,389.5c-2.5,2.4-3.9,5.5-4,8.7c-0.1,3.2,1,6.1,3.1,8.3c2,2,4.8,3.1,7.8,3.1c3.4,0,6.9-1.4,9.4-4L207.8,221l187.1,184.7c4.8,4.7,12.9,5.1,17.2,0.8c4.5-4.5,4.1-12.1-0.8-17L224.2,204.9z"/>
                </svg>
              </div>
            </div>
            <div className='todoItems finishedItem'>
              <div className='textCheckContainer'>
                <div className='checkMarkContainer'>
                  <svg version="1.1" className="checkMark" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
                    <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/>
                  </svg>
                </div>
                <div className='textContainer'>Meeting at 17:00</div>
              </div>
              <div className='deleteItem'>
                <svg version="1.1" className="deleteIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 415 409.7">
                  <path d="M224.2,204.9L411.3,20.2c2.5-2.5,4-5.9,4-9.3c0-3-1.1-5.7-3.2-7.7c-2-2-4.8-3.1-7.8-3.1c-3.4,0-6.9,1.5-9.4,4L207.8,188.7L20.8,4c-2.5-2.5-6-4-9.4-4c-3,0-5.8,1.1-7.8,3.1c-2,2-3.2,4.7-3.2,7.7c0,3.4,1.5,6.7,4,9.3l187.1,184.7L4.4,389.5c-2.5,2.4-3.9,5.5-4,8.7c-0.1,3.2,1,6.1,3.1,8.3c2,2,4.8,3.1,7.8,3.1c3.4,0,6.9-1.4,9.4-4L207.8,221l187.1,184.7c4.8,4.7,12.9,5.1,17.2,0.8c4.5-4.5,4.1-12.1-0.8-17L224.2,204.9z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='finishedTodo'>
          <span className='todoTitle'>Finished todos</span>
        </div>
      </div>
    </div>
  )
}
