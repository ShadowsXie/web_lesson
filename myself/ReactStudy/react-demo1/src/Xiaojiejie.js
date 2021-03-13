import React, { Component, Fragment } from 'react'
import './style.css'
// import axios from 'axios'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import {CSSTransition , TransitionGroup} from 'react-transition-group'

class Xiaojiejie extends Component {
  // 在某一时刻，可以自动执行的函数（生命周期）
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['基础按摩', '精油推背']
    }
  }

  // UNSAFE_componentWillMount() {
  //   console.log(1);
  // }

  // componentDidMount() {
  //   console.log(2);
  // }

  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate');
  //   return true
  // }

  // UNSAFE_componentWillUpdate() {
  //   console.log('UNSAFE_componentWillUpdate');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // componentDidMount() {
  //   axios.get('https://web-api.juejin.im/v3/web/wbbr/bgeda')
  //   .then((res) => {
  //     console.log('请求成功' + JSON.stringify(res));
  //   })
  //   .catch((error) => {
  //     console.log('请求失败' + error);
  //   })
  // }

  render() {
    // console.log('render');
    return (
      <Fragment>
        <div>
          {/* 注释的正确写法 */}
          <label htmlFor = 'jspang'>增加服务：</label>
          <input 
            id = 'jspang' 
            className = 'input' 
            value = {this.state.inputValue} 
            onChange = {this.inputChange.bind(this)}
            ref = {(input) => {this.input = input}}
          /> 
          <button onClick = {this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref = {(ul) => {this.ul = ul}}>
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (
                  // <li 
                  //   key = {index + item}
                  //   onClick = {this.deleteItem.bind(this, index)}
                  //   dangerouslySetInnerHTML = {{__html:item}}
                  // >
                  // </li>
                  <CSSTransition
                    timeout={1000}
                    classNames='boss-text'
                    unmountOnExit
                    appear={true}
                    key={index+item} 
                  >
                    <XiaojiejieItem 
                      key = {index + item} 
                      content = {item}
                      index = {index}
                      // list = {this.state.list}
                      deleteItem = {this.deleteItem.bind(this)}
                    />
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ul>
        <Boss />
      </Fragment>
    )
  }

  inputChange(e) {
    // console.log(e.target.value);
    this.setState({
      // inputValue: e.target.value
      inputValue: this.input.value
    })
  }

  // 增加列表项
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length);
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