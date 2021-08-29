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

			@media only screen and (min-width: 768px) and (max-width: 991px){
				
			}
			@media only screen and (min-width: 577px) and (max-width: 767px){
				.container {
					width: 70vw;
					margin: auto;
				}
			}
			@media only screen and (max-width: 576px){
				.container {
					width: 100%;
					margin: auto;
				}
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