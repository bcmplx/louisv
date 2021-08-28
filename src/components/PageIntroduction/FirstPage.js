import React, {Component, Fragment} from 'react';
import Stacks from './Stacks';
import styled from 'styled-components';
import Introduction from './Introduction';


class FirstPage extends Component {

	render() {

		const FirstPage = styled.div`
			display: flex;
			flex-direction: column;
			margin: 0 10%;
			font-family: "Share Tech Mono", monospace;
			position: relative;
			width: 80vw;
			height: calc(100vh + 5px);
			min-height: 700px;
			justify-content: space-between;
			

			h1 {
				background: linear-gradient(-45deg, #026e00, #23a6d5, #23d5ab);
				background-size: 400% 400%;
				animation: gradient 15s ease infinite;
				margin: 4rem 8rem;
				font-weight: 700;
				line-height: 1.1;
				border-radius: 9px; 
				font-size: 2vw;
			}

			@media only screen and (min-width: 1400px){
				h1 {
					
				}
			}
			@media only screen and (min-width: 1200px) and (max-width: 1399px){
				h1 {
				}
				
			}
			@media only screen and (min-width: 992px) and (max-width: 1199px){}
			@media only screen and (min-width: 768px) and (max-width: 991px){}
			@media only screen and (min-width: 577px) and (max-width: 767px){}
			@media only screen and (max-width: 576px){}
			
		`;

		return (
			<>
				<FirstPage>
					<h1>Fullstack Web and Application Developer <br /> Javascript - NodeJS / React</h1>
					<Introduction />
					
					<Stacks />
					<div className="arrow bounce">
						<a className="fa fa-arrow-down fa-2x" href="#realisations"></a> {/* eslint-disable-line no-alert*/}
					</div>  
				</FirstPage>
				
				
			</>
		);
	}
}


export default FirstPage;