import React, {useState, useEffect} from 'react';
import './TextAnimation/TextAnimation.css';
import {IntroContainer, IntroBg, VideoBg, IntroContent, IntroH1, IntroP, IntroBtnWrapper, ArrowForward, ArrowRight} from './IntroElements';
import Video from '../../videos/intro.mp4';
import {Button} from '../Services/ButtonElement';
import {Animated} from 'react-animated-css';



const IntroSection = () => {

	const [hover, setHover] = useState(false);
	const [animatedIntro, setanimatedIntro] = useState(true);

	const changeIntro = () => { 
		if(window.scrollY >= 0 && window.scrollY < 900) {
			setanimatedIntro(true);
		} else {
			setanimatedIntro(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeIntro);

	}, []);

	const onHover = () => {
		setHover(!hover);
	};

	const Intro = animatedIntro ? (		
		<Animated animationIn='fadeIn'
			animationOut="fadeOutLeft" 
			animationInDuration={3500} 
			animationOutDuration={2000} 
			isVisible={true}
			style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
		>
			<IntroH1>Bonjour, je m&#39;appelle Louis, et je suis développeur</IntroH1>
			<IntroP>
				<span className="type-animationOne animating">Je suis à la recherche de missions.</span>
			</IntroP>
		
			<IntroBtnWrapper>
				<Button to="profil" 
					onMouseEnter={onHover} 
					onMouseLeave={onHover}
					smooth={true}
					duration={800}
					offset={-80}
				>
					Présentation {hover ? <ArrowForward /> : <ArrowRight/>}
				</Button>
			</IntroBtnWrapper>
		</Animated>
	) : ' ';



	return (
		<IntroContainer id="home">
			<IntroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</IntroBg>

			<IntroContent>
				{Intro}
			</IntroContent>
		</IntroContainer>
	);
};

export default IntroSection;
