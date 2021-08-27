import React, {Component} from 'react';
import Nav from './Nav';
import styled from 'styled-components';
// import { createStackNavigator } from '@react-navigation/stack';

class Header extends Component {



	render() {

		const BackgroundImg = styled.img`
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: auto;
			opacity: 0.04;
		`;

		const Logo = styled.a `
			display: flex;
			align-items: center;
			.waviy:hover {
				animation: waviy 1s infinite;
			}
			.waviy span {
				position: relative;
				display: inline-block;
				/* animation: waviy 1s infinite; */

			};
			.un {

				animation: inherit;
				animation-delay: 0.1s;
			};
			.deux {
				animation: inherit;
				animation-delay: 0.2s;
			};
			.trois {
				animation: inherit;
				animation-delay: 0.3s ;
			};
			.quatre {
				animation: inherit;
				animation-delay: 0.4s ;
			};
			.cinq {
				animation: inherit;
				animation-delay: 0.5s ;
			};
			.six {
				animation: inherit;
				animation-delay: 0.6s ;
			};
			.sept {
				animation: inherit;
				animation-delay: 0.7s ;
			};
			@keyframes waviy {
				0%,
				40%,
				100% {
					transform: translateY(0);
				}
				20% {
					transform: translateY(-20px);
				}
			}
			@media only screen and (min-width: 1400px){
				font-size: 2.8rem;
				margin: 0% 2%;
				font-weight: 1000;
			}
			@media only screen and (min-width: 1200px) and (max-width: 1399px){
				font-size: 2rem;
				margin: 2% 2%;
				font-weight: 1000;
			}
			@media only screen and (min-width: 992px) and (max-width: 1199px){}
			@media only screen and (min-width: 768px) and (max-width: 991px){}
			@media only screen and (min-width: 577px) and (max-width: 767px){}
			@media only screen and (max-width: 576px){}
		`;
		return (
			<div className="header" id="header">
				<BackgroundImg src="https://images.pexels.com/photos/7078272/pexels-photo-7078272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="background"/>

				<Logo href="#top">
					<p> 
						<div className="waviy">
							<span className="un">L</span>
							<span className="deux">o</span>
							<span className="trois">u</span>
							<span className="quatre">i</span>
							<span className="cinq">s</span>
						</div>
						<div className="waviy">
							<span className="un">V</span>
							<span className="deux">i</span>
							<span className="trois">l</span>
							<span className="quatre">l</span>
							<span className="cinq">a</span>
							<span className="six">i</span>
							<span className="sept">n</span>
						</div>
					</p>
				</Logo>
				<Nav />
			</div>
		);
	}
}

export default Header;