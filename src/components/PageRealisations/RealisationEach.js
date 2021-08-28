import React, {useState} from 'react';
// import {Fragment} from 'react';
import styled from 'styled-components';
import dip from '../img/dip.png';
import jamendo from '../img/jamendo.svg';
// import { GlobalStyle } from '../globalStyles';
import {Modal} from './Modal';

const RealisationEach = props => {

	const Container = styled.div`
		display: flex;
		justify-content: center ;
		align-items: center; 
		margin: auto;
		width: 70%;
		height: 100%;

		@media only screen and (min-width: 577px) and (max-width: 767px){
			width: 90%;
		}
		
	`;

	const Link = styled.a`
		border-radius: 4px;
		border: none;
		background: #141414;
		color: #fff;
		cursor: pointer;
		padding: 16px 32px;	
		width: 90%;
    	/* height: 100%; */

		p{
			font-size: 1.4vw;
		}

		img{
			width: 100%;
			height: 90%;
			margin: auto;
			margin-bottom: 1%;
		}

		@media only screen and (min-width: 1400px){

		}
		@media only screen and (min-width: 1200px) and (max-width: 1399px){

		}
		@media only screen and (min-width: 992px) and (max-width: 1199px){}
		@media only screen and (min-width: 768px) and (max-width: 991px){}
		@media only screen and (min-width: 577px) and (max-width: 767px){
			p{
			font-size: 2.2vw;
		}
		}
		@media only screen and (max-width: 576px){}
	`;
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		console.log('in openModal() from');
		// setShowModal(false);
		
		setShowModal(prev => {
			// 
			console.log(prev);
			// console.log(!prev);
			return !prev;
		});
	};

	return (
		<div className="realisationEach">
			<Container>
				{props.real == '1' ?(
					<Link onClick={openModal}>
						<img src={dip} alt={props.name} id={props.name}/>
						<p>{props.name}</p>
					</Link>
				) :(
					<Link>
						<img src={jamendo} alt={props.name} id={props.name}/>
						<p>{props.name}</p>
					</Link>
				)
				}
				
				<Modal showModal={showModal} setShowModal={setShowModal}/>
		
			</Container>
			
		</div>
	);
};


export default RealisationEach;