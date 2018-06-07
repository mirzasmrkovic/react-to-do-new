import React, { Component } from 'react';
import './css/index.css'
import './css/common.css'

import {categories} from './json/categories.json'


import Header from './components/header.js'
import Menu from './components/menu.js'
import TaskSlide from './components/taskSlide.js'
import SearchBar from './components/searchbar.js'

import Routes from './routes/routes.js'

class App extends Component {
  state = {
    slideNum: 0,
    categories: categories,
    showTaskPopup: false,
    menuOpen: false,
    menuAnimation: false,
    openSearch: false,
    todoBody: false,
    addTask: false,
  }

  onChange = () => {
		localStorage.setItem('todo', JSON.stringify(this.state.categories))
	}

	loadStorage = () => {
		let getItemStorage  = JSON.parse(localStorage.getItem('todo'))
    if (Boolean(localStorage.getItem('todo'))) {
      this.setState({
        categories: {...getItemStorage}
      })
    }
    else {
      this.onChange()
    }
	}

  _handleMenu = () => {
    if (!this.state.menuOpen) {
      this.setState({
        menuOpen: !this.state.menuOpen,
        menuAnimation: true,
      })
    }
    else {
      this.closeMenu()
    }
  }

  closeMenu = () => {
    this.setState({menuAnimation: false})
    setTimeout(() => this.setState({menuOpen: false}), 400)
  }

  _handleTodo = () => {
    this.setState({
      todoBody: true,
    })
  }

  closeTaskSlide = () => {
    this.setState({
      showTaskPopup: false,
    })
  }

  returnBack = () => {
    if (this.state.addTask) {
      this.setState({
        addTask: false,
      })
    }
    else {
      this.setState({
        todoBody: false,
      })
    }
    this.closeMenu()
  }

  _handleAddTask = () => {
    this.setState({
      addTask: true,
    })
    this.closeTaskSlide()
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

  _handleSearch = () => {
    this.setState(prevState => {
      return {
        openSearch: !prevState.openSearch,
      }
    })
    this.closeMenu()
  }

  closeSearch = () => {
    this.setState({
      openSearch: false,
    })
  }

  addNewTask = (value, slideNum, complete, itemNum) => {
    Object.keys(this.state.categories).map(key => {
      if (Number(key) === slideNum) {
        this.setState({
          categories: {
            ...this.state.categories,
            [key]: {
              ...this.state.categories[key],
              incomplete: [...this.state.categories[key].incomplete, value]
            }
          }
        },
        () => {
          if (complete !== undefined) {
            this.removeTask(slideNum, complete, itemNum)
          }
        }
      )
      }
    })
    if (!complete) {
      this.setState({showTaskPopup: slideNum})
      this.returnBack()
    }
  }

  removeTask = (key, complete, itemNum) => {
    let taskStatus
    if (!complete) {
      taskStatus = 'incomplete'
    }
    else {
      taskStatus = 'complete'
    }
    let updatedTasks = this.state.categories[key][taskStatus]
    updatedTasks.splice(itemNum, 1)
    this.setState({
      categories: {
        ...this.state.categories,
        [key]: {
          ...this.state.categories[key],
          [taskStatus]: updatedTasks
        }
      }
    }, () => this.onChange())
  }

  handleTask = (itemNum, complete) => {
    let task
    if (complete) {
      task = this.state.categories[this.state.slideNum].complete[itemNum]
    }
    else {
      task = this.state.categories[this.state.slideNum].incomplete[itemNum]
    }
    if (!complete) {
      Object.keys(this.state.categories).map(key => {
        if (Number(key) === this.state.slideNum) {
          this.setState({
            categories: {
              ...this.state.categories,
              [key]: {
                ...this.state.categories[key],
                complete: [...this.state.categories[key].complete, task]
              }
            }
          },
          () => this.removeTask(key, complete, itemNum)
          )
        }
      })
    }
    else {
      this.addNewTask(task, this.state.slideNum, complete, itemNum)
    }
  }

  componentWillMount() {
    this.loadStorage()
  }

  render() {
    return (
      <div className="page">
        <Header
          categories={this.state.categories}
          slideNum={this.state.slideNum}
          openSearch={this.state.openSearch}
          todoBody={this.state.todoBody}
          addTask={this.state.addTask}
          menuOpen={this.state.menuAnimation}

          handleMenu={this._handleMenu}
          returnBack={this.returnBack}
          handleSearch={this._handleSearch}
        />
        {this.state.menuOpen && <Menu
          menuAnimation={this.state.menuAnimation}

          handleMenu={this._handleMenu}
        />}
        {this.state.showTaskPopup !== false &&
          <TaskSlide
            addedCategory={this.state.categories[this.state.showTaskPopup].category}

            closeTaskSlide={this.closeTaskSlide}
          />
        }
        {this.state.openSearch && <SearchBar />}
        <Routes
          categories={this.state.categories}
          slideNum={this.state.slideNum}
          todoBody={this.state.todoBody}
          addTask={this.state.addTask}

          addNewTask={this.addNewTask}
          handleAddTask={this._handleAddTask}
          closeSearch={this.closeSearch}
          handleTodo={this._handleTodo}
          changeSlideLeft={this.changeSlideLeft}
          changeSlideRight={this.changeSlideRight}

          removeTask={this.removeTask}
          handleTask={this.handleTask}
        />
      </div>
    );
  }
}

export default App;
