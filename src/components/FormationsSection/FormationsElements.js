import styled from 'styled-components/macro';
/* eslint-disable */

export const FormationsContainer = styled.div`
	color: #fefefe;
	background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#152436')};
	height: 1100px;
	overflow: hidden;


	@media screen and (max-width: 768px) {
		padding: 100px 0;
		height: 1700px;
	}
	
	@media screen and (max-width: 468px) {
		padding: 70px 0;
		height: 1500px;
	}
`;

export const FormationsWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 1000px;
	width: 90%;
	max-width: 1200px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
	
	@media screen and (max-width: 1200px) {
		padding: 0;
	}
`;

export const FormationsH1 = styled.h1`
	font-size: 2.5rem;
	color: #152436;
	margin: 60px auto;
	font-weight: 600;

	@media screen and (max-width: 768px) {
		font-size: 2rem;
		margin: 50px auto;
	}
	@media screen and (max-width: 480px) {
		font-size: 2rem;
		margin: 50px auto;
	}
`;

export const FormationsRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)}; 

	@media screen and (max-width: 1024px) {
		border: 1px solid #151515;
		border-radius: 7px;
		margin-bottom: 14px;
	}

	@media screen and (max-width: 768px) {
		
		grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};  
		border: 1px solid #151515; 
		padding: 15px;
		margin-bottom: 20px;

	}
`;

export const Column1 = styled.div`
	/* margin-bottom: 15px; */
	/* padding: 0 15px; */
	grid-area: col1;
	display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* margin: 64px 0; */

	hr {
		color: #151515;
	}
`;  
export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`;  

export const TextWrapper = styled.div`
	max-width: 640px;
	padding: 0 0px 0 15px ;
`;
export const HeaderWrap = styled.div`
	max-width: 640px;
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
`;
export const HeaderText = styled.div`
	max-width: 640px;
	grid-area: col1;
	margin: 0 1rem;

	@media screen and (max-width: 768px) {
		padding: 15px;
	}
	
`;
export const HeaderImg = styled.img`
	border: 1px solid #151515;
	max-width: 100%;
	grid-area: col2;
	border-radius: 10px;
`;

export const TopLine = styled.div`
	color: #01bf71;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 0px;
`;

export const Heading = styled.h1`
	/* margin-bottom: 24px; */
	font-size: 28px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({lightText}) => (lightText ? '#f7f8fa' : '#152436')};

	@media screen and (max-width: 1024px) {
		font-size: 24px;
	}

	@media screen and (max-width: 768px) {
		font-size: 20px;
	}
`;

export const LilHeading = styled.h2`
	/* margin-bottom: 24px; */
	font-size: 14px;
	line-height: 0.9;
	font-weight: 600;
	color: #152436;

	@media screen and (max-width: 480px) {
		font-size: 18px;
	}
`;

export const GENHeading = styled.h2`
	/* margin-bottom: 24px; */
	font-size: 18px;
	line-height: 0.9;
	font-weight: 600;
	color: #01bf71;

	@media screen and (max-width: 480px) {
		font-size: 18px;
	}
`;

export const Subtitle = styled.div`
	max-width: 640px;
	/* margin-bottom: 35px; */
	font-size: 18px;
	line-height: 20px;
	color: ${({darkText}) => (darkText ? '#152436' : '#fefefe')};
	padding: 0 16px;
`;

export const BtnWrap = styled.div`
	max-width: 555px;
	height: 100%;
`;

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;

	@media screen and (max-width: 768px) {
		width: 80%;
		margin: auto;
	}
	@media screen and (max-width: 480px) {
		width: 70%;
	}
`;

export const List = styled.ul`
	padding: 16px;
`;

export const ListElement = styled.li`
	font-size: 18px;
	list-style: square;

	
`;

export const ImgWrap = styled.div`

	@media screen and (max-width: 768px) {
		display: flex;
	}
	@media screen and (max-width: 480px) {
		display: flex;
	}
`;