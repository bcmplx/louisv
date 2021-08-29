import React, {Component} from 'react';
import Header from './header/Header';
import FirstPage from './PageIntroduction/FirstPage';
import SecondPage from './PageRealisations/SecondPage';
import ThirdPage from './PageFormations/ThirdPage';
import LastPage from './PageContact/LastPage';
import styled from 'styled-components';

class AllPage extends Component {

	render() {

		const AllPage = styled.div`
		display: flex;
		flex-direction: column;
		`;

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
			<AllPage>
				<BackgroundImg src="https://images.pexels.com/photos/7078272/pexels-photo-7078272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="background"/>
				<Header />
				<FirstPage />				
				<SecondPage />				
				<ThirdPage />				
				<LastPage />				
				
			</AllPage>
		);
	}
}


export default AllPage;