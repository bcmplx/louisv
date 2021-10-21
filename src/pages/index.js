import React, {useState} from 'react';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import TemplateSections from '../components/TemplateSections';
import { profil, contact } from '../components/SectionsData/Data';
// import { profil, realisationsDIP, contact } from '../components/SectionsData/Data';

import IntroSection  from '../components/IntroSection';
import FormationsSection from '../components/FormationsSection';
import CompetencesSection from '../components/CompetencesSection';
import RealisationsSection from '../components/RealisationsSection';
import Footer from '../components/Footer';

const Home = () => {

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			
			<Sidebar isOpen={isOpen} toggle={toggle}/>
			<Navbar toggle={toggle}/>
			<IntroSection />
			
			<TemplateSections {...profil} />
			<CompetencesSection/>
			{/* <TemplateSections {...realisationsDIP} /> */}
			<RealisationsSection />
			<FormationsSection />
			<TemplateSections {...contact} />
			<Footer />
		</>
	);
};

export default Home;
