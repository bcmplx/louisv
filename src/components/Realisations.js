import React, {Component} from 'react';
import Prestation from './RealisationEach';
import styled from 'styled-components';


import '../arrow.css';

class Realisations extends Component {

	render() {

		const Realisations = styled.div`
			display: flex;
			flex-direction: column;

  			margin-bottom: 3%;
		`;

		return (
			<Realisations>
				<div id="realisations"></div>
				<h2>Réalisations</h2>
				<div className="realisations">                       
					<Prestation name="Days in Paris" real="1"/>
					<Prestation name="Bientôt disponible" real="2"/>
					
				</div>
			</Realisations>
		);
	}
}


export default Realisations;