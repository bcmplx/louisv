import React, { useEffect, useState } from 'react';
import {Animated} from 'react-animated-css';

const Animations = (
	scrollYMin,
	scrollYMax,
	modeIn,
	modeOut,
	duraIn,
	duraOut,
	content
) => {

	const AnimContent = () => {

		const [animated, setanimated] = useState(false);

		const animations = () => { 
			if(window.scrollY > scrollYMin && window.scrollY < scrollYMax) {
				setanimated(true);
			} else {
				setanimated(false);
			}
		};

		const animation = animated ? (
			<Animated animationIn={modeIn}
				animationOut={modeOut} 
				animationInDuration={duraIn} 
				animationOutDuration={duraOut} 
				isVisible={true}
			>
				{content}
			</Animated>
		) : (
			<Animated animationIn={modeIn}
				animationOut={modeOut} 
				animationInDuration={duraIn} 
				animationOutDuration={duraOut}  
				isVisible={false}
			>
				{content}
			</Animated>
		);


		useEffect(() => {
			window.addEventListener('scroll', animations);
			console.log(animation);
		}, []);


		return 'test' ;
		
	};	

	return AnimContent;
	
};

export default Animations;
