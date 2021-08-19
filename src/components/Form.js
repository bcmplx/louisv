// import { react } from "@babel/types";
import React, {Component} from 'react';
import styled from 'styled-components';

class Form extends Component {
    
	state = {
		color: '',
		colors: ['', 'red', 'blue', 'yellow', 'grey']
	}

	handleColor = event => {
		this.setState({
			color: event.target.value
		});
	}
    
    

	render() {
		let colorStyle = {
			background: this.state.color
		};

		const Form = styled.form`
			margin: auto;
			padding: 5% 0%;
			display: flex;
			flex-direction: column;
			align-content: flex-end;
			align-items: flex-start;
			width: 40%;
		`;

		
		return (
			<Form action="" method="post" className="form-example" style={colorStyle}>
				{/* <Keyboard /> */}
				<div className="form-example">
					<label htmlFor="color">Enter your favorite color: </label>
					<select value={this.state.color} onChange={this.handleColor}> 
						{
							this.state.colors.map((color, index) => {
								return <option key={index} value={color}>{color}</option>;
							})
						}
					</select>
				</div>
				<div className="form-example">
					<label htmlFor="name">Enter your name: </label>
					<input type="text" name="name" id="name" placeholder="Ada Lovelace" required />
				</div>
				<div className="form-example">
					<label htmlFor="email">Enter your email: </label>
					<input type="email" name="email" id="email" placeholder="ada@lovelace.uk" required />
				</div>
				<div className="form-example">
					<label htmlFor="email">Enter your message: </label>
					<textarea type="text" name="input" id="input" required />
				</div>
				<div className="form-example">
					<input type="submit" value="Subscribe!" disabled/>
				</div>
				
			</Form>
		);
	}
}

export default Form;