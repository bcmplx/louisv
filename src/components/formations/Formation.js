import React, {Component} from 'react';
import styled from 'styled-components';
import oclock from '../img/oclock.png';
import ocr from '../img/ocr.png';
import Oclock from './Oclock';
import Ocr from './Ocr';

class Formation extends Component {
	render() {

		// console.log(this.props.photos);
		// const photo = require(`../img/${this.props.photos}.png`);
		// console.log(photo);

		const Format = styled.div`
			width: 70%;
			margin: auto;
			margin-bottom: 1%;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid #fefefe;
			padding: 2%;
			border-radius: 7px; 

			img {
				width: 30%;
				display: flex;
				align-self: start;
				margin: 1%;
				border-radius: 6px; 
			}
		`;
		const Contenu = styled.div`
		margin: 1%;
		padding: 2%;
		flex-direction: column;
		display: inline-block;
		background: #141414;
		border-radius: 7px; 
		`;

		return(
			
			<Format>
				{this.props.photos === 'oclock' ? (
					<img src={oclock} alt="Oclock"/>
				) : (
					<img src={ocr} alt="OpenclassRooms"/>
				)}

				{this.props.photos === 'oclock' ? (
					<Contenu>
						<Oclock />
					</Contenu>
				) : (
					<Contenu>
						<Ocr />
					</Contenu>
				)}
				
			</Format>

		);
	}		
}

export default Formation;