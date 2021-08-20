import React, {Component, Fragment} from 'react';
import Header from './header/Header';
import Prestation from './Prestation';
// import Form from './Form';
import Stacks from './Stacks';
import Formation from './formations/Formation';
import styled from 'styled-components';
import Contact from './Contact';


// import oclock from './img/oclock.png';

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
			height: 46vh;
		`;

		const FirstPage = styled.div`
			height: 100vh
		`;

		/* const photos = {
			oclock: require('./img/oclock.png')
		}; */

		/* console.log(photos.oclock); */

		return (
			<Fragment>
				<BackgroundImg src="https://images.pexels.com/photos/7078272/pexels-photo-7078272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="background"/>
				<FirstPage>
					<Header />
					<div className="contentpageone">
						<h1>Fullstack Web and Application Developer <br /> Javascript - NodeJS / React</h1>

						<Welcome>
							Hello i&#39;m <strong>Louis</strong>. A Full-Stack Developer <strong>based in Paris</strong>. I specialise in creating interactive experiences and functional interfaces using <strong>Javascript</strong> (<em className="reactcolor">React</em> for the Front part and <em className="nodecolor">NodeJS</em> for the Back)
						</Welcome>
						<Stacks />
						<div className="arrow bounce">
							<a className="fa fa-arrow-down fa-2x" href="#prestations"></a> {/* eslint-disable-line no-alert*/}
						</div>
					</div>
				</FirstPage>
				<div className="contentpageone">
					<div id="prestations"></div>
					<h2>Prestations</h2>
					<div className="prestations">                       
						<Prestation name="presta 1" />
						<Prestation name="presta 2" />
						
					</div>
					<div id="formation"></div>
					<h2>Formations</h2>
					<Formation photos="oclock" />
					<Formation photos="ocr" />
					
					<h2 id="contact">Contact</h2>
					<div className="prestations">   
						<Contact />                    
						{/* <Form /> */}
					</div>


				</div>
				
				
			</Fragment>
		);
	}
}


export default FirstPage;