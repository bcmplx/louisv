import React, {Component} from 'react';
import styled from 'styled-components';
import sass from './img/logos/sass.png';
import bootstrap from './img/logos/bootstrap.png';
import git from './img/logos/git.png';
// import seo from './img/logos/seo.png';
// import greenit from './img/logos/greenit.png';
import react from './img/logos/react.png';
import nodejs from './img/logos/nodejs.png';


class Stacks extends Component {

	render() {

		const Stack = styled.div`
			color: inherit;
			margin: auto;
			margin-bottom: 5%;
			width: 50%;
			/* padding: 1%; */
			border-radius: 13px; 
			/* height: 17vh; */
			background-color: rgba(255, 255, 255, 0.2);

			img {
				width: 15%;
				display: inline-block;
				margin: 0 2%; 
				/* background: black; */
			}
			img.small {
				width: 7%
			}
		`;


		return(
			
			<Stack>
				<img src={react} alt="Git logo"/>
				<img src={nodejs} alt="Git logo"/>
				<img src={sass} alt="Sass logo"/>
				<img src={bootstrap} alt="Bootstrap logo" className="small"/>
				<img src={git} alt="Git logo"/>				
				{/* <img src={greenit} alt="Greenit logo" className="small"/> */}
				{/* <img src={seo} alt="SEO logo" className="small"/> */}
			</Stack>
		);
	}
}

export default Stacks;