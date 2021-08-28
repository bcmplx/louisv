import React, {Component} from 'react';
import Nav from './Nav';
import styled from 'styled-components';
// import { createStackNavigator } from '@react-navigation/stack';

class Header extends Component {



	render() {
		const Header = styled.header`
			display: flex;
			justify-content: space-between;
			position: fixed;
			width: 100%;
			/* border: 1px solid transparent; */
			border-radius: 1rem;
			margin: 3rem 0rem 0rem 0rem;
			height: 7.5rem;
			box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.1);
			z-index: 1;

			@media only screen and (min-width: 577px) and (max-width: 767px){
				margin: 2rem 0rem 0rem 0rem;
			}
			@media only screen and (max-width: 576px){
				margin: 0vw;
				height: 3em;
				z-index: 10;
			}
		`;		

		const Logo = styled.a `
			display: flex;
			align-items: center;
			font-size: 2.5vw;
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
				/* font-size: 2.8rem; */
				margin: 0% 2%;
				font-weight: 1000;
			}
			@media only screen and (min-width: 1200px) and (max-width: 1399px){
				/* font-size: 2rem; */
				margin: 2% 2%;
				font-weight: 1000;
				font-size: 2.9vw;
			}
			@media only screen and (min-width: 992px) and (max-width: 1199px){
				margin: 2% 2%;
				font-weight: 1000;
				font-size: 3.2vw;
			}
			@media only screen and (min-width: 768px) and (max-width: 991px){
				margin: 2% 2%;
				font-weight: 1000;
				font-size: 3.5vw;
			}
			@media only screen and (min-width: 577px) and (max-width: 767px){
				margin: 2% 2%;
				font-weight: 1000;
				font-size: 3.7vw;
			}
			@media only screen and (max-width: 576px){
				display: none;
				margin: 0vw;
			}
		`;
		return (
			<Header>
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
			</Header>
		);
	}
}

export default Header;