import React, { Component } from "react";
import Task from "./task";

class Tasks extends Component {
  render() {
    const { tasks, heading } = this.props;
    return (
      <div>
        <h4>{heading}</h4>
        <ol>
          {tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </ol>
      </div>
    );
  }
}

export default Tasks;
