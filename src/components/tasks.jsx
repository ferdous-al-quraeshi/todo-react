import React, { Component } from "react";
import Task from "./task";

class Tasks extends Component {
  render() {
    return (
      <div>
        Tasks ToDo:
        <ol>
          <li>
            <Task />
          </li>
          <li>
            <Task />
          </li>
          <li>
            <Task />
          </li>
        </ol>
      </div>
    );
  }
}

export default Tasks;
