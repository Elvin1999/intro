import React, { Component } from 'react'

export default class ToDo extends Component {
  render() {
    return (
      <div>
        <ul style={{
            backgroundColor:"springgreen",
            padding:"10px",
            listStyle:'none',
            width:"50%",
            margin:'auto'
        }}>
            <li>Write Code</li>
            <li>Read Book</li>
            <li>Play Court Tennis</li>
        </ul>
      </div>
    )
  }
}
