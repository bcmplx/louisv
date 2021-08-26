import React, {Component} from 'react';
import styled from 'styled-components';
import Typewriting from './Typewriting';
import './TextAnimation.css';


class Introduction extends Component {

	

	render() {

		const Welcome = styled.p`
			
			font-weight: 700;
			line-height: 1.1;

			@media only screen and (min-width: 1400px){
				font-size: 2.2rem;
				margin: 7% 7% 3% 7%;
			}
			@media only screen and (min-width: 1200px) and (max-width: 1399px){
				font-size: 2rem;
				margin: 7% 5% 7% 5%;
			}
			@media only screen and (min-width: 992px) and (max-width: 1199px){}
			@media only screen and (min-width: 768px) and (max-width: 991px){}
			@media only screen and (min-width: 577px) and (max-width: 767px){}
			@media only screen and (max-width: 576px){}

		`;

		return(
			<Welcome>
				Bonjour, je m&#39;appelle <strong>Louis</strong>, un développeur <span className="type-animationOne animating">Full-Stack</span>qui habite à <strong>Paris</strong>. Je suis spécialisé dans la conception d&#39;expériences créatives et d&#39;interfaces fonctionnelles en utilisant <strong>Javascript</strong>.
				<br/><em className="reactcolor">React </em>pour la partie Front et <em className="nodecolor">NodeJS </em>pour le Back.
				<br/><br/>
				{/* <span className="type-animationThree animating">Je suis aujourd&#39;hui à la recherche d&#39;un premier emploi et mettre en application mes compétences !</span> */}
				{/* <div id="typedtext" ref={element}></div> */}
				<Typewriting />
			</Welcome>
		);
	}



}

export default Introduction;