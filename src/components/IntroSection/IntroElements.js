import styled from 'styled-components/macro';

import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const IntroContainer = styled.div`
	background: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px; 
	height: 1000px;
	position: relative;
	z-index: 1;

	:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%), linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%);
		z-index:2;
	}

	@media screen and (max-width: 768px) {
		height: 850px;
	}

	@media screen and (max-width: 480px) {
		height: 750px;
	}
`;

export const IntroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`;

export const IntroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const IntroH1 = styled.h1`
	color: #fefefe;
	font-size: 49px;
	text-align: center;

    font-weight: 900;

	@media screen and (max-width: 768px) {
		font-size: 40px;
	}
	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
	@media screen and (max-width: 375px) {
		font-size: 28px;
	}
`;

export const IntroP = styled.p`
	margin-top: 24px;
	color: #fefefe;
	font-size: 24px;
	text-align: center;
	max-width: 600px;

    font-weight: 500;

	@media screen and (max-width: 768px) {
		font-size: 20px;
	}
	@media screen and (max-width: 480px) {
		font-size: 16px;
	}
`;

export const IntroBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
	margin-left: 8px;
	font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;