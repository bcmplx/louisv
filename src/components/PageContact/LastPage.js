import React, {Component} from 'react';
import styled from 'styled-components';
import Contact from './Contact';


class LastPage extends Component {

	render() {

		const LastPage = styled.div`
			display: flex;
			flex-direction: column;
		`;

		return (
			<LastPage>
				<div className="contentpagetwo">
					<h2 id="contact">Contact</h2>
					<div className="prestations">   
						<Contact />     
					</div>
				</div>
			</LastPage>
		);
	}
}


export default LastPage;