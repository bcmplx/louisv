import React from 'react';
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

const Competences = () => {
	return (
		<CompetencesContainer id="competences">
			<CompetencesH1>MES COMPÉTENCES</CompetencesH1>
			<CompetencesWrapper>
				<CompetencesCard>
					<CompetencesIcon src={Icon3} />
					<CompetencesH2>HTML5 / CSS3</CompetencesH2>
					<CompetencesP>LESS, SASS</CompetencesP>
				</CompetencesCard>
				<CompetencesCard>
					<CompetencesIcon src={Icon1} />
					<CompetencesH2>JavaScript ES6</CompetencesH2>
					<CompetencesP>React, Node.js, Express.js</CompetencesP>
				</CompetencesCard>
				<CompetencesCard>
					<CompetencesIcon src={Icon2} />
					<CompetencesH2>Bases de données</CompetencesH2>
					<CompetencesP>PostGreSQL, MongoDB, NoSQL</CompetencesP>
				</CompetencesCard>
				<CompetencesCard>
					<CompetencesIcon src={Icon4} />
					<CompetencesH2>AWS / API / Git</CompetencesH2>
					<CompetencesP>Sqitch, OWASP etc</CompetencesP>
				</CompetencesCard>
			</CompetencesWrapper>
		</CompetencesContainer>
	);
};

export default Competences;
