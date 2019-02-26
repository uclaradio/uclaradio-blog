import React, { Component } from "react";

class Main extends Component {
  render() {
    const url = "localhost:3010";
    return (
      <div>
        <h1>Access Keystone</h1>
        <ul>
          <li>
            Navigate to: <code>{url}/keystone</code>
          </li>
          <li>Login with user credentials in "/updates"</li>
        </ul>
        <h1>Use API</h1>
        <ul>
          <li>
            Get all posts: <code>{url}/api/posts</code>
          </li>
          <li>
            Get post by ID: <code>{url}/api/posts/:id</code>
          </li>
        </ul>
      </div>
    );
  }
}

export default Main;
