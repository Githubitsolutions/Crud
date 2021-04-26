import React, { Component } from "react";
import Pdfget from "./Pdfget";

class Cov extends Component {
  renderParagraph = () => (
  <div>  <Pdfget />
    
    </div>
  );
  render() {
    return (
      <div className="bg-gray">
        <div id="pdf3" className="a4">
          {this.renderParagraph()}
          </div>
        </div>
      );
    }
  }
  export default Cov;
