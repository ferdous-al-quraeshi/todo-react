import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import Heading from "./components/heading";
import Tasks from "./components/tasks";
import Actions from "./components/actions";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);

    this.state = {
      heading: "Simple ToDo App with React",
      tasksHeading: "Tasks ToDo:",
      tasks: [
        { id: 1, title: "Set up project" },
        { id: 2, title: "Done templating" },
        { id: 3, title: "Implement 'view logic'" }
      ]
    };
  }
  handleRemove() {
    console.log("removed!");
  }
  render() {
    const { tasks, heading, tasksHeading } = this.state;
    return (
      <div>
        <Heading heading={heading} />
        <Tasks heading={tasksHeading} tasks={tasks} />
        <Actions />
      </div>
    );
  }
}

export default hot(module)(TodoApp);
