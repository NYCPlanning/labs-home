import React from 'react'
import moment from 'moment'

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: null };
  }

  componentDidMount() {
    fetch('https://api.planninglabs.nyc/posts')
      .then(response => response.json())
      .then(json => {
        const posts = json.items;
        console.log(posts)
        this.setState({ posts })
      })
  }

  getInitialState() {
    return {
      posts: null,
    }
  }

  render() {

    const renderPosts = (posts) => {
      return posts.map(post => (
        <div key={post.created} className="cell large-auto">
           <span className="post-date">{moment(post.created).format('LL')}</span>
           <h1 className="header-medium"><a href={post.url}>{post.title}</a></h1>
           <p className="post-excerpt">{post.description}</p>
           <a className="button small hollow" href={post.url}>Read more…</a>
        </div>
      ))
    }

    const posts = this.state.posts ? renderPosts(this.state.posts) : 'No Posts'

    return (
      <div className="grid-x grid-margin-x">
        {posts}
      </div>
    )
  }
}

export default BlogPosts
