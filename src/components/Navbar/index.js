import React, {useState, useEffect} from 'react';
import {IconContext} from 'react-icons/lib';

import {FaBars} from 'react-icons/fa';

import {Nav, 
	NavbarContainer, 
	NavLogo, 
	MobileIcon, 
	NavMenu, 
	NavItem, 
	NavLinks} from './NavElements';
import { scrollSpy } from 'react-scroll';

const Navbar = ({toggle}) => {

	const [displayLogo, setdisplayLogo] = useState(false);
	

	const changeDisplay = () => { 
		if(window.scrollY >= 1300) {
			setdisplayLogo(true);
		} else {
			setdisplayLogo(false);
		}
	};
	const [navbarBg, setnavbarBg] = useState(false);

	const changeBg = () => { 
		scrollSpy.update('refresh');
		if(window.scrollY >= 200) {
			setnavbarBg(true);
		} else {
			setnavbarBg(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeBg);
	}, []); 

	const homeActive = navbarBg ? (
		<NavLinks to="home"
			smooth={true}
			duration={500}
			spy={true}
			exact='false'
			offset={-80}	
			activeClass="activeBorder"
		>Home</NavLinks>
	) : (
		<NavLinks to="home"
			smooth={true}
			duration={500}
			spy={true}
			exact='false'
			offset={-80}
			activeClass="activeBorderRed"	
		>Home</NavLinks>
	);

	useEffect(() => {
		window.addEventListener('scroll', changeDisplay); 
		window.addEventListener('scroll', changeBg);
	}, []); 

	return (
		<>  
			<IconContext.Provider value={{color: '#fefefe'}}>
				<Nav navbarBg={navbarBg} >
					<NavbarContainer>
						<NavLogo to="home" displaylogo={displayLogo}>Louis Villain</NavLogo>

						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>

						<NavMenu>
							<NavItem>
								{homeActive}
							</NavItem>
							<NavItem>
								<NavLinks to="profil"
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
									activeClass="activeBorder"
								>Profil</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="competences"
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
									activeClass="activeBorder"
								>Compétences</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="realisations"
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
									activeClass="activeBorder"
								>Réalisations</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="formations"
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
									activeClass="activeBorder"
								>Formations</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="contactpage"
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
									activeClass="activeBorder"	
								>Contact</NavLinks>
							</NavItem>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);    
};

export default Navbar;
