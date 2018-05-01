import React, { Component } from 'react'
import { Divider, Segment, Pagination } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';

const segmentStyle = {
	padding: '40px',
	margin: '35px',
	border: '2px solid blue'
};


// const Post = ({ id }) => (
// 	<div>
// 	  <h3>{id.params.id}</h3>
// 	</div>
// );

const Post = ( {title, post} ) => (
	<div>
		<h2>{title}</h2>
		<p>{post}</p>
	</div>
)
export default class ShowPosts extends Component {
	
	state={
		posts: [],
		post: []
	}

	componentDidMount () {
		this.getPosts();
		this.getPost();
	}
	
	getPosts = _ => {
		fetch('/posts')
			.then(response => response.json())
			.then(response => this.setState({ posts: response.data }))
			.catch(err => console.error(err));
	}
	getPost = _ => {
		fetch('/post/:id')
			.then(response => response.json())
			.then(response => this.setState({ post: response.data }))
			.catch(err => console.error(err));
	}


	renderPost = ({id, title, post }) => (
		<div key={id}>
			<Segment style={segmentStyle}>
					<h2>{ title }</h2>
					<Post />
						<Divider section />
					<div> { post } 
						<Link to={`/post/${id}`}> read more ...</Link>
						<Route path="/post/:id" component={Post} />
					</div>
			</Segment>
		</div>

	);

	render() {
		
		const { posts } = this.state;

		return (
			<div>

				<Pagination
					defaultActivePage={1}
					firstItem={null}
					lastItem={null}
					pointing
					secondary
					totalPages={3}
				/>

				{ posts.map(this.renderPost) }

				
			</div>
		);
	}
}
