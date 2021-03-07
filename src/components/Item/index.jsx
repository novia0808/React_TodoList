import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    mouse: false
  }
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse:flag})
    }
  }
  checkHandler = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }
  deleteHandler = (id) => {
      if(window.confirm('确定删除吗？')){
        this.props.deleteTodo(id)
      }
  }
  render() {
    const {id, name, done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.checkHandler(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=>{this.deleteHandler(id)}} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}
