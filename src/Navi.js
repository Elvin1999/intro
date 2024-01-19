import React, { Component } from 'react'

export default class Navi extends Component {
  age=25;
  name="Elvin Camalzade";
  render() {
    return (
     <div>
        <h2>Navi Component</h2>
        <h3>Name : {this.name}</h3>
        <h3>Age : {this.age}</h3>
     </div>
    )
  }
}
