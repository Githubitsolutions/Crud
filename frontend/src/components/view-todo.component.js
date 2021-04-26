import React, { Component } from "react";
import axios from "axios";
import { func } from "prop-types";

class ViewTodo extends Component {
  constructor(props) {
    super(props);

      this.state = {
        id: "",
        title: "",
        body: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/posts/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          id: response.data.id,
        title: response.data.title,
          body: response.data.body
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3>View a Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.id}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label> Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTodoResponsible}
            />
          </div>
          <div className="form-group">
            <label> Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.body}
              onChange={this.onChangeTodoPriority}
            />
          </div>



        </form>
      </div>
    );
  }
}

export default ViewTodo;
