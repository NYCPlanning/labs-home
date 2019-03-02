import React from 'react';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import fetch from 'node-fetch';

class BlogPosts extends React.Component {
  constructor (props) {
    super(props);
    this.state = { posts: null };
  }

  componentDidMount () {
    fetch('https://home-api.planninglabs.nyc/posts')
      .then(response => response.json())
      .then((json) => {
        const posts = json.items;
        this.setState({ posts });
      });
  }

  render () {
    const renderPosts = posts => posts.map(post => (
      <div key={post.created} className="cell large-auto">
        <span className="post-date">{moment(post.created).format('LL')}</span>
        <h1 className="header-medium">
          <a href={post.url}>{post.title}</a>
        </h1>
        <p>
          <a href={post.url}>
            <img src={post.image} alt="blog post" />
          </a>
        </p>
        <p className="post-excerpt">{post.description}</p>
        <a
          className="button small "
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
        >
            Read more
          {' '}
          <FontAwesome name="external-link" />
        </a>
      </div>
    ));

    const { posts } = this.state;

    const renderedPosts = posts ? renderPosts(posts) : 'No Posts';

    return <div className="grid-x grid-margin-x">{renderedPosts}</div>;
  }
}

export default BlogPosts;
