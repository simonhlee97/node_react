import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddPost from "./AddPost";
import About from "./About";
import ShowPosts from "./ShowPosts";
import Home from "./Home";
import tokyo from '../pics/pic3.png'


import { Menu, Segment, Container, Grid, Header, List, Divider, Image }from 'semantic-ui-react';


// React-Router Routing Basic Example

class Main extends React.Component {
	
	render () {

		return (
			<Router>
				<div>
				<Menu fixed='top' inverted>
					<Menu.Item>
						<Link to="/">Home</Link>
					</Menu.Item>

					<Menu.Item>
						<Link to="/about">About</Link>
					</Menu.Item>

					<Menu.Item>
						<Link to="/posts">Posts</Link>
					</Menu.Item>

					<Menu.Item>
						<Link to="/addpost">Add New Post</Link>
					</Menu.Item>

				</Menu>
				<br />
				<hr />
				<br />
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/post/:id" component={ShowPosts} />
					
					<Route path="/addpost" component={ AddPost } />
					
					{/* <Route path="/showposts" component={ ShowPosts } /> */}
					<Route path="/posts" component={ShowPosts} />
					
					<Route path="/bitcoin" component={BitCoin} />
					<Footer />
					
				</div>
			</Router>
		)
	}
}

const Footer = () => (
	<Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 1' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 2' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 3' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Footer Header' />
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider inverted section />
        <Image
          centered
          size='mini'
          src={tokyo}
        />
        <List horizontal inverted divided link>
          <List.Item as='a' href='#'>Site Map</List.Item>
          <List.Item as='a' href='#'>Contact Us</List.Item>
          <List.Item as='a' href='#'>Terms and Conditions</List.Item>
          <List.Item as='a' href='#'>Privacy Policy</List.Item>
        </List>
      </Container>
    </Segment>
)

const BitCoin = () => (
	<div>
	  <h1>BitCoin Component</h1>
	  <h5>Subtitle for BitCoin</h5>
	  
	</div>
);

// class Posts extends React.Component {

// 	state = {
// 		posts: []
// 	}

// 	componentDidMount () {
// 		this.getPosts();
// 	}

// 	getPosts = _ => {
// 		fetch('/posts')
// 			.then(response => response.json())
// 			.then(response => this.setState({ posts: response.data }))
// 			.catch(err => console.error(err));
// 	}

// 	renderPost = ({id, title, post }) => (
// 		<div>
// 			<Post />
// 		</div>

// 	);

// 	render() {
		
// 		const { posts } = this.state;

// 		return (
// 			<div>
// 				{ posts.map(this.renderPost) }

// 				<Pagination
// 					defaultActivePage={1}
// 					firstItem={null}
// 					lastItem={null}
// 					pointing
// 					secondary
// 					totalPages={3}
// 				/>
// 			</div>
// 		);
// 	}
// }



export default Main;
  
