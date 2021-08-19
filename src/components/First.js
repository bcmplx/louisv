import React, {Component, Fragment} from 'react';
import Header from './header/Header';
import Prestation from './Prestation';
import Form from './Form';
import styled from 'styled-components';

import '../arrow.css';

class FirstPage extends Component {

	render() {

		const BackgroundImg = styled.img`
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            opacity: 0.04;
        `;

		const Welcome = styled.p`
			font-size: 3.2rem;
			font-weight: 700;
			line-height: 1.1;
			margin: 0 7%;
			height: 60vh;
		`;

		return (
			<Fragment>
				<BackgroundImg src="https://images.pexels.com/photos/7078272/pexels-photo-7078272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="background"/>
				<Header />
				<div className="contentpageone">
					<h1>Fullstack Web and Application Developer <br /> Javascript - NodeJS / React</h1>

					<Welcome>
						Hello i&#39;m <strong>Louis</strong>. A Full-Stack Developer <strong>based in Paris</strong>. I specialise in creating interactive experiences and functional interfaces using <strong>Javascript</strong> (<em className="reactcolor">React</em> for the Front part and <em className="nodecolor">NodeJS</em> for the Back)
					</Welcome>
					<div className="arrow bounce">
						<a className="fa fa-arrow-down fa-2x" href="#prestations"></a> {/* eslint-disable-line no-alert*/}
					</div>
					<div id="prestations"></div>
					<h2>Prestations</h2>
					<div className="prestations">                       
						<Prestation name="presta 1" />
						<Prestation name="presta 2" />
						<Prestation name="presta 3" />
						<Prestation name="presta 4"></Prestation> 
						
					</div>
					<div id="formation"></div>
					<h2>Formation</h2>
					<div className="prestations">                       
						<Prestation name="presta 1" />
						<Prestation name="presta 2" />
						<Prestation name="presta 3" />
						<Prestation name="presta 4" />  
						
						<div id="contact"></div>
					</div>
					
					<h2>Contact</h2>
					<div className="prestations">                       
						<Form />
					</div>


				</div>
				
				
			</Fragment>
		);
	}
}


export default FirstPage;