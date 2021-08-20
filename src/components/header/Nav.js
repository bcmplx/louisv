import React from 'react';
import styled from 'styled-components';

const Nav = () => {

	const Nav = styled.nav`
		display: flex;
		/* align-items: center; */
		width: 10%;
		color: #fefefe;
		line-height: 3;
		/* background: url("https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"); */
		margin-left: 40%;
		margin-right: 2%;
		padding-bottom: 1%;
	`;

	return (
		<Nav id="navbar" role="navigation">
			<ul>
				<div role="link" tabIndex="0">
					<li><a href="#prestations">Prestations</a></li>
				</div>
				<div role="link" tabIndex="0">
					<li><a href="#formation">Formations</a></li>
				</div>
				<div role="link" tabIndex="0">
					<li><a href="#contact">Contact</a></li>
				</div>
			</ul>
		</Nav>
	);
};

export default Nav;