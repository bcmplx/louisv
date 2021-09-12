import React from 'react';
import Image from '../../images/coding_book.svg';
import Image2 from '../../images/coding_13.svg';
import Oclock from '../../images/oclock.png';
import Ocr from '../../images/ocr.png';
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
		
	return (
		<>
			<FormationsContainer lightBg={true} id='formations'>
				
				<FormationsWrapper>
					<FormationsH1>MES FORMATIONS</FormationsH1>
					<FormationsRow imgStart={false}>
						<Column1>
							<TextWrapper>
								<HeaderWrap>
									<HeaderText>
										<TopLine>2021</TopLine>
										<Heading lightText={false}>Oclock</Heading>
										<GENHeading>[Formation labellisée GEN]</GENHeading>
										<LilHeading>Titre Professionnel de Développeur Web et Web Mobile Niveau 5 (bac +2)</LilHeading>
									</HeaderText>
									<HeaderImg src={Oclock} alt='oclock' />
									
								</HeaderWrap>
								
								<Subtitle darkText={true}>
									<List>
										<ListElement>Programmer en JavaScript</ListElement>
										<ListElement>Construire une API sécurisée</ListElement>
										<ListElement>Techniques de OWASP</ListElement>
										<ListElement>Manipuler des bases de données SQL</ListElement>
										<ListElement>Frontend - HTML, Sass, React</ListElement>
										<ListElement>Backend - Node.js, Express</ListElement>
										<ListElement>BDD - Postgres, Sqitch, MongoDB</ListElement>
									</List>
								</Subtitle>
		
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={Image} alt='book'/>
							</ImgWrap>
						</Column2>
					</FormationsRow>
					<FormationsRow imgStart={true}>
						<Column1>
							
							<TextWrapper>
								<HeaderWrap imgStart={true}>
									<HeaderText>
										<TopLine>2020</TopLine>
										<Heading lightText={false}>OpenclassRooms</Heading>
										<GENHeading>[Formation labellisée GEN]</GENHeading>
									</HeaderText>
									<HeaderImg src={Ocr} alt='openclassrooms' />
								</HeaderWrap>
								
								<Subtitle darkText={true}>
									<List>
										<ListElement>HTML5 et CSS3 : de la maquette à la page web</ListElement>
										<ListElement>Respect des normes W3C</ListElement>
										<ListElement>Format responsive (Media Queries)</ListElement>
										<ListElement>Intégration : contenus textes, images, sons, vidéos dans le code
										HTML5</ListElement>
									</List>
								</Subtitle>
		
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={Image2} alt='coding'/>
							</ImgWrap>
						</Column2>
					</FormationsRow>
				</FormationsWrapper>
			</FormationsContainer>
		</>
	);
};

export default Formations;
