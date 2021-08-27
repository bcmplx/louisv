import React, {Component} from 'react';
import Realisations from './Realisations';
import styled from 'styled-components';

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
				</div>
			</SecondPage>
		);
	}
}


export default SecondPage;