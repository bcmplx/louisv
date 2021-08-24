import React, {Component} from 'react';
import styled from 'styled-components';
import Typewriting from './Typewriting';
import './TextAnimation.css';


class Introduction extends Component {

	

	render() {

		const Welcome = styled.p`
			font-size: 2.2rem;
			font-weight: 700;
			line-height: 1.1;
			margin: 0 7%;
			height: 50vh;
		`;

		return(
			<Welcome>
				Bonjour, je m&#39;appelle <strong>Louis</strong>, un développeur <span className="type-animationOne animating">Full-Stack</span>qui habite à <strong>Paris</strong>. Je suis spécialisé dans la conception d&#39;expériences créatives et d&#39;interfaces fonctionnelles en utilisant <strong>Javascript</strong>.<span className="type-animationTwo animating"><em className="reactcolor">React </em> pour la partie Front et <em className="nodecolor">NodeJS </em> pour le Back.</span>
				<br/><br/>
				{/* <span className="type-animationThree animating">Je suis aujourd&#39;hui à la recherche d&#39;un premier emploi et mettre en application mes compétences !</span> */}
				{/* <div id="typedtext" ref={element}></div> */}
				<Typewriting />
			</Welcome>
		);
	}



}

export default Introduction;