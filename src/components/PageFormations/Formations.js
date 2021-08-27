import React, {Component} from 'react';
import Formation from './FormationEach';
import styled from 'styled-components';


class Formations extends Component {

	render() {

		const Formations = styled.div`
			display: flex;
			flex-direction: column;
			height: 100vh;

			.container {
				height: 95vh;
			}
		`;

		return (
			<Formations>
				<div className="container">
					<h2>Formations</h2>
				
					<Formation photos="oclock" />
					<Formation photos="ocr" />
				</div>
				<div className="arrow bounce">
					<a className="fa fa-arrow-down fa-2x" href="#contact"></a> {/* eslint-disable-line no-alert*/}
				</div>
			</Formations>
		);
	}
}


export default Formations;