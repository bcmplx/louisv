import React, {useState} from 'react';
import styled from 'styled-components';
import dip from './img/dip.png';
import { GlobalStyle } from '../globalStyles';
import {Modal} from './Modal';

const Prestation = props => {

	const Container = styled.div`
			display: flex;
			justify-content: center ;
			align-items: center;
			/* height: 100vh; */
	`;

	const Link = styled.a`
		min-width: 100px;
		padding: 16px 32px;
		border-radius: 4px;
		border: none;
		background: #141414;
		color: #fff;
		font-size: 24px;
		cursor: pointer;
	`;
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(prev => !prev);
	};

	return (
		<div className="prestation">
			<Container>
				<Link onClick={openModal}>
					<img src={dip} alt={props.name} id={props.name}/>

					<p>{props.name}</p>
				</Link>
				<Modal showModal={showModal} setShowModal={setShowModal}/>
				<GlobalStyle />
			</Container>
			
		</div>
	);
};


export default Prestation;