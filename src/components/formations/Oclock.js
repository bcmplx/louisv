import React from 'react';
// import oclock from '../img/oclock.png';
import styled from 'styled-components';

const Oclock = () => { 

	// console.log(props);


	const Contenu = styled.div`
		margin: auto;
		flex-direction: column;
		display: inline-block;

	`;

	return(
		<Contenu> 
			<h3>2021 - Oclock</h3>
			<p>[Formation labellisée GEN]</p>
			<p><strong>Formation Développeur web & fullstack JS</strong></p>
			<p><strong>Titre Professionnel de Développeur Web et Web Mobile, niveau 5 (bac+2)</strong></p>
			<ul> 
				<li> - </li>
				<li> <br/> </li>
				<li>Programmer en JavaScript</li>
				<li>Construire une API sécurisée</li>
				<li>Frontend - HTML, Sass, React</li>
				<li>Backend - Node.js, Express, MongoDB</li>
				<li>Techniques de OWASP</li>
				<li>Manipuler des bases de données SQL</li>
			</ul>
		</Contenu>

	);
};


export default Oclock;