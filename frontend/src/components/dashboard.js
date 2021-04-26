import React, { Component, Fragment } from "react";
import { html2Pdf } from "../helpers/helpers";

import Cov from "./Cov";

import axios from "axios";

class Dashboard extends Component {
  renderLetter = () => {
    return (
      <div>
        <div className="btn-view">
          <button
            className="btn btn-primary"
            onClick={() => html2Pdf([ "pdf3"])}
          >
            Download
          </button>
        </div>
        <Cov />


      </div>
    );
  };

  render() {
    return <Fragment>{this.renderLetter()}</Fragment>;
  }
}
export default Dashboard;
