import React from 'react'
import RenderProgress from './RenderProgress'
import CurrentCat from './CurrentCat'

export default function RenderSlide(props) {
  return (
  <div className="toDoListsSmall">
    <div className="categoryAvatar">
      <svg className="avatarColor">
        <path d={props.svg}></path>
      </svg>
    </div>
    <div className="numOfTasks">7 tasks</div>
    <div className="categoryName"><CurrentCat catName={props.catName}/></div>
    <RenderProgress percent={props.percent}/>
  </div>
  )
}
