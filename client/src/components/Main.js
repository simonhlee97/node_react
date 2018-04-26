import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// React-Router Routing Basic Example

const Main = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
		<li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/topics">All Posts</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
	  <Route path="/posts" component={Posts} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

class Posts extends React.Component {

	state={
		posts: []
	}
	componentDidMount () {
		this.getPosts();
	}
	
	getPosts = _ => {
		fetch('/posts')
			.then(response => response.json())
			.then(response => this.setState({ posts: response.data }))
			.catch(err => console.error(err));
	}

	addPost = _ => {
		const { post } = this.state;
		fetch(`posts/add?title=${post.title}&body=${post.post}`)
			.then(this.getPosts)
			.catch(err => console.error(err))
	}

	renderPost = ({id, title, post }) => (
		<div key={id}>
			<p>{title}: {post}</p>
		</div>
	);
	render() {
		const {posts} = this.state;
		return (
			<div>
				{posts.map(this.renderPost)}

				{/* <h2>New Post</h2>
				<form>
					<input value={post.title} onChange={e => this.setState({ post: { ...post, title: e.target.value}})} type="text" />
					<textarea value={post.body} onChange={e => this.setState({ post: { ...post, body: e.target.value}})} />
					<button onClick={this.addPost}>Submit</button>
				</form>	 */}
			</div>
		);
	}
}

const Home = () => (
	<div>
	  <h2>Home</h2>
	</div>
  );
  
const About = () => (
	<div>
		<h2>About</h2>
	</div>
);
  
  const Topics = ({ match }) => (
	<div>
	  <h2>Topics</h2>
	  <ul>
		<li>
		  <Link to={`${match.url}/rendering`}>Rendering with React</Link>
		</li>
		<li>
		  <Link to={`${match.url}/components`}>Components</Link>
		</li>
		<li>
		  <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
		</li>
	  </ul>
  
	  <Route path={`${match.url}/:topicId`} component={Topic} />
	  <Route
		exact
		path={match.url}
		render={() => <h3>Please select a topic.</h3>}
	  />
	</div>
  );
  
  const Topic = ({ match }) => (
	<div>
	  <h3>{match.params.topicId}</h3>
	</div>
  );

export default Main;
  
