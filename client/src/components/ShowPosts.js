import React, { Component } from 'react'
import { Divider, Segment } from 'semantic-ui-react'

const segmentStyle = {
	padding: '40px',
	margin: '35px',
	border: '2px solid blue'
};
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
			<Segment style={segmentStyle}>
					<h2>{ title }</h2>
						<Divider section />
					<div>{ post }</div>
			</Segment>


			{/* <div key={id}>
				<h2 className="title">{ title }</h2>
				<div className="post">{ post }</div>
			</div> */}
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
