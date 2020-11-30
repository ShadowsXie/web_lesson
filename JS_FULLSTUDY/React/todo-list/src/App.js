// import logo from './logo.svg';
import { createRef, useState } from 'react'
import './App.css';
import Test from './Test.js'

const todoDefault = [
  {
    text: 'eat',
    done: false
  },
  {
    text: 'sleep',
    done: false
  }
]
function App() {
  const [ todos, setTodos ] = useState(todoDefault)  // [响应式数据， 修改数据的方法]
  const ref = createRef()
  const app = [1, 2, 3]
  const handleClick = () => {
    // ref.current DOM 节点
    let val = ref.current.value
    // const newTodos = todos.concat({text: val, done: false})
    let newTodos = todos.slice(0)
    newTodos.unshift({text: val, done: false})
    setTodos(newTodos)
    console.log(val);
  }
  const delItem = (i) => {
    let newTodos = todos.slice(0)
    newTodos.splice(i, 1)
    setTodos(newTodos)  // 显示调用一下 更改数据的api 因为没有监听数据的 get set
  }
  return (
    <>
    <Test name="小明" age={18} onMessage={(msg) => {
      console.log(msg);
    }}/>
    <input type="text" ref={ref} />
    <button onClick={handleClick}>添加代办事项</button>
    {
      todos.map((todoItem, i) => {
        return <li key={i} onClick={() => {
          delItem(i)
        }}>
          {todoItem.text}
        </li>
      })
    }
      { app }
    </>
  );
}

export default App;
