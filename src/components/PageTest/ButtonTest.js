import React, {Component} from 'react';
// import styled from 'styled-components';

class ButtonTest extends Component {

	displayOrnot = () => { 
		console.log('dans display()');
		console.log(this.props.display);
		
	}

	

	render () {
		
		console.log('Je suis dans la fonction ButtonTest Component'); 

		return (
			<button onClick={this.displayOrnot} className="testbutton">Click</button>
		);
		
	}
}

export default ButtonTest;
