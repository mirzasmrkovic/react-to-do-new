import React from 'react'
import ReactDOM from 'react-dom'
import './animate.js'
import './index.css'
//import './script.js'
import $ from 'jquery'
import registerServiceWorker from './registerServiceWorker'
registerServiceWorker()

let todoCategories = {
personal: {categoryName: 'personal', categoryImg: '', unfinishedToDo: ['Some title','another title', 'great todo'], finishedTodo: ['I\'m done with this bullshit']},
work: {categoryName: 'work', categoryImg: '', categoryToDo: {title: 'Some title'}},
fitness: {categoryName: 'fitness', categoryImg: '', categoryToDo: {title: 'Some title'}},
groceries: {categoryName: 'groceries', categoryImg: '', categoryToDo: {title: 'Some title'}},
miscellaneous: {categoryName: 'miscellaneous', categoryImg: '', categoryToDo: {title: 'Some title'}},
}

console.log(todoCategories.personal)

// todoCategories.personal.unfinishedToDo.forEach(function(item, index) {
//   console.log(item)
// })
//
// todoCategories.personal.finishedTodo.forEach(function(item, index) {
//   console.log(item)
// })

// let inspiration = [
//   {'quote': "Whatever you are, be a good one.", 'author': "Abraham Lincoln"},
//   {'quote': "If you dream it, you can do it.", 'author': "Walt Disney"},
//   {'quote': "Never, never, never give up.", 'author': "Winston Churchill"},
//   {'quote': "Don’t wait. The time will never be just right.", 'author': "Napoleon Hill"},
//   {'quote': "If not us, who? If not now, when?", 'author': "John F. Kennedy"},
//   {'quote': "Everything you can imagine is real.", 'author': "Pablo Picasso"},
//   {'quote': "I can, therefore I am", 'author': "Simone Weil"},
//   {'quote': "Remember no one can make you feel inferior without your consent.", 'author': "Eleanor Roosevelt"},
//   {'quote': "Turn your wounds into wisdom.", 'author': "Oprah Winfrey"},
//   {'quote': "Wherever you go, go with all your heart.", 'author': "Confucius"},
//   {'quote': "Do what you can, with what you have, where you are.", 'author': "Theodore Roosevelt"},
//   {'quote': "Hope is a waking dream.", 'author': "Aristotle"},
//   {'quote': "Action is the foundational key to all success.", 'author': "Pablo Picasso"},
//   {'quote': "Do one thing every day that scares you.", 'author': "Eleanor Roosevelt"},
//   {'quote': "You must do the thing you think you cannot do.", 'author': "Eleanor Roosevelt"},
//   {'quote': "Life is trying things to see if they work.", 'author': "Ray Bradbury"},
//   {'quote': "Believe you can and you’re halfway there.", 'author': "Theodore Roosevelt"},
//   {'quote': "Eighty percent of success is showing up.", 'author': "Woody Allen"},
// ]
//
// let numOfInsp
// inspiration.forEach(function(item, index) { //Finds number of items in inspiration so you don't have to
//   numOfInsp = index                        //update the number every time you add a new quote
// })
// let randomNumber = Math.floor((Math.random() * (numOfInsp + 1))) //+1 because of the way Math.random works.
//
// ReactDOM.render(
//   <div className='quote'>{inspiration[randomNumber].quote}
//     <div className='author'>&emsp;&emsp; - <b>{inspiration[randomNumber].author}</b></div>
//   </div>,
//   document.getElementById('inspirationQuote')
// )
//
// ReactDOM.render(
//   <span>You have {randomNumber /*placeholder*/} tasks todo today.</span>,
//   document.getElementById('taskCount')
// )

let something = function() {
  if (true) {
    let categories = ['Personal', 'Work', 'Fitness', 'Groceries', 'Miscellaneous']
    return categories[1]
  } else {
    return 'TODO'
  }
}

function Welcome(props) {
  return <span>Hello, {props.id}</span>;
}

const element = <Welcome id='fuck' />;

ReactDOM.render(
  <div id='work'>
    <div id="header">
      <div id="returnBack">
        <svg version="1.1" className="leftArrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
        </svg>
      </div>
      <div id="title">{something()}</div>
      <div className='todoMenu'>
        <svg version="1.1" className="dottedMenu" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
          <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/>
        </svg>
      </div>
    </div>
    <div className='gradient'></div>
    <div id='toDoBody'>
      <div className='todoBodyHeader'>
        <div className='categoryAvatar'>
          <svg version="1.1" className="briefcase" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
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
        <div className='categoryName'>Work</div>
        <div className='statusBar'><span className='progressBar'><span className='progress'></span></span><span className='percentage'>24%</span></div>
      </div>
      <div className='listOfTodos'>
        <div className='unfinishedToDo'>
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
        {/*<div className='finishedToDo'>
          <span className='todoTitle'>Finished todos</span>
        </div>*/}
      </div>
    </div>
  </div>,
  document.getElementById('root')
)

$(document).on('click', '.addTodo', function() {
  ReactDOM.render(
    <div className='addTask'>
      <div className='newTaskHeader'>New Task</div>
      <div className='inputContainer'>
        <div className='inputDescription'>Add a new task</div>
        <input className='inputTodo' autoFocus/>
      </div>
    </div>,
    document.getElementById('toDoBody')
  )
})

$(document).on('click', '.textCheckContainer', function() {
  let currentItem = this.parentNode
  $(currentItem).toggleClass('finishedItem')
})

// ReactDOM.render(<input className='searchBar' placeholder='Search for a to-do'/>, document.getElementById('searchBarContainer'))

$(document).on('click', '#search', function() {
  $('.searchBar').toggleClass('searchBarOpen')
  $('.searchIcon').toggle()
  $('.xIcon').toggle()
})
//
// let today = new Date()
// let dd = today.getDate()
// let mm = today.getMonth()
// let yyyy = today.getFullYear()
// let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// let date = months[mm] + ' ' + dd + ', ' + yyyy
// ReactDOM.render(<span>TODAY: {date.toUpperCase()}</span>, document.getElementById('date'))

// <div id="search">
//   <svg version="1.1" className="searchIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 384 381">
//     <path d="M385,360.7L271.7,247.3c20.8-26,33.3-59.1,33.3-95.1C305,68.1,236.9,0,153,0C69,0,1,68.2,1,152.2s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L361.7,384L385,360.7z M56.8,248.6C31.1,222.9,17,188.7,17,152.3S31.2,81.7,56.8,56s59.9-40,96.2-40s70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3c-25.7,25.7-59.9,39.9-96.2,39.9C116.7,288.5,82.5,274.3,56.8,248.6z"/>
//   </svg>
//   <svg version="1.1" className="xIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 415 409.7">
//     <path d="M224.2,204.9L411.3,20.2c2.5-2.5,4-5.9,4-9.3c0-3-1.1-5.7-3.2-7.7c-2-2-4.8-3.1-7.8-3.1c-3.4,0-6.9,1.5-9.4,4L207.8,188.7L20.8,4c-2.5-2.5-6-4-9.4-4c-3,0-5.8,1.1-7.8,3.1c-2,2-3.2,4.7-3.2,7.7c0,3.4,1.5,6.7,4,9.3l187.1,184.7L4.4,389.5c-2.5,2.4-3.9,5.5-4,8.7c-0.1,3.2,1,6.1,3.1,8.3c2,2,4.8,3.1,7.8,3.1c3.4,0,6.9-1.4,9.4-4L207.8,221l187.1,184.7c4.8,4.7,12.9,5.1,17.2,0.8c4.5-4.5,4.1-12.1-0.8-17L224.2,204.9z"/>
//   </svg>
// </div>

















































/**/
