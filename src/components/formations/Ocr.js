import React from 'react';
// import oclock from '../img/oclock.png';
import styled from 'styled-components';

const Ocr = () => { 

	// console.log(props);


	const Contenu = styled.div`
		margin: auto;
		flex-direction: column;
		display: inline-block;

	`;

	return(
		<Contenu> 
			<h3>2020 - OpenclassRooms</h3>
			<p>[Formation labellisée GEN]</p>
			<p><strong>Prep&apos; web</strong></p>
			<ul> 
				<li> - </li>
				<li> <br/> </li>
				<li>HTML5 et CSS3 : de la maquette à la page web</li>
				<li>Respect des normes W3C</li>
				<li>Format responsive (Media Queries)</li>
				<li>Intégration : contenus textes, images, sons, vidéos dans le code HTML5</li>
			</ul>
		</Contenu>

	);
};


export default Ocr;