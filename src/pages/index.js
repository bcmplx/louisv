import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import IntroSection  from '../components/IntroSection';
import RealisationsSection from '../components/RealisationsSection';
import FormationsSection from '../components/FormationsSection';
import { homeObjOne, homeObjTwo, homeObjFour } from '../components/RealisationsSection/Data';
import CompetencesSection from '../components/CompetencesSection';
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
			
			<RealisationsSection {...homeObjOne} />
			<CompetencesSection />
			<RealisationsSection {...homeObjTwo} />
			<FormationsSection />
			<RealisationsSection {...homeObjFour} />
			<Footer />
		</>
	);
};

export default Home;
