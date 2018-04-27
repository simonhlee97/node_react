import React, { Component } from 'react'

export default class ShowPosts extends Component {
	
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

	renderPost = ({id, title, post }) => (
		<div key={id}>
			<h2 className="title">{ title }</h2>
			<div className="post">{ post }</div>
			<hr/>
		</div>
	);

	render() {
		const { posts } = this.state;
		return (
			<div>
				{ posts.map(this.renderPost) }
			</div>
		);
	}
}
