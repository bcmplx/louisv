import React, { Component } from 'react';

class ChildTest extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
			
		};

		console.log('Je suis dans le constructor() CHILD');
	}

	componentDidMount() {
		console.log('Je suis dans le componentDidMount() CHILD');
		
	}
	

	render() {
		
		console.log('Je suis dans le render() enfant'); 

		return (
			<div>
				{console.log('MAJ DOM enfant')}
				Hola
			</div>
		);
	}
}

export default ChildTest;
