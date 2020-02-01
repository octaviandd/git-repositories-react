/** @format */

import React from "react";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div id="grid">
        <div id="grid-2">
          {this.props.repos.map(
            ({ name, owner, stargazers_count, html_url }) => (
              <li key={name} id="main-li">
                <ul>
                  <li style={{ marginTop: "6px" }}>
                    <a href={html_url}>{name}</a>
                  </li>
                  <li style={{ fontStyle: "italic", marginBottom: "10px" }}>
                    @{owner.login}
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    {stargazers_count}
                    <i class="fas fa-star"></i>
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    <img src={owner.avatar_url}></img>
                  </li>
                </ul>
              </li>
            )
          )}
        </div>
      </div>
    );
  }
}
export default Grid;
