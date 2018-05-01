import React, { Component } from 'react'
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import axios from 'axios'


export default class AddPost extends Component {
	
	state = {
		selectedFile: null,
		posts: [],
		post: {
			title: 'example title',
			post: 'lorem ipsum post'
		}
	}
	fileSelectedHandler = event => {
		this.setState({
			selectedFile: event.target.files[0]
		})
		console.log(event.target.files[0]);
	}
	uploadHandler = () => {
		const fd = new FormData();

		fd.append('image', this.state.selectedFile, this.state.selectedFile.name)

		axios.post('http://s3.aws.com/', fd, {
			onUploadProgress: progressEvent => {
				console.log('Upload progress: ' + Math.round(progressEvent.loaded))
			}
		})
		.then(res => {
			console.log(res);
		});
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

						<input style={{display: 'none'}} 
							label='Upload Image' type="file" onChange={this.fileSelectedHandler} ref = {fileInput => this.fileInput = fileInput} />

						<Button onClick={() => this.fileInput.click()}>Choose File</Button>
						
						<Button onClick={this.uploadHandler}>Upload</Button>
						<br />
						<br />
						<br />
						<Button onClick={this.addPost}>Submit</Button>
					</Form>

			</div>
			
		);
	}
}
