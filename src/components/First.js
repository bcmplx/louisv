import React, {Component, Fragment} from 'react';
import Header from './header/Header';
import Prestation from './Prestation';
// import Form from './Form';
import Stacks from './Stacks';
import Formation from './formations/Formation';
import styled from 'styled-components';
import Contact from './Contact';
import Introduction from './Introduction';


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

		

		const FirstPage = styled.div`
			height: 100vh
		`;

		return (
			<Fragment>
				<BackgroundImg src="https://images.pexels.com/photos/7078272/pexels-photo-7078272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="background"/>
				<FirstPage>
					<Header />
					<div className="contentpageone">
						<h1>Fullstack Web and Application Developer <br /> Javascript - NodeJS / React</h1>
						<Introduction />
						
						<Stacks />
						<div className="arrow bounce">
							<a className="fa fa-arrow-down fa-2x" href="#realisations"></a> {/* eslint-disable-line no-alert*/}
						</div>
					</div>
				</FirstPage>
				<div className="contentpageone">
					<div id="realisations"></div>
					<h2>Réalisations</h2>
					<div className="prestations">                       
						<Prestation name="Days in Paris" />
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