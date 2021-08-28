import React, {Component} from 'react';
import RealisationEach from './RealisationEach';
import styled from 'styled-components';

class Realisations extends Component {

	render() {

		const Realisations = styled.div`
			display: flex;
			flex-direction: column;
			margin: auto; 
			z-index: 3;

			.container {
				/* height: 95vh; */
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin: 3vw 0;
			}
			

			/* height: 100vh; */

			@media only screen and (min-width: 1400px){
				/* margin: 5% 0; */
			}
			@media only screen and (min-width: 1200px) and (max-width: 1399px){
				margin-bottom: 5%;
			}
			@media only screen and (min-width: 992px) and (max-width: 1199px){}
			@media only screen and (min-width: 768px) and (max-width: 991px){}
			@media only screen and (min-width: 577px) and (max-width: 767px){}
			@media only screen and (max-width: 576px){
				width: 100%;
			}
  			
		`;

		return (
			<Realisations>
				
				<div className="container">
					<div id="realisations"></div>
					<h2>Réalisations</h2>
					<RealisationEach name="Days in Paris" real="1"/>
					<RealisationEach name="Bientôt disponible" real="2"/>
				</div>
			</Realisations>
		);
	}
}


export default Realisations;