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
			font-size: 2.2rem;
			font-weight: 700;
			line-height: 1.1;
			margin: 0 7%;
			height: 40vh;
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

						<Welcome>
							Bonjour, je m&#39;appelle <strong>Louis</strong>. Un développeur Full-Stack qui habite à <strong>Paris</strong>. Je suis spécialisé dans la création d&#39;expériences créatives et d&#39;interfaces fonctionnelles en utilisant <strong>Javascript</strong> (<em className="reactcolor">React</em> pour la partie Front et <em className="nodecolor">NodeJS</em> pour le Back).
							<br/><br/>
							Je suis aujourd&#39;hui à la recherche d&#39;un <strong>premier emploi</strong> et mettre en application mes compétences !
						</Welcome>
						<Stacks />
						<div className="arrow bounce">
							<a className="fa fa-arrow-down fa-2x" href="#prestations"></a> {/* eslint-disable-line no-alert*/}
						</div>
					</div>
				</FirstPage>
				<div className="contentpageone">
					<div id="prestations"></div>
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