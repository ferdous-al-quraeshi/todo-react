import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import Header from "./components/header";
import Tasks from "./components/tasks";
import Actions from "./components/actions";

class TodoApp extends Component {
  render() {
    return (
      <div>
        <h2>Simple ToDo</h2>
        <Header />
        <Tasks />
        <Actions />
      </div>
    );
  }
}

export default hot(module)(TodoApp);
