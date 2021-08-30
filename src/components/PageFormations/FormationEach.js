import React, {Component} from 'react';
import styled from 'styled-components';
import oclock from '../img/oclock.png';
import ocr from '../img/ocr.png';
import Oclock from './Oclock';
import Ocr from './Ocr';

class Formation extends Component {
	render() {



		const Format = styled.div`
			margin: auto;
			margin-bottom: 1%;
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				width: 30%;
				display: flex;
				align-self: start;
				margin: 0 1%;
				border-radius: 6px; 
			}
			@media only screen and (min-width: 768px) and (max-width: 991px){
				width: 100%;
			}

			@media only screen and (min-width: 577px) and (max-width: 767px){
				flex-direction: column;
				img {
					margin: auto;
					margin-bottom: 1vw;
				}
				p {
					margin-bottom: auto;
					line-height: 1.2;
				}
				p strong {
					
					font-size: 2.2vw;
					font-weight: 100;
				}
				ul {
					margin: 1rem 0;
					text-align: start;
				
				}
				li {
					list-style: inside;
				}
			}
			@media only screen and (max-width: 576px){
				flex-direction: column;
				img {
					margin: auto;
					margin-bottom: 1vw;
				}
				p {
					margin-bottom: auto;
					line-height: 1;
				}
				p strong {
					
					font-size: 3vw;
					font-weight: 100;
				}
				ul {
					margin: 1rem 0;
					text-align: start;
				}
				li {
					list-style: inside;
				}
			}
		`;

		const Contenu = styled.div`
			margin: 0 1%;
			padding: 2%;
			flex-direction: column;
			display: inline-block;
			background: #141414;
			border-radius: 7px; 
			/* max-height: 36vh; */
			p strong {
				line-height: 0.7;
			}
			h3 {
				line-height: 0.5;
			}
		`;

		return(
			<div className="formationEach">
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
			</div>
		);
	}		
}

export default Formation;