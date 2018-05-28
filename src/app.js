import React, { Component } from 'react';
import './css/index.css'
import './css/common.css'

import SearchBar from './components/searchbar.js'

import Routes from './routes/routes.js'
import Header from './components/header.js'
import TaskSlide from './components/taskSlide.js'
import {categories} from './json/categories.json'

class App extends Component {
  state = {
    slideNum: 0,
    categories: categories,
    openSearch: false,
    todoBody: false,
    addTask: false,
    showTaskPopup: false,
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
  }

  closeSearch = () => {
    this.setState({
      openSearch: false,
    })
  }

  addNewTask = (value, slideNum) => {
    Object.keys(this.state.categories).map(key => {
      if (Number(key) === slideNum) {
        this.setState({
          categories: {
            ...this.state.categories,
            [key]: {
              ...this.state.categories[key],
              incomplete: [...this.state.categories[key].incomplete, value]
            }
          },
          showTaskPopup: slideNum,
        })
      }
    })
    this.returnBack()
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

          returnBack={this.returnBack}
          handleSearch={this._handleSearch}
        />
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
        />
      </div>
    );
  }
}

export default App;
