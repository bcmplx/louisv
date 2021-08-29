import React from 'react';
import styled from 'styled-components';

const Nav = () => {

	const Nav = styled.nav`
		display: flex;
		color: #fefefe;
		/* width: 10%; */
		line-height: 2; 
		margin-right: 1em;

		/* a {
			line-height: 2;
		} */

		ul {
			list-style-type: none;
			
			display: flex;
			justify-content: space-around;
			align-items: center;
			font-family: "Share Tech Mono", monospace;
			flex-direction: column;
		}
		ul div {
			height: 70%;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			cursor: pointer;
			text-decoration: none;
		}
		 ul div::before {
			position: absolute;
			content: "";
			top: 0;
			bottom: -0.01rem;
			left: 0;
			right: 0;
			z-index: 0;
			border-bottom: 3px solid #fefefe;
			transform: scaleX(0);
			transition: transform 0.2s ease-out;
			pointer-events: none;
		}
		ul div:hover {
			cursor: pointer;
		}
		 ul div:hover::before {
			transform: scaleX(1);
		}
		

		@media only screen and (min-width: 1400px){
			ul {
				font-size: 1.4vw;
			}
			
		}
		@media only screen and (min-width: 1200px) and (max-width: 1399px){
			ul {
				font-size: 1.5vw;
			}
		}
		@media only screen and (min-width: 992px) and (max-width: 1199px){
			ul {
				font-size: 1.7vw;
			}
		}
		@media only screen and (min-width: 768px) and (max-width: 991px){
			margin: 0 1%;
			ul {
				font-size: 2.2vw;
			}
		}
		@media only screen and (min-width: 577px) and (max-width: 767px){
			ul {
				font-size: 2.4vw;
			}
		}
		@media only screen and (max-width: 576px){
			border-bottom: 2px solid #fefefe;
			top: 0;
			margin: auto;
			width: 100%;
			background: #181818;
			z-index: 400;
			ul {
				flex-direction: row;
				width: 100%;
				z-index: 400;
			}
		}
	`;

	return (
		<Nav role="navigation">
			<ul>
				<div role="link" tabIndex="0">
					<li><a href="#realisations">Réalisations</a></li>
				</div>
				<div role="link" tabIndex="0">
					<li><a href="#formations">Formations</a></li>
				</div>
				<div role="link" tabIndex="0">
					<li><a href="#contact">Contact</a></li>
				</div>
			</ul>
		</Nav>
	);
};

export default Nav;