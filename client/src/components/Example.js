import React, { Component } from 'react'

class Example extends Component {
    constructor() {
		super();
		this.state = {
			example: []
		}
	}

	componentDidMount () {
		fetch('/api/example')
			.then(res => res.json())
			.then(example => this.setState({example}, () => console.log('Fetched the data...', example)));
    }
    
    render() {
        return (
            <div>
                <h1>Example Data</h1>
                <ul>
                    {this.state.example.map(example => 
                        <li key={example.id}>
                            {example.name} -> {example.weight}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Example;
