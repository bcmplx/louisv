import React, { Component } from 'react';
import ChildTest from './ChildTest';

class Test extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
			name: 'Toto',
			step: 1
		};

		console.log(`Etape ${this.state.step} : Je suis dans le constructor()`);
	}

	componentDidMount() {
		console.log(`Etape ${this.state.step} : Je suis dans le componentDidMount()`);
		this.setState({
			name: this.state.name,
			step: this.state.step +1
		});

		console.log(`Etape ${this.state.step} : setState() a changé le component`);

	}

	componentDidUpdate(prevProps, prevState) {
		console.log(`Etape ${this.state.step} : Je suis dans le componentDidUpdate()`);
		console.log('Previous props: ', prevProps);
		
		console.log('Previous state: ',prevState);
		console.log('this.state: ', this.state);

	}
	
	componentWillUnmount() {
		console.log('Je suis dans le componentWillUnmount()');
	}
	
	
	render() {

		console.log(`Etape ${this.state.step} : Je suis dans le render()`);

		return (
			<div className="testbutton">
				{console.log(`Etape ${this.state.step} : MAJ du DOM`)}
				<p>Chargement: {this.state.step}</p>
				<p>Nom: {this.state.name }</p>

				<ChildTest/>
			</div>
		);
	}
}

export default Test;
