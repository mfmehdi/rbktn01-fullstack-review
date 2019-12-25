import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    });
  }
  searchAll() {
    this.props.onSearch();
  }
  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="input-group flex-nowrap">
          <div className="input-group-prepend">
            <span className="input-group-text" id="addon-wrapping">
              @
            </span>
          </div>
          <input
            type="text"
            placeholder="Username GitHub"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            value={this.state.terms}
            onChange={evt => this.onChange(evt)}
          />

          <button
            onClick={() => this.search()}
            type="button"
            className="btn btn-lg btn-primary"
          >
            Add Repos
          </button>

          <button
            onClick={() => this.searchAll()}
            type="button"
            className="btn btn-lg btn-primary"
          >
            All repos
          </button>
        </div>
      </div>
      // <h4>Add more repos!</h4>
      // {/* Enter a github username:{" "}
      // <input value={this.state.terms} onChange={evt => this.onChange(evt)} /> */}
      // <button onClick={() => this.search()}> Add Repos </button>
    );
  }
}

export default Search;
