import React, { Component } from 'react';

class CategoriyItems extends Component {
  render() {
    let circleColor = {borderColor: this.props.category.categoryColor}
    return (
      <div onClick={() => this.props.handleSlideNum(this.props.category.category)} className='title-s capitalize cursor-pointer flex-property align-items-center category-item margin-top-10 margin-bottom-10'>
        <div style={circleColor} className='category-circle color margin-right-10'></div> <span className='margin-left-5'>{this.props.category.category}</span>
      </div>
    )
  }
}

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    slideNum: this.props.slideNum,
    value: '',
  }

  _handleSlideNum = (n) => {
    Object.keys(this.props.categories).map((i,num) => {
      if (n === this.props.categories[i].category) {
        return this.setState({
          slideNum: num,
        })
      }
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value) {
      this.props.addNewTask(this.state.value, this.state.slideNum)
    }
    event.preventDefault();
  }

  componentDidUpdate() {
    this.nameInput.focus()
  }

  render() {
    if (!this.props.addTask) {
      this.props.history.push('/todoList')
    }

    let chosenCategory = this.props.categories[this.state.slideNum].category

    return (
      <form className='dirty-white-bg add-task padding-20'>
        <div className='title-m bold-title uppercase light-gray'>Add a new task to {chosenCategory.toUpperCase()}</div>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          ref={(input) => { this.nameInput = input; }}
          className='add-todo-input padding-5 margin-top-10'
          type='text'
          autoFocus
        />
        <div className='padding-up-dn-10 margin-top-20'>
          <div className='margin-bottom-20 margin-top-5 title-m bold-title uppercase light-gray'>Chose other categories</div>
          {Object.keys(this.props.categories).map((i,n) => {
            if (n !== this.state.slideNum) {
              return <CategoriyItems
                category={this.props.categories[i]}
                key={n}

                handleSlideNum={this._handleSlideNum}
              />
            }
          })}
        </div>
        <button onClick={this.handleSubmit} className='flex-property add-button align-items-center justify-content-center padding-5 margin-top-20 cursor-pointer'>
          <svg version="1.1" className="addIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
          </svg>
        </button>
      </form>
    )
  }
}


export default AddTask

// <svg version="1.1" className="addIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
//   <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
// </svg>
