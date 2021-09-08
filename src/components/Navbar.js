import React from 'react';
import  {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink  } from 'react-router-hash-link';

function Navbar () {

	const [navbarBg, setNavbarBg] = useState(false);
	const [navbarActive, setNavbarActive] = useState(0);

	const changeBg = () => { 

		// console.log(window.scrollY);
		if(window.scrollY >= 30) {
			setNavbarBg(true);
		} else {
			setNavbarBg(false);
		}
	};

	const changeActive = () => {
		if(window.scrollY <= 800) {
			setNavbarActive(0);
		} 
		else if (window.scrollY > 800  && window.scrollY <= 1850) {
			setNavbarActive(1);
		}
		else  {
			setNavbarActive(2);
		}
	};

	window.addEventListener('scroll', changeBg); 
	window.addEventListener('scroll', changeActive); 

	// const [click, setClick] = useState(false);
	// const [button, setButton] = useState(true);

	// const handleClick = () => setClick(!click);
	// const closeMobileMenu = () => setClick(false);

	// const showButton = () => {
	// 	if (window.innerWidth <= 960) {
	// 		setButton(false);
	// 	} else {
	// 		setButton(true);
	// 	}
	// };

	// useEffect(() => {
	// 	showButton();
	// }, []);

	// window.addEventListener('resize', showButton);

	return (
		<nav className={`navbar navbar-expand-lg navbar-dark bg-dark p-3 ${navbarBg ? 'active' : ''}`}>

			<Link className="navbar-brand" to="/">Louis Villain</Link>
			
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ms-auto">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<NavHashLink className={`nav-item nav-link ${navbarActive === 0 ? 'selected' : ''}`} to="#top">Home</NavHashLink >
						</li>
						<li className="nav-item">
							<NavHashLink className={`nav-item nav-link ${navbarActive === 1 ? 'selected' : ''}`} to='#realisations'>Réalisations</NavHashLink >
						</li>
						<li className="nav-item">
							<NavHashLink className={`nav-item nav-link ${navbarActive === 2 ? 'selected' : ''}`} to="#formations">Formations</NavHashLink >
						</li>
						<li className="nav-item">
							<NavHashLink  className="nav-item nav-link" to="#contact">Contact</NavHashLink >
						</li>
					</ul>	
					
				</div>
			</div>
		</nav>
	);
}


export default Navbar;