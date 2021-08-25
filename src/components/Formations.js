import React, {Component} from 'react';
import Formation from './formations/Formation';
import styled from 'styled-components';


import '../arrow.css';

class Formations extends Component {

	render() {

		const Formations = styled.div`
			display: flex;
			flex-direction: column;
		`;

		return (
			<Formations>
				<h2>Formations</h2>
				<Formation photos="oclock" />
				<Formation photos="ocr" />
			</Formations>
		);
	}
}


export default Formations;