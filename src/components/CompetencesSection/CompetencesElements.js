import styled from 'styled-components/macro';

export const CompetencesContainer = styled.div`
	height: 900px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #010606;
	overflow: hidden;

	@media screen and (max-width: 768px){
		height: 1550px;
	}

	@media screen and (max-width: 480px){
		height: 1550px;
	}
`;

export const CompetencesWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

export const CompetencesCard = styled.div`
	background: #fefefe;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	max-height: 340px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.2);
	transition: all 0.2s ease-in-out;
	color: #029056;

	p {
		color: black;
	}

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
		background: #152436;
		
		p {
			color: #fefefe;
		}
	}
`;

export const CompetencesIcon = styled.img`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
`;

export const CompetencesH1 = styled.h1`
	font-size: 2.5rem;
	color: #fefefe;
	margin-bottom: 100px;
	margin-top: -80px;
	font-weight: 600;

	@media screen and (max-width: 780px) {
		font-size: 2rem;
		margin: 60px 0 64px 0;
	}
	@media screen and (max-width: 480px) {
		font-size: 2rem;
		margin: 60px 0 64px 0;
	}
`;

export const CompetencesH2 = styled.h2`
	font-size: 1rem;
	margin-bottom: 10px;

`;

export const CompetencesP = styled.p`
	font-size: 1rem;
	text-align: center;
`;