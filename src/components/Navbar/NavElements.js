import styled from 'styled-components/macro';
import { Link as LinkScroll } from 'react-scroll';


export const Nav = styled.nav`
	background: ${({navbarBg}) => (navbarBg ? '#152436' : 'transparent')};
	transition: 0.9s all ease-in-out;
	height: 80%;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px){
		transition: 0.8s all ease;
	}

	@media screen and (max-width: 768px) {
		background: ${({navbarBg}) => (navbarBg ? '#101522' : 'transparent')};
		transition: 0.8s all ease;

	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1200px;
`;

export const NavLogo = styled(LinkScroll)`
	color: #fefefe;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold; 
	text-decoration: none;
	visibility: ${({displaylogo}) => (displaylogo ? 'visible' : 'hidden')};
	transition: all 0.9s ease-out;


`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px){
		display: block;
		position: absolute ;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		transition: all 2s ease-out;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	
	@media screen and (max-width: 768px)  {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
	color: #fefefe;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.activeBorder {
		border-bottom: 3px solid #029056;
		transition: 0.2s all ease;
	}
	&.activeBorderRed {
		border-bottom: none;
		transition: 0.2s all ease;
	}

	&:hover {
		font-weight: 500;
		transform: scale(1.1);
		transition: 0.1s all ease-in-out;
	}
`;

export const NavBtn = styled.button``;