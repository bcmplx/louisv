import React, {Component, Fragment} from 'react';
import Header from './header/Header';
import Stacks from './Stacks';
import styled from 'styled-components';
import Introduction from './Introduction';


import '../arrow.css';

class FirstPage extends Component {

	render() {

		const BackgroundImg = styled.img`
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            opacity: 0.04;
        `;

		const FirstPage = styled.div`
			display: flex;
			flex-direction: column;
		`;

		return (
			<>
				<BackgroundImg src="https://images.pexels.com/photos/7078272/pexels-photo-7078272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="background"/>
				<FirstPage>
					<Header />
					<div className="contentpageone">
						<h1>Fullstack Web and Application Developer <br /> Javascript - NodeJS / React</h1>
						<Introduction />
						
						<Stacks />
						<div className="arrow bounce">
							<a className="fa fa-arrow-down fa-2x" href="#realisations"></a> {/* eslint-disable-line no-alert*/}
						</div>
					</div>
				</FirstPage>
				
				
			</>
		);
	}
}


export default FirstPage;