import React, {Component} from 'react';
import Formations from './Formations';
import styled from 'styled-components'; 


class ThirdPage extends Component { 

	render() {

		const ThirdPage = styled.div`
			display: flex;
			flex-direction: column;
			height: 100vh;
			justify-content: space-between;
		`;

		return (
			<ThirdPage>
				<div className="contentpagetwo">
					<div id="formations"></div>
					<Formations />
					
				</div>

				
			</ThirdPage>
		);
	}
}


export default ThirdPage;