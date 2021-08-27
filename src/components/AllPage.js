import React, {Component} from 'react';
import Header from './header/Header';
import FirstPage from './PageIntroduction/FirstPage';
import SecondPage from './PageRealisations/SecondPage';
import ThirdPage from './PageFormations/ThirdPage';
import LastPage from './PageContact/LastPage';
import styled from 'styled-components';


import '../arrow.css';

class AllPage extends Component {

	render() {

		const AllPage = styled.div`
		display: flex;
		flex-direction: column;
		`;

		return (
			<AllPage>

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