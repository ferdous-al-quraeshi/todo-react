import React, { Component } from "react";

class Task extends Component {
  render() {
    return (
      <li>
        <span>{this.props.task.title}</span>
        <button style={{ margin: 7 }}>Remove</button>
      </li>
    );
  }
}

export default Task;
