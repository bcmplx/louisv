import { Link, Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components/macro';


export const FooterContainer = styled.footer`
	background: linear-gradient(#101522 60%, #00190f 100%);

	@media screen and (max-width: 768px) {
		background: #152436; 
	}
	

`;

export const FooterWrap = styled.div`
	padding: 48px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 768px) {
		padding-top: 32px;
	}
`;

export const FooterLinksWrapper = styled.div`
	display: flex;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 16px;
	text-align: left;
	width: 160px;
	box-sizing: border-box;
	color: #fefefe;

	@media screen and (max-width: 480px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;

export const FooterLinkTitle = styled.h1`
	font-size: 16px;
	margin-bottom: 16px;
	font-weight: 500;
	text-decoration: underline;
`;

export const FooterLink = styled(LinkScroll)`
	color: #fefefe;
	text-decoration: none;
	margin-bottom: 0.5rem;
	font-size: 14px;
	cursor: pointer;

	&:hover{
		color: #01bf71;
		transition: all 0.3s ease-out;
	}
`;
export const FooterLinkExternal = styled.a`
	color: #fefefe;
	text-decoration: none;
	margin-bottom: 0.5rem;
	font-size: 14px;
	cursor: pointer;

	&:hover{
		color: #01bf71;
		transition: all 0.3s ease-out;
	}
`;

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`;
export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 40px auto 0 auto;
	flex-direction: column;
	@media screen and ( max-width: 768px) {
		
	}
`;


export const SocialLogo = styled(Link)`
	color: #fefefe;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;
`;

export const WebsiteRights = styled.small`
	color: #fefefe;
	margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
	color: #fefefe;
	font-size: 24px;

	&:hover {
		color: #029056;
		transition: all 0.2s ease;
	}
`;