import React, { Component } from 'react';

import RenderSlide from './RenderSlide'
import TodoBody from './TodoBody'

import {categories} from './json/categories.json'

class TaskNumber extends Component {
  render(){
    return(
      <div id="taskCount">You have {this.props.tasks} tasks todo today.</div>
    )
  }
}

class TodoList extends Component {
  state = {
    slideNum: 0,
    categories: categories,
  }

  changeSlideLeft = () => {
    if (this.state.slideNum === 0) {
      this.setState({
        slideNum: (Object.keys(this.state.categories).length)-1,
      })
    }
    else {
      this.setState({
        slideNum: (this.state.slideNum - 1),
      })
    }
  }

  changeSlideRight = () => {
    if (this.state.slideNum === (Object.keys(this.state.categories).length)-1) {
      this.setState({
        slideNum: 0,
      })
    }
    else {
      this.setState({
        slideNum: (this.state.slideNum + 1),
      })
    }
  }

  render () {
    let notFinished = this.state.categories[this.state.slideNum].incompleteTodo.length
    let finished = this.state.categories[this.state.slideNum].completeTodo.length
    let calculatedPercentage = (finished/(notFinished + finished)*100).toFixed(1)

    return (
      <div>
        <div id="header">
          <div id="menu">
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
          </div>
          <div id="title">TODO</div>
          <div id="search">
            <svg version="1.1" className="searchIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 384 381"  xmlSpace="preserve">
              <path d="M385,360.7L271.7,247.3c20.8-26,33.3-59.1,33.3-95.1C305,68.1,236.9,0,153,0C69,0,1,68.2,1,152.2s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L361.7,384L385,360.7z M56.8,248.6C31.1,222.9,17,188.7,17,152.3S31.2,81.7,56.8,56s59.9-40,96.2-40s70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3c-25.7,25.7-59.9,39.9-96.2,39.9C116.7,288.5,82.5,274.3,56.8,248.6z"/>
            </svg>
            <svg version="1.1" className="xIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 415 409.7"  xmlSpace="preserve">
              <path d="M224.2,204.9L411.3,20.2c2.5-2.5,4-5.9,4-9.3c0-3-1.1-5.7-3.2-7.7c-2-2-4.8-3.1-7.8-3.1c-3.4,0-6.9,1.5-9.4,4L207.8,188.7L20.8,4c-2.5-2.5-6-4-9.4-4c-3,0-5.8,1.1-7.8,3.1c-2,2-3.2,4.7-3.2,7.7c0,3.4,1.5,6.7,4,9.3l187.1,184.7L4.4,389.5c-2.5,2.4-3.9,5.5-4,8.7c-0.1,3.2,1,6.1,3.1,8.3c2,2,4.8,3.1,7.8,3.1c3.4,0,6.9-1.4,9.4-4L207.8,221l187.1,184.7c4.8,4.7,12.9,5.1,17.2,0.8c4.5-4.5,4.1-12.1-0.8-17L224.2,204.9z"/>
            </svg>
          </div>
        </div>
        <div id="searchBarContainer"><input className='searchBar' placeholder='Search for a to-do'/></div>
        <div className="gradient"></div>
        <div id="toDoContainer">
          <img src="alex.jpg" id="userAvatarImg"/>
          <div id="userGreet">Hello, Alex.</div>
          <div id="inspirationQuote"><Inspiration inspQuote={inspiration[randomNumber].quote} inspAuthor={inspiration[randomNumber].author}/></div>
          <div id="taskCount"><TaskNumber tasks={6}/></div>
        </div>
        <div id="variousToDos">
          <div id="date">
              <span>TODAY: {date.toUpperCase()}</span>
          </div>
          <div id="toDoListContainerSmall">
            <div id="leftSlideArrow" className='slideArrows' onClick={this.changeSlideLeft}>
              <div></div>
              <svg version="1.1" className="leftArrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
              </svg>
            </div>
            <div id="selectedToDo">
              <RenderSlide svg={todoAvatars[this.state.slideNum].categoryImg} catName={this.state.categories[this.state.slideNum].category} percent={calculatedPercentage}/>
            </div>
            <div id="rightSlideArrow" className='slideArrows' onClick={this.changeSlideRight}>
              <svg version="1.1" className="rightArrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList

let todoAvatars = [
  {categoryName: 'personal', categoryImg: 'M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z'},
  {categoryName: 'work', categoryImg: 'M24 22h-24v-15h24v15zm-15-20c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z'},
  {categoryName: 'fitness', categoryImg: 'M21.826 9h-2.086c.171-.487.262-.957.262-1.41 0-2.326-1.818-3.776-4.024-3.573-2.681.247-4.518 3.71-4.978 4.484-.527-.863-2.261-4.238-4.981-4.494-2.11-.199-4.019 1.181-4.019 3.582 0 3.109 4.347 7.084 9.001 11.615 1.16-1.127 2.285-2.208 3.324-3.243l.97 1.857c-1.318 1.302-2.769 2.686-4.294 4.181-6.164-6.037-11.001-10.202-11.001-14.403 0-3.294 2.462-5.526 5.674-5.596 2.163-.009 4.125.957 5.327 2.952 1.177-1.956 3.146-2.942 5.253-2.942 3.064 0 5.746 2.115 5.746 5.595 0 .464-.06.928-.174 1.395zm-11.094 4c-.346.598-.992 1-1.732 1-1.104 0-2-.896-2-2s.896-2 2-2c.74 0 1.386.402 1.732 1h1.222l1.88-2.71c.14-.202.376-.315.622-.299.245.016.464.161.576.38l2.27 4.437.813-1.45c.124-.221.357-.358.611-.358h5.274v2h-4.513l-1.759 2.908c-.132.219-.373.348-.629.337-.255-.01-.484-.16-.598-.389l-2.256-4.559-.989 1.406c-.131.186-.345.297-.573.297h-1.951z'},
  {categoryName: 'groceries', categoryImg: 'M4.559 7l4.701-4.702c.198-.198.459-.298.72-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.882zm12 0h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2zm-14 5c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3z'},
  {categoryName: 'miscellaneous', categoryImg: 'M18 9v-3c-1 0-3.308-.188-4.506 2.216l-4.218 8.461c-1.015 2.036-3.094 3.323-5.37 3.323h-3.906v-2h3.906c1.517 0 2.903-.858 3.58-2.216l4.218-8.461c1.356-2.721 3.674-3.323 6.296-3.323v-3l6 4-6 4zm-9.463 1.324l1.117-2.242c-1.235-2.479-2.899-4.082-5.748-4.082h-3.906v2h3.906c2.872 0 3.644 2.343 4.631 4.324zm15.463 8.676l-6-4v3c-3.78 0-4.019-1.238-5.556-4.322l-1.118 2.241c1.021 2.049 2.1 4.081 6.674 4.081v3l6-4z'},
]

let today = new Date()
let dd = today.getDate()
let mm = today.getMonth()
let yyyy = today.getFullYear()
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let date = months[mm] + ' ' + dd + ', ' + yyyy

let inspiration = [
  {'quote': "Whatever you are, be a good one.", 'author': "Abraham Lincoln"},
  {'quote': "If you dream it, you can do it.", 'author': "Walt Disney"},
  {'quote': "Never, never, never give up.", 'author': "Winston Churchill"},
  {'quote': "Don’t wait. The time will never be just right.", 'author': "Napoleon Hill"},
  {'quote': "If not us, who? If not now, when?", 'author': "John F. Kennedy"},
  {'quote': "Everything you can imagine is real.", 'author': "Pablo Picasso"},
  {'quote': "I can, therefore I am", 'author': "Simone Weil"},
  {'quote': "Remember no one can make you feel inferior without your consent.", 'author': "Eleanor Roosevelt"},
  {'quote': "Turn your wounds into wisdom.", 'author': "Oprah Winfrey"},
  {'quote': "Wherever you go, go with all your heart.", 'author': "Confucius"},
  {'quote': "Do what you can, with what you have, where you are.", 'author': "Theodore Roosevelt"},
  {'quote': "Hope is a waking dream.", 'author': "Aristotle"},
  {'quote': "Action is the foundational key to all success.", 'author': "Pablo Picasso"},
  {'quote': "Do one thing every day that scares you.", 'author': "Eleanor Roosevelt"},
  {'quote': "You must do the thing you think you cannot do.", 'author': "Eleanor Roosevelt"},
  {'quote': "Life is trying things to see if they work.", 'author': "Ray Bradbury"},
  {'quote': "Believe you can and you’re halfway there.", 'author': "Theodore Roosevelt"},
  {'quote': "Eighty percent of success is showing up.", 'author': "Woody Allen"},
]

let numOfInsp
inspiration.forEach(function(item, index) { //Finds number of items in inspiration so you don't have to
  numOfInsp = index                        //update the number every time you add a new quote
})
let randomNumber = Math.floor((Math.random() * (numOfInsp + 1)))

function Inspiration(props) {
  return (
    <div className='quote'>{props.inspQuote}
      <div className='author'>&emsp;&emsp; - <b>{props.inspAuthor}</b></div>
    </div>
  )
}

// function searchBar(props) {
//   return (
//     <input className="searchBar" placeholder="Search for a to-do" />
//   )
// }

// $(document).on('click', '.addTodo', function() {
//   ReactDOM.render(
//     <div className='addTask'>
//       <div className='newTaskHeader'>New Task</div>
//       <div className='inputContainer'>
//         <div className='inputDescription'>Add a new task</div>
//         <input className='inputTodo' type='text' autoFocus/>
//         <div className='addButton'>
//           <svg version="1.1" className="addIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
//             <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
//           </svg>
//         </div>
//       </div>
//     </div>,
//     document.getElementById('toDoBody')
//   )
// })

//
// function changeSlide(e) {
//   if (e.currentTarget.id === 'leftSlideArrow') {
//     slideNum -= 1
//     if (slideNum < 0) {
//        slideNum = 4
//     }
//   }
//   else if (e.currentTarget.id === 'rightSlideArrow') {
//     slideNum += 1
//     if (slideNum > 4) {
//        slideNum = 0
//     }
//   }
//   ReactDOM.render(<RenderSlide svg={todoAvatars[slideNum].categoryImg} catName={todoCategories[slideNum].categoryName} percent={calculatedPercentage}/>, document.getElementById('selectedToDo'))
// }

// $(document).on('click', '.toDoListsSmall', function () {
//   ReactDOM.render(
//     <div>
//       <div id="header">
//         <div id="returnBack">
//           <svg version="1.1" className="backArrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
//             <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
//           </svg>
//         </div>
//         <div id="title"><CurrentCat catName={todoCategories[slideNum].categoryName}/></div>
//         <div className='todoMenu'>
//           <svg version="1.1" className="dottedMenu" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
//             <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/>
//           </svg>
//         </div>
//       </div>
//       <div className='gradient'></div>
//       <TodoBody todoCategories={todoCategories} calculatedPercentage={calculatedPercentage} slideNum={slideNum}/>
//     </div>,
//     document.getElementById('root')
//   )
// })

// $(document).on('click', '#returnBack', function() {
//
// })
//
// $(document).on('click', '.textCheckContainer', function() {
//   let currentItem = this.parentNode
//   $(currentItem).toggleClass('finishedItem')
// })

// $(document).on('click', '.addTodo', function() {
//   ReactDOM.render(
//     <div className='addTask'>
//       <div className='newTaskHeader'>New Task</div>
//       <div className='inputContainer'>
//         <div className='inputDescription'>Add a new task</div>
//         <input className='inputTodo' type='text' autoFocus/>
//         <div className='addButton'>
//           <svg version="1.1" className="addIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
//             <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
//           </svg>
//         </div>
//       </div>
//     </div>,
//     document.getElementById('toDoBody')
//   )
// })


// $(document).on('click', '.addButton', function() {
//
// })
