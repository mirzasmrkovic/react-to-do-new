import React, { Component } from 'react';

class CategoriyItems extends Component {
  render() {
    let circleColor = {borderColor: this.props.category.categoryColor}

    return (
      <div onClick={() => this.props.handleSlideNum(this.props.category.category)} className='capitalize flex-property align-items-center category-item padding-up-dn-5'>
        <div style={circleColor} className='category-circle color margin-right-10'></div> {this.props.category.category}
      </div>
    )
  }
}

class AddTask extends Component {
  state = {
    slideNum: this.props.slideNum,
  }

  _handleSlideNum = (n) => {
    this.props.categories.map((i,num) => {
      if (n === i.category) {
        return this.setState({
          slideNum: num,
        })
      }
    })
  }

  render() {
    if (!this.props.addTask) {
      this.props.history.push('/todoList')
    }

    let chosenCategory = this.props.categories[this.state.slideNum].category

    return (
      <div className='dirty-white-bg padding-20'>
        <input className='padding-5 margin-top-10' type='text' placeholder={'Add new task to ' + chosenCategory.toUpperCase()} autoFocus/>
        <div className='padding-up-dn-10'>
          <div className='margin-bottom-10 margin-top-20'>Chose other categories</div>
          {this.props.categories.map((i,n) => {
            if (n !== this.state.slideNum) {
              return <CategoriyItems
                category={i}
                key={n}

                handleSlideNum={this._handleSlideNum}
              />
            }
          })}
        </div>
      </div>
    )
  }
}

export default AddTask

// <svg version="1.1" className="addIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
//   <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
// </svg>
