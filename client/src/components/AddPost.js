import React, { Component } from 'react'
import { Button, Form, Input, TextArea } from 'semantic-ui-react'

export default class AddPost extends Component {

	state = {
		posts: [],
		post: {
			title: 'example title',
			post: 'lorem ipsum post'
		}
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
		fetch(`/posts/add?title=${post.title}&post=${post.post}`)
			.then(this.getPosts)
			.catch(err => console.error(err))
	}

	render() {
		const { post } = this.state;
		return (
			<div>
				<h2>Add New Post</h2>
					<Form>
						<Form.Field control={Input} label='Title' placeholder='Title of Post' value={post.title} onChange={e => this.setState({ post: { ...post, title: e.target.value}})} />

						<Form.Field control={TextArea} label='Content' placeholder='Your thoughts...' value={post.post} onChange={e => this.setState({ post: { ...post, post: e.target.value}})} />

						<Button onClick={this.addPost}>Submit</Button>
					</Form>

				{/* <div>
					<input value={post.title} onChange={e => this.setState({ post: { ...post, title: e.target.value}})} type="text" />
					<textarea value={post.post} onChange={e => this.setState({ post: { ...post, post: e.target.value}})} />
				</div> */}

			</div>
			
		);
	}
}
