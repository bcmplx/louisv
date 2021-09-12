import React, {useState} from 'react';
import './TextAnimation/TextAnimation.css';
import {IntroContainer, IntroBg, VideoBg, IntroContent, IntroH1, IntroP, IntroBtnWrapper, ArrowForward, ArrowRight} from './IntroElements';
import Video from '../../videos/intro.mp4';
import {Button} from '../ButtonElement';


const IntroSection = () => {

	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};



	return (
		<IntroContainer id="home">
			<IntroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</IntroBg>
			<IntroContent>
				<IntroH1>Bonjour, je m&#39;appelle Louis, et je suis développeur</IntroH1>
				<IntroP>
					<span className="type-animationOne animating">Je suis à la recherche d&#39;un CDI sur Paris.</span>
				</IntroP>
				{/* <IntroP>
					<span className="type-animationOne animating">Développeur Fullstack d&#39;application Web et Mobile</span>
				</IntroP> */}
				{/* <IntroH1>Fullstack Web and Application Developer <br /> Javascript - NodeJS / React</IntroH1>
				<IntroP>
					Bonjour, je m&#39;appelle Louis, un développeur <span className="type-animationOne animating">Full-Stack</span>qui habite à Paris. Je suis spécialisé dans la conception d&#39;expériences créatives et d&#39;interfaces fonctionnelles en utilisant Javascript.
					<br/>
					<br/>
					Aujourd’hui je suis à la recherche d’un CDI.
				</IntroP> */}
				<IntroBtnWrapper>
					<Button to="profil" 
						onMouseEnter={onHover} 
						onMouseLeave={onHover}
						smooth={true}
						duration={800}
					>
						Présentation {hover ? <ArrowForward /> : <ArrowRight/>}
					</Button>
				</IntroBtnWrapper>
			</IntroContent>
		</IntroContainer>
	);
};

export default IntroSection;
