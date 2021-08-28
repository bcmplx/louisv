import React, {Component} from 'react';
import Formations from './Formations';
import styled from 'styled-components'; 


class ThirdPage extends Component { 

	render() {

		const ThirdPage = styled.div`
			display: flex;
			flex-direction: column;
			z-index: 3;
			justify-content: space-between;
		`;

		return (
			<ThirdPage className="contentpagetwo"> 
				<div id="formations"></div>
				<Formations />				
			</ThirdPage>
		);
	}
}


export default ThirdPage;