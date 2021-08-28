import React, {Component} from 'react';
import styled from 'styled-components';

class Contact extends Component {
	render() {

		const Contact = styled.div`
			// width: 50vw;
			margin-bottom: 5%;
			margin-top: 2%;

			ul {
				display: flex;
				justify-content: start;
				margin: auto;
				width: 80%;
				align-items: center;
				padding: 0 4vw;
			}
			
			i::before {
				/* padding: 15% !important; */
			}
			
			li:nth-child(2n) {
				width: 100%;

			}
			li:nth-child(2n+1) {
				/* padding: 14%; */

			}
			li a:nth-child(1n) {
				display: -webkit-box;
				justify-content: flex-end; 
				width: 100%;
				height: 100%;
			}
			li a:hover {
				/* color: red; */
			}
			.social-icons a {
				color: #fff;
				text-decoration: none;
			}

			.fa-linkedin {
			/* padding: 25 !important; */
			-webkit-transition: .5s;
			transition: .5s;
			background-color: #181818;
			}

			.fa-linkedin:hover {
			background-color: #0073a4;
			}

			.fa-github {
			/* padding: 25%; */
			-webkit-transition: .5s;
			transition: .5s;
			background-color: #181818;
			}

			.fa-github:hover {
			background-color: #5a32a3;
}
		`;
		return(
			<Contact className="footer__video--titre">

				
				<p>Louis Villain</p>
				<p><a href="mailto:louis.villainl@gmail.com?subject = Informations&body = Posez vos questions ici">louis.villainl@gmail.com</a></p>
				<p>06 27 57 05 61</p>  
				<ul className="social-icons">
					<li>Github: </li>
					<li><a href="https://github.com/bcmplx/" className="social-icon" target="_blank" rel="noreferrer"> <i className="fa fa-github icon"></i></a></li>
				</ul>
				<ul className="social-icons">
					<li>LinkedIn:</li>
					<li><a href="https://www.linkedin.com/in/louis-villain-71aa85170/" className="social-icon" target="_blank" rel="noreferrer"> <i className="fa fa-linkedin icon"></i></a></li>
				</ul>
			</Contact>  
		);
	}
}

export default Contact;