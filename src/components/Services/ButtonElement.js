import styled from 'styled-components/macro';
import { Link as LinkScroll } from 'react-scroll';


export const Button = styled(LinkScroll)`
	border-radius: 50px;
	max-width: 300px;
	background: ${({primary}) => (primary ? '#029056' : '#152436')};
	white-space: nowrap;
	padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
	color: ${({dark}) => (dark ? '#010606' : '#fefefe')};
	font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;                             

	&:hover {
		transition: all 0.2s ease-in-out; 
		background: ${({primary}) => (primary ? '#101522' : '#029056')};   
		transform: translateY(-1.5px);
	}
`;