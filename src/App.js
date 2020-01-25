/** @format */

import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import fetchData from "./components/api";
import Loading from "./components/loading";
import Grid from "./components/repo-grid";
import GithubLogo from "./components/github";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      active: "all",
      loading: true
    };

    this.getData = this.getData.bind(this);
    this.handleActiveLanguage = this.handleActiveLanguage.bind(this);
  }
  componentDidMount() {
    this.getData(this.state.active);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.active !== this.state.active) {
      this.getData(this.state.active);
    }
  }

  getData(lang) {
    this.setState({
      loading: true
    });

    fetchData(lang).then(data => {
      this.setState({
        repos: data,
        loading: false
      });
    });
  }

  handleActiveLanguage(language) {
    this.setState({
      active: language
    });
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    }
    return (
      <div>
        <GithubLogo />
        <Navbar getLanguage={this.handleActiveLanguage} />
        <h2 id="title"> {this.state.active}</h2>
        <Grid repos={this.state.repos} />
      </div>
    );
  }
}
export default App;
