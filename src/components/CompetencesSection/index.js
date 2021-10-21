import React, { useEffect, useState } from 'react';
import {Animated} from 'react-animated-css';
import {CompetencesContainer, 
	CompetencesH1,
	CompetencesH2,
	CompetencesWrapper,
	CompetencesCard,
	CompetencesIcon,
	CompetencesP } from './CompetencesElements';
import Icon1 from '../../images/coding_3.svg';
import Icon2 from '../../images/coding_4.svg';
import Icon3 from '../../images/coding_5.svg';
import Icon4 from '../../images/coding_10.svg';
import { useMediaQuery } from 'react-responsive';

const Competences = () => {

	

	const [animated, setanimated] = useState(false);
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	const animations = () => { 
		if (isMobile) {
			if(window.scrollY > 1400 && window.scrollY < 2850) {
				setanimated(true);
			} else {
				setanimated(false);
			}
		}
		else {
			if(window.scrollY > 1400 && window.scrollY < 2500) {
				setanimated(true);
			} else {
				setanimated(false);
			}
		}

	};	

	useEffect(() => {
		window.addEventListener('scroll', animations);

	}, []);

	return (
		<CompetencesContainer id="competences">
			<CompetencesH1>MES COMPÉTENCES</CompetencesH1>
			<CompetencesWrapper>
				
				<Animated animationIn='fadeInLeft'
					animationOut="fadeOutLeft" 
					animationInDuration={1000} 
					animationOutDuration={1000} 
					isVisible={animated}
				>
					<CompetencesCard>
						<CompetencesIcon src={Icon3} />
						<CompetencesH2>HTML5 / CSS3</CompetencesH2>
						<CompetencesP>LESS, SASS</CompetencesP>
					</CompetencesCard>
				</Animated>

				<Animated animationIn='fadeInDown'
					animationOut="fadeOutUp" 
					animationInDuration={1000} 
					animationOutDuration={1000} 
					isVisible={animated}
				>
					<CompetencesCard>
						<CompetencesIcon src={Icon1} />
						<CompetencesH2>JavaScript ES6</CompetencesH2>
						<CompetencesP>React, Node.js, Express.js</CompetencesP>
					</CompetencesCard>
				</Animated>
				
				<Animated animationIn='fadeInUp'
					animationOut="fadeOutDown" 
					animationInDuration={1000} 
					animationOutDuration={1000} 
					isVisible={animated}
				>
					<CompetencesCard>
						<CompetencesIcon src={Icon2} />
						<CompetencesH2>Bases de données</CompetencesH2>
						<CompetencesP>PostGreSQL, MongoDB, NoSQL</CompetencesP>
					</CompetencesCard>
				</Animated>
				
				<Animated animationIn='fadeInRight'
					animationOut="fadeOutRight" 
					animationInDuration={1000} 
					animationOutDuration={1000} 
					isVisible={animated}
				>
					<CompetencesCard>
						<CompetencesIcon src={Icon4} />
						<CompetencesH2>AWS / API / Git</CompetencesH2>
						<CompetencesP>Sqitch, OWASP etc</CompetencesP>
					</CompetencesCard>
				</Animated>
				
				
				
				
			</CompetencesWrapper>
		</CompetencesContainer>
	);
};

export default Competences;
