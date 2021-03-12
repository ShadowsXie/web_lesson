import React, { Component, Fragment } from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['基础按摩', '精油推背']
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          {/* 注释的正确写法 */}
          <label htmlFor = 'jspang'>增加服务：</label>
          <input id = 'jspang' className = 'input' value = {this.state.inputValue} onChange = {this.inputChange.bind(this)}/> 
          <button onClick = {this.addList.bind(this)}>增加服务</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                // <li 
                //   key = {index + item}
                //   onClick = {this.deleteItem.bind(this, index)}
                //   dangerouslySetInnerHTML = {{__html:item}}
                // >
                // </li>
                <XiaojiejieItem 
                  key = {index + item} 
                  content = {item}
                  index = {index}
                  deleteItem = {this.deleteItem.bind(this)}
                />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  inputChange(e) {
    // console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }

  // 增加列表项
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })   
  }

  // 删除列表项
  deleteItem(index) {
    // console.log(index);
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default Xiaojiejie