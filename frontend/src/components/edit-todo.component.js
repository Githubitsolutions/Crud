import React, { Component } from "react";
import axios from "axios";
import { func } from "prop-types";

class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

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

  onChangeId(e) {
    this.setState({
      id: e.target.value
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeBody(e) {
    this.setState({
      body: e.target.value
    });
  }



  onSubmit(e) {
    e.preventDefault();

    const obj = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body
    };

    axios
      .post(
        "http://localhost:4000/posts/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h3>Update Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.id}
              onChange={this.onChangeId}
            />
          </div>
          <div className="form-group">
            <label> Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label> Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.body}
              onChange={this.onChangeBody}
            />
          </div>

            <div className="form-group">
              <input
                type="submit"
                value="Update Todo"
                className="btn btn-primary"
              />
            </div>

        </form>
      </div>
    );
  }
}

export default EditTodo;
