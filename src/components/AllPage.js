import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import FirstPage from './PageIntroduction/FirstPage';
import SecondPage from './PageRealisations/SecondPage';
import ThirdPage from './PageFormations/ThirdPage';
import LastPage from './PageContact/LastPage';
import styled from 'styled-components';

import ScrollableContainer from 'react-full-page-scroll';

function PageComponent  ({children})  {
	console.log('ici');
	return <div>{children}</div>;
}

function AllPage () {

	const BackgroundImg = styled.img`
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: auto;
		opacity: 0.04;

		@media only screen and (max-width: 576px){
			height: 100%;
		}
	`;

	return (
		<BrowserRouter>
			<BackgroundImg src="https://images.pexels.com/photos/7078272/pexels-photo-7078272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="background"/>
			<Navbar />
			<ScrollableContainer animationTime={2000}>
				<PageComponent><FirstPage /></PageComponent>
				<PageComponent><SecondPage /></PageComponent>
				<PageComponent><ThirdPage /></PageComponent> 
				<PageComponent><LastPage /></PageComponent> 
			</ScrollableContainer>
			
		</BrowserRouter>
	);
}



export default AllPage;