import styled from 'styled-components/macro';
/* eslint-disable */

export const RealContainer = styled.div`
	color: #fefefe;
	background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#152436')};
	height: 1000px;
	overflow: hidden;


	@media screen and (max-width: 768px) {
		padding: 100px 0;
		height: 1000px;
	}
	
	@media screen and (max-width: 468px) {
		padding: 70px 0;
		height: 950px;
	}
`;

export const RealWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 860px;
	width: 90%;
	max-width: 1200px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;

`;

export const RealRow = styled.div`
	display: grid;
	grid-auto-columns: ${({imgStart}) => (imgStart ? `5fr 5fr 1fr;` : `1fr 4fr 3fr;`)};
	align-items: center;
	grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1 col3'` : `'col3 col1 col2'`)}; 

	@media screen and (max-width: 768px) {
		grid-auto-columns: 1fr;
		grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};  
		border: 1px solid #fefefe;
		border-radius: 8px;
		padding: 1rem 0.3rem;
		margin: 1rem 0;

	}
`;

export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`;  
export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`;  
export const Column3 = styled.div`
	margin: 15px auto;
	padding: 0 15px;
	grid-area: col3;
	height: 50%;
    display: flex;
    align-items: center;
	font-size: 40px;
	cursor: pointer;
	transition: 0.3s ease;

	&:hover {
		background: rgba(0,0,0,0.2);
		transition: 0.3s ease;
		transform: translateY(-2px); 
	}

	&:active {
		color: #01bf71;
		transition: 0.3s ease;
	}


	@media screen and (max-width: 768px){
		display: none;
	}
`;  

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
`;

export const ArrowWrapper = styled.div`
	/* max-width: 540px; 
	padding-top: 0;
	padding-bottom: 60px; */
`;

export const TopLine = styled.div`
	color: #01bf71;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({lightText}) => (lightText ? '#f7f8fa' : '#152436')};

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const Subtitle = styled.div`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: ${({darkText}) => (darkText ? '#152436' : '#fefefe')};
`;

export const Subtitle2 = styled.div`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 14px;
	line-height: 24px;
	color: #01bf71;
	transition: 0.2s ease;

	&:hover {
		color: #fefefe;
		transition: 0.2s ease;
		transform: translateY(-1px);
	}
`;

export const BtnWrap = styled.div`
	max-width: 555px;
	height: 100%;
`;

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;

export const ImgWrap = styled.div`

`;