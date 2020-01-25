/** @format */

import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  checkInput(e) {
    var value = e.target.value;
    this.setState({
      input: value
    });
    console.log(this.state.input);
  }

  getInput() {
    let title = this.state.input;
    this.props.getLanguage(title);
  }

  render() {
    return (
      <div id="nav">
        <input
          placeholder="Search a repository"
          onChange={this.checkInput.bind(this)}
          value={this.state.input}
        ></input>
        <button onClick={this.getInput.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default Navbar;
