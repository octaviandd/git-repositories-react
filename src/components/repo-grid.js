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
                  <li>
                    <a href={html_url}>{name}</a>
                  </li>
                  <li>@{owner.login}</li>
                  <li>{stargazers_count}stars</li>
                  <li>
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
