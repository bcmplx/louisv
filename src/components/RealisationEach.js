import React, {useState} from 'react';
// import {Fragment} from 'react';
import styled from 'styled-components';
import dip from './img/dip.png';
import jamendo from './img/jamendo.svg';
// import { GlobalStyle } from '../globalStyles';
import {Modal} from './Modal';

const RealisationEach = props => {

	const Container = styled.div`
		display: flex;
		justify-content: center ;
		align-items: center; 
		
		
	`;

	const Link = styled.a`
		min-width: 100px;
		padding: 16px 32px;
		border-radius: 4px;
		border: none;
		background: #141414;
		color: #fff;
		/* font-size: 24px; */
		cursor: pointer;
		

		p{
		font-size: 1.5rem;
		}
		img{
			width: 70%;
			margin: auto;
			margin-bottom: 1%;
		}
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