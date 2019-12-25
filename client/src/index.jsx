import React from "react";
import ReactDOM from "react-dom";

import $ from "jquery";
import Search from "./components/Search.jsx";
import RepoList from "./components/RepoList.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }
  componentDidMount() {
    this.getRepos();
  }
  // get -->/repo
  getRepos(term) {
    axios
      .get("http://localhost:1128/repos?option=" + term)
      .then(response => {
        this.setState({ repos: response.data });
      })
      .catch(err => {});
  }

  search(term) {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    axios
      .post("http://localhost:1128/repos?user=" + term, {}, config)
      .then(response => {
        // console.log("data ==>", response.data);
        this.setState({
          repos: response.data
        });
      });
    // .then(() => {
    //   this.getRepos(term);
    // });
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>

        <Search onSearch={this.search} />
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
