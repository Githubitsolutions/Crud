import React, { Component } from "react";
import axios from "axios";

class CreateTodo extends Component {
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

  onChangeId(e) {
    this.setState({
      //whatever you insert in your input can be accessed through e.target.value
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
    //preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.id}`);
    console.log(`Todo Responsible: ${this.state.title}`);
    console.log(`Todo Priority: ${this.state.body}`);


    const newPost = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body

    };

    axios
      .post("http://localhost:4000/posts/add", newPost)
      .then(res => console.log(res.data));

    this.setState({
      id: "",
      title: "",
      body: ""
    });
    alert("Todo Created");
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.id}
              onChange={this.onChangeId}
              required
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              required
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.body}
              onChange={this.onChangeBody}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateTodo;
