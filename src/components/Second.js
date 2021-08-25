import React, {Component} from 'react';
import Formations from './Formations';
import Realisations from './Realisations';
import styled from 'styled-components';
import Contact from './Contact';


import '../arrow.css';

class SecondPage extends Component {

	render() {

		const SecondPage = styled.div`
			display: flex;
			flex-direction: column;
		`;

		return (
			<SecondPage>
				<div className="contentpagetwo">
					<Realisations />
					<div id="formation"></div>
					<Formations />
					
					<h2 id="contact">Contact</h2>
					<div className="prestations">   
						<Contact />     
					</div>


				</div>
			</SecondPage>
		);
	}
}


export default SecondPage;