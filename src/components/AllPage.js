import React, {Component} from 'react';
import First from './First';
import Second from './Second';
import styled from 'styled-components';


import '../arrow.css';

class AllPage extends Component {

	render() {

		const AllPage = styled.div`
		display: flex;
		flex-direction: column;
		`;

		return (
			<AllPage>

				<First />				
				<Second />				
				
			</AllPage>
		);
	}
}


export default AllPage;