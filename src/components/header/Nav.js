import React from 'react';
import styled from 'styled-components';

const Nav = () => {

	const Nav = styled.nav`
		display: flex;
		color: #fefefe;

		@media only screen and (min-width: 1400px){
		
			width: 10%;
			line-height: 3;
			margin-left: 40%;
			margin-right: 2%;
			padding-bottom: 1%;
		}
		@media only screen and (min-width: 1400px){}
		@media only screen and (min-width: 1200px) and (max-width: 1399px){}
		@media only screen and (min-width: 992px) and (max-width: 1199px){}
		@media only screen and (min-width: 768px) and (max-width: 991px){}
		@media only screen and (min-width: 577px) and (max-width: 767px){}
		@media only screen and (max-width: 576px){}
	`;

	return (
		<Nav id="navbar" role="navigation">
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