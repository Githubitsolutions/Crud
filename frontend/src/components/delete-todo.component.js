import React, { Component } from "react";
import axios from "axios";

class DeleteTodo extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.match.params.id);
    this.state = {
      post_id: this.props.match.params.id
    };
  }
  componentDidMount() {
    console.log(this.state.post_id);
    axios
      .get("http://localhost:4000/posts/delete/" + this.state.post_id)
      .then(res => console.log("Todo deleted"))
      .catch(function(error) {
        console.log(error);
      });
    alert("Todo Deleted");
    this.props.history.push("/");
  }

  render() {
    return <h3>Todo Deleted</h3>;
  }
}

export default DeleteTodo;
