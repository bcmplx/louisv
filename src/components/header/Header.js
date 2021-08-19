import React, {Component} from 'react';
import Nav from './Nav';
import styled from 'styled-components';
// import { createStackNavigator } from '@react-navigation/stack';

class Header extends Component {



	render() {
		// const Stack = createStackNavigator();

		const Logo = styled.a `
			display: flex;
			align-items: center;
			font-size: 2.8rem;
			margin: 0% 2%;
			font-weight: 1000;
		`;
		return (
			<div className="header" id="header">
				<Logo href="#top">
					<p>Louis <br/> Villain</p>
				</Logo>
				<Nav />
			</div>
		);
	}
}

export default Header;