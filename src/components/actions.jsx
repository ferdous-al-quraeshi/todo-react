import React, { Component } from "react";

class Actions extends Component {
  render() {
    return (
      <div>
        <form onSubmit={submit}>
          <input type="text" name="data" />
          <button style={{ marginLeft: 10 }}>Add</button>
        </form>

        <br />
        <button onClick={removeAll}>Remove All</button>
      </div>
    );
  }
}

const submit = () => {};
const removeAll = () => {};

export default Actions;
