import React, {Component} from 'react';
import Realisations from './Realisations';
import styled from 'styled-components';

class SecondPage extends Component {

	render() {

		const SecondPage = styled.div`
			display: flex;
			flex-direction: column;
			z-index: 3;
		`;

		return (
			<SecondPage className="contentpagetwo">
				<Realisations />
			</SecondPage>
		);
	}
}


export default SecondPage;