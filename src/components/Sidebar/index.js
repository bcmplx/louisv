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
					<SidebarLink to='home' onClick={toggle}>Home</SidebarLink>
					<SidebarLink to='profil' onClick={toggle}>Profil</SidebarLink>
					<SidebarLink to='competences' onClick={toggle}>Compétences</SidebarLink>
					<SidebarLink to='realisations' onClick={toggle}>Réalisations</SidebarLink>
					<SidebarLink to='formations' onClick={toggle}>Formations</SidebarLink>
					<SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
				</SidebarMenu>
				
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
