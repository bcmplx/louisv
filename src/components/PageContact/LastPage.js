import React, {Component} from 'react';
import styled from 'styled-components';
import Contact from './Contact';


class LastPage extends Component {

	render() {

		const LastPage = styled.div`
			display: flex;
			flex-direction: column;

			.container {
				width: 50vw;
				margin: auto;
			}
		`;

		return (
			<LastPage>
				<div className="contentpagetwo container">
					<h2 id="contact">Contact</h2>   
					<Contact />   
				</div>
			</LastPage>
		);
	}
}


export default LastPage;