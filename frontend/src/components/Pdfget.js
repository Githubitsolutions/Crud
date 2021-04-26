import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Post = props => (
  <tr>
    <td >
      {props.post.id}
    </td>
    <td >
      {props.post.title}
    </td>
    <td >
      {props.post.body}
    </td>
    <td>


    </td>
  </tr>
);

class Pdfget extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/posts/")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:4000/posts/")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  todoList() {
    return this.state.posts.map(function(currentTodo, i) {
      return <Post post={currentTodo} key={i} />;
    });
  }

  onClick(e) {}

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>

            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>

      </div>
    );
  }
}

export default Pdfget;
