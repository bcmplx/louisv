import React, {Component} from 'react';
import styled from 'styled-components';
import sass from './img/logos/sass.png';
import bootstrap from './img/logos/bootstrap.png';
import git from './img/logos/Git-Logo-Black-1.webp';
import seo from './img/logos/seo.png';
import greenit from './img/logos/greenit.png';


class Stacks extends Component {

	render() {

		const Stack = styled.div`
			color: inherit;
			height: 15vh;

			img {
				width: 7%;
				display: inline-block
			}
		`;


		return(
			
			<Stack>
				{/* <img src="http://louisvillain-dev.com/img/logo/sass.png" alt="sass"/> */}
				<img src={sass} alt="Sass logo"/>
				<img src={bootstrap} alt="Bootstrap logo"/>
				<img src={git} alt="Git logo"/>
				
				<img src={greenit} alt="Greenit logo"/>
				<img src={seo} alt="SEO logo"/>
			</Stack>
		);
	}
}

export default Stacks;