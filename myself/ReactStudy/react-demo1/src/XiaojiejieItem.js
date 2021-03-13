import React, { Component } from 'react';
import propTypes from 'prop-types'

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  state = {  }
  // 组件第一次存在于dom中，函数是不会被执行的
  // 如果已经存在于dom，函数才会被执行
  // UNSAFE_componentWillMount() {
  //   console.log('UNSAFE_componentWillMount');
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  render() { 
    console.log('child-render');
    return (  
      <li onClick = {this.handleClick}>
        {this.props.avname}为你服务-{this.props.content}
      </li>
    );
  }

  handleClick() {
    // this.props.list = []
    this.props.deleteItem(this.props.index)
  }
}

XiaojiejieItem.propTypes = {
  avname: propTypes.string.isRequired,
  content: propTypes.string,
  index: propTypes.number,
  deleteItem: propTypes.func
}

XiaojiejieItem.defaultProps = {
  avname: '蜗牛'
}
 
export default XiaojiejieItem;