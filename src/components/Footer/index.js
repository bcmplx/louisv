import React from 'react';
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';

import {FooterContainer, 
	FooterWrap, 
	FooterLinksContainer, 
	FooterLinkItems, 
	FooterLinksWrapper, 
	FooterLinkTitle, 
	FooterLink,
	FooterLinkExternal,
	SocialMedia,
	SocialMediaWrap,
	// SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink
} from './FooterElements';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>A propos</FooterLinkTitle>
							<FooterLink to="home">Home</FooterLink>
							<FooterLink to="profil" offset={-30}>Qui je suis</FooterLink>
							<FooterLink to="competences">Ce que je sais faire</FooterLink>
							<FooterLink to="realisations" offset={-30}>Ce que j&#39;ai déjà fait</FooterLink>							
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Mes formations</FooterLinkTitle>
							<FooterLink to="formations" offset={-30}>Mes Formations</FooterLink>
							<FooterLink to="openclassrooms" offset={-100}>OpenclassRooms</FooterLink>
							<FooterLink to="oclock" offset={-100}>O&#39;clock</FooterLink>
							{/* <FooterLink to="realisations">Self</FooterLink>							 */}
						</FooterLinkItems>
						
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Me contacter</FooterLinkTitle>
							<FooterLink to="contactpage">Comment me contacter</FooterLink>
							<FooterLinkExternal href="https://www.linkedin.com/in/louis-villain/" target="_blank" rel="noreferrer">LinkedIn</FooterLinkExternal>
							<FooterLinkExternal href="mailto:louis.villainl@gmail.com" target="_blank" rel="noreferrer">Email</FooterLinkExternal>
							<FooterLinkExternal href="https://github.com/bcmplx/" target="_blank" rel="noreferrer">GitHub</FooterLinkExternal>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Les bonus</FooterLinkTitle>
							<FooterLink to="home">Page 404</FooterLink>
							<FooterLink to="profil">Page 403</FooterLink>
							<FooterLink to="competences">J&#39;aime les cookies</FooterLink>
							<FooterLink to="">(Ceux qu&#39;on mange)</FooterLink>							
						</FooterLinkItems>
						
					</FooterLinksWrapper>
				</FooterLinksContainer>

				<SocialMedia>
					<SocialMediaWrap>
						<WebsiteRights>Louis Villain © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="https://www.linkedin.com/in/louis-villain/" target="_blank" aria-label="LinkedIn">
								<FaLinkedin />
							</SocialIconLink>
							<SocialIconLink href="https://github.com/bcmplx/" target="_blank" aria-label="Github">
								<FaGithub />
							</SocialIconLink>
							<SocialIconLink href="mailto:louis.villainl@gmail.com" target="_blank" aria-label="LinkedIn">
								<FaGoogle />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>

			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
