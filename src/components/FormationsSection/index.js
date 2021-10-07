import React, { useEffect, useState } from 'react';
import Image from '../../images/coding_book.svg';
import Image2 from '../../images/coding_13.svg';
import Oclock from '../../images/oclock.png';
import Ocr from '../../images/ocr.png';
import {Animated} from 'react-animated-css';
import { useMediaQuery } from 'react-responsive';

import {FormationsContainer, 
	FormationsWrapper, 
	FormationsRow, 
	Column1, 
	Column2, 
	TextWrapper, 
	TopLine, 
	Heading, 
	LilHeading,
	GENHeading,
	Subtitle, 
	ImgWrap,
	Img,
	List,
	ListElement,
	FormationsH1,
	HeaderWrap,
	HeaderText,
	HeaderImg
} from './FormationsElements';

const Formations = () => {

	const [animated, setanimated] = useState(false);
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	const animations = () => { 
		if (isMobile) {
			if(window.scrollY > 4300 && window.scrollY < 6550) {
				setanimated(true);
			} else {
				setanimated(false);
			}
		}
		else {
			if(window.scrollY > 3400 && window.scrollY < 4500) {
				setanimated(true);
			} else {
				setanimated(false);
			}
		}

	};

	const animatedCss = (data, duraIn=1000, animIn = 'fadeIn', animOut='fadeOutLeft', duraOut=1000) => {
		return (
			<Animated animationIn={animIn} 
				animationOut={animOut} 
				animationInDuration={duraIn} 
				animationOutDuration={duraOut} 
				isVisible={animated}
			>
				{data}
			</Animated>
		);
		
	};

	const formationsH1 = animatedCss('MES FORMATIONS');

	const titreOclock = animatedCss('Oclock', 2000, 'fadeInLeft');	
	const GEN = animatedCss('[Formation labellisée GEN]', 2000, 'fadeInRight');
	const year = animatedCss('2021', 1000, 'slideInDown');
	const titrePro = animatedCss('Titre Professionnel de Développeur Web et Web Mobile Niveau 5 (bac +2)', 3000, 'fadeInUp');

	const titreOcr = animatedCss('Openclassrooms', 1000, 'fadeInRight');	
	const GEN2 = animatedCss('[Formation labellisée GEN]', 1500, 'fadeInRight');
	const year2 = animatedCss('2020', 1000, 'slideInDown');


	useEffect(() => {
		window.addEventListener('scroll', animations);

	}, []);

		
	return (
		<>
			
			<FormationsContainer lightBg={true} id='formations'>
				
				<FormationsWrapper>
					<FormationsH1>{formationsH1}</FormationsH1>
					<FormationsRow imgStart={false} id="oclock">
						<Column1>
							<TextWrapper>
								<HeaderWrap>
									<HeaderText>
										<TopLine>{year}</TopLine>
										<Heading lightText={false}>{titreOclock}</Heading>
										<GENHeading>{GEN}</GENHeading>
										
										<LilHeading>{titrePro}</LilHeading>
									</HeaderText>
									<Animated animationIn='slideInDown'
										animationOut="fadeOutLeft" 
										animationInDuration={1000} 
										animationOutDuration={1000} 
										isVisible={animated}
									>
										<HeaderImg src={Oclock} alt='oclock' />
									</Animated>
									
									
								</HeaderWrap>
								
								<Subtitle darkText={true}>
									<List>
										<Animated animationIn='fadeInLeft'
											animationOut="fadeOutLeft" 
											animationInDuration={1500} 
											animationOutDuration={1000} 
											isVisible={animated}
										>
											<ListElement>Programmer en JavaScript</ListElement>
											<ListElement>Construire une API sécurisée</ListElement>
											<ListElement>Techniques de OWASP</ListElement>
											<ListElement>Manipuler des bases de données SQL</ListElement>
											<ListElement>Frontend - HTML, Sass, React</ListElement>
											<ListElement>Backend - Node.js, Express</ListElement>
											<ListElement>BDD - Postgres, Sqitch, MongoDB</ListElement>
										</Animated>
										
									</List>
								</Subtitle>
		
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Animated animationIn='fadeInRight'
									animationOut="fadeOutRight" 
									animationInDuration={1000} 
									animationOutDuration={1000} 
									isVisible={animated}
								>
									<Img src={Image} alt='book'/>
								</Animated>
								
							</ImgWrap>
						</Column2>
					</FormationsRow>


					<FormationsRow imgStart={true} id="openclassrooms">
						<Column1>
							
							<TextWrapper>
								<HeaderWrap imgStart={true}>
									<HeaderText>
										<TopLine>{year2}</TopLine>
										<Heading lightText={false}>{titreOcr}</Heading>
										<GENHeading>{GEN2}</GENHeading>
									</HeaderText>
									<Animated animationIn='fadeInDown'
										animationOut="fadeOut" 
										animationInDuration={1000} 
										animationOutDuration={1000} 
										isVisible={animated}
									>
										<HeaderImg src={Ocr} alt='openclassrooms' />
									</Animated>
									
								</HeaderWrap>
								
								<Subtitle darkText={true}>
									<List>
										<Animated animationIn='fadeInUp'
											animationOut="fadeOutRight" 
											animationInDuration={1500} 
											animationOutDuration={1000} 
											isVisible={animated}
										>
											<ListElement>HTML5 et CSS3 : de la maquette à la page web</ListElement>
											<ListElement>Respect des normes W3C</ListElement>
											<ListElement>Format responsive (Media Queries)</ListElement>
											<ListElement>Intégration : contenus textes, images, sons, vidéos dans le code
											HTML5</ListElement>
										</Animated>
										
									</List>
								</Subtitle>
		
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Animated animationIn='fadeInLeft'
									animationOut="fadeOutLeft" 
									animationInDuration={1500} 
									animationOutDuration={1000} 
									isVisible={animated}
								>
									<Img src={Image2} alt='coding'/>
								</Animated>
								
							</ImgWrap>
						</Column2>
					</FormationsRow>
				</FormationsWrapper>
			</FormationsContainer>
		</>
	);
};

export default Formations;
