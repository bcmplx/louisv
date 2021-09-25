import React from 'react';
import {SidebarContainer, 
	Icon, 
	CloseIcon, 
	SidebarWrapper, 
	SidebarMenu, 
	SidebarLink} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon>
				<CloseIcon />
			</Icon>

			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='home' offset={-60} onClick={toggle}>Home</SidebarLink>
					<SidebarLink to='profil' offset={-60} onClick={toggle}>Profil</SidebarLink>
					<SidebarLink to='competences' onClick={toggle}>Compétences</SidebarLink>
					<SidebarLink to='realisations' onClick={toggle}>Réalisations</SidebarLink>
					<SidebarLink to='formations' onClick={toggle}>Formations</SidebarLink>
					<SidebarLink to='contactpage' offset={-60} onClick={toggle}>Contact</SidebarLink>
				</SidebarMenu>
				
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
