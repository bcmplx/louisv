import React, {Component} from 'react';
import styled from 'styled-components';

class Contact extends Component {
	render() {

		const Contact = styled.div`
			/* margin: 5% 0; */
			margin-bottom: 5%;
			margin-top: 2%;

			ul {
				display: flex;
				justify-content: start;
				margin: auto;
				width: 20%;
			}
			
			li:nth-child(2n) {
				width: 100%;

			}
			li a:nth-child(1n) {
				display: flex;
				justify-content: flex-end;
				width: 100%;
				height: 100%;
			}
		`;
		return(
			<Contact className="footer__video--titre">
				<p>Louis Villain</p>
				<p><a HREF="mailto:louis.villainl@gmail.com">louis.villainl@gmail.com</a></p>
				<p>06 27 57 05 61</p>  
				<ul className="social-icons">
					<li>GitHub: </li>
					<li><a href="https://github.com/bcmplx/" className="social-icon" target="_blank" rel="noreferrer"> <i className="fa fa-github"></i></a></li>
				</ul>
				<ul className="social-icons">
					<li>LinkedIn:</li>
					<li><a href="https://www.linkedin.com/in/louis-villain-71aa85170/" className="social-icon" target="_blank" rel="noreferrer"> <i className="fa fa-linkedin"></i></a></li>
				</ul>
			</Contact>  
		);
	}
}

export default Contact;