import React, {Component} from 'react';
import styled from 'styled-components';
import oclock from '../img/oclock.png';
import ocr from '../img/ocr.png';
import Oclock from './Oclock';
import Ocr from './Ocr';

class Formation extends Component {
	render() {

		console.log(this.props.photos);
		// const photo = require(`../img/${this.props.photos}.png`);
		// console.log(photo);

		const Format = styled.div`
			width: 70%;
			margin: auto;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid #fefefe;
			padding: 4%;

			img {
				width: 30%;
				margin-bottom: 15%;
				display: inline-block;
			}
		`;

		return(
			
			<Format>
				{this.props.photos === 'oclock' ? <img src={oclock} alt="Oclock"/> : <img src={ocr} alt="OpenclassRooms"/>}
				{this.props.photos === 'oclock' ? <Oclock /> : <Ocr />}
				
			</Format>

		);
	}		
}

export default Formation;