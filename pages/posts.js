import React, { Component } from 'react';
import { getPosts } from '../actions';

export class Posts extends Component {
  static async getInitialProps() {
    const posts = await getPosts();
    return { posts };
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1>Post page</h1>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <span>
                  {post.id}: <span>{post.title}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Posts;
