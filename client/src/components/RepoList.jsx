import React from "react";
import ReactDOM from "react-dom";
// import { Card } from "reactstrap";

const RepoList = props => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div className="repos row justify-content-center">
      {props.repos.map(
        repo => (
          // ************************************************************/
          //******************************************************** */
          // <div className="card">
          //   {/* <img src="jeans3.jpg" alt="Denim Jeans" style="width:100%" /> */}
          //   <h1>{repo.name}</h1>

          //   <p>{repo.full_name}</p>
          //   <p>
          //     <button>Open</button>
          //   </p>
          // </div>

          <div className="card col-3 m-2">
            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
            <div className="card-body">
              <h5 className="card-title">{repo.full_name}</h5>
              <p className="card-text">{repo.name}</p>
              <a href="#" className="btn btn-primary">
                Go
              </a>
            </div>
          </div>
        )
        // ************************************************************/
        //******************************************************** */
      )}
    </div>
  </div>
);

export default RepoList;
