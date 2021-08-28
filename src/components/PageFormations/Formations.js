import React, {Component} from 'react';
import Formation from './FormationEach';
import styled from 'styled-components';


class Formations extends Component {

	render() {

		const Formations = styled.div`
			display: flex;
			flex-direction: column;
			margin: auto;

			z-index: 2;

			.container {
				margin: 3vw 0;
			}

			strong::before {
				background: none;
			}
		`;

		return (
			<Formations>
				<div className="container">
					<h2>Formations</h2>
				
					<Formation photos="oclock" />
					<Formation photos="ocr" />
				</div>
			</Formations>
		);
	}
}


export default Formations;