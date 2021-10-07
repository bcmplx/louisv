import React, {useState, useEffect } from 'react';
import { Button } from '../Services/ButtonElement';
import {Animated} from 'react-animated-css';
import {TemplateContainer, 
	TemplateWrapper, 
	TemplateRow, 
	Column1, 
	Column2, 
	TextWrapper, 
	TopLine, 
	Heading, 
	Subtitle, 
	BtnWrap,
	ImgWrap,
	Img} from './TemplateElements';
import { useMediaQuery } from 'react-responsive';
import Modal from '../Modal';
import Dip from '../RealisationsSection/dip';
import Travel from '../RealisationsSection/travel';

const Templateisations = ({
	lightBg, 
	id, 
	imgStart, 
	topLine, 
	lightText, 
	headLine, 
	darkText, 
	description, 
	description2,
	buttonLabel, 
	buttonModal,
	WIP,
	buttonTo,
	img, 
	alt,
	primary,
	dark, dark2,
	min, max,
	minMobile, maxMobile,
	animation1,
	animation2,
	animation3,
	nextPage

}) => {

	const [animatedBtn, setanimBtn] = useState(false);
	const [animated, setanimated] = useState(false);
	const [page1, setpage1] = useState(true);

	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });



	const changeDisplay = () => { 
		if (isMobile) {
			if(window.scrollY > minMobile && window.scrollY < maxMobile) {
				setanimBtn(true);
				setanimated(true);
			} else {
				setanimBtn(false);
				setanimated(false);
			}
		}
		else {
			if(window.scrollY > min && window.scrollY < max) {
				setanimBtn(true);
				setanimated(true);
			} else {
				setanimBtn(false);
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

	const [showModal, setShowModal] = useState(false);

	const openModal = () => {

		setShowModal(prev => {
			return !prev;
		});
	};

	const BtnModalSmooth = buttonModal ? 'false' : 'true';
	const BtnModalDur = buttonModal ? 100 : 700;
	
	const Btn = animatedBtn ? (		
		<Animated animationIn={animation1} 
			animationOut="fadeOutLeft" 
			animationInDuration={1500} 
			animationOutDuration={1000} 
			isVisible={true}
		>
			<Button to={buttonTo}
				smooth={BtnModalSmooth}
				duration={BtnModalDur}
				spy={true}
				exact="true"
				offset={-80}
				primary={primary ? 1 : 0} 
				dark={dark ? 1 : 0}
				dark2={dark2 ? 1 : 0} 
				onClick={openModal}
			>{buttonLabel}</Button>
		</Animated>
	) : (
		<Animated animationIn={animation1} 
			animationOut="fadeOutLeft" 
			animationInDuration={1500} 
			animationOutDuration={1000} 
			isVisible={false}
		>
			<Button to={buttonTo}
				smooth={BtnModalSmooth}
				duration={BtnModalDur}
				spy={true}
				exact="true"
				offset={-80}
				primary={primary ? 1 : 0} 
				dark={dark ? 1 : 0}
				dark2={dark2 ? 1 : 0}
			>{buttonLabel}</Button>
		</Animated>
	);

	const AnimTitle = animatedCss(headLine, 1000, animation1, 'fadeOutLeft');
	const AnimTopLine = animatedCss(topLine, 1000, animation2, 'fadeOutLeft');
	const AnimDescription = animatedCss(description, 2000, animation3, 'fadeOutLeft');
	const AnimDescription2 = animatedCss(description2, 4000, animation3, 'fadeOutLeft');

	const changePage = () => {
		setpage1(prev => {
			return !prev;
		});
	};

	const RealSection = !isMobile ? (
		page1 ? (
			<Dip animatedCss={animatedCss}
				Btn={Btn}
				headLine={headLine}
				animation1={animation1}
				topLine={topLine}
				animation2={animation2}
				description={description}
				animation3={animation3}
				img={img}
				alt={alt}
				imgStart={imgStart}
				lightText={lightText}
				changePage={changePage}
				lightBg={lightBg}
				id={id}
				nextPage={nextPage}
				buttonModal={buttonModal}
				showModal={showModal}
				setShowModal={setShowModal}
				WIP={WIP}
			/>
		) : (
			<Travel animatedCss={animatedCss}
				Btn={Btn}
				headLine={headLine}
				animation1={animation1}
				topLine={topLine}
				animation2={animation2}
				description={description}
				animation3={animation3}
				img={img}
				alt={alt}
				imgStart={imgStart}
				lightText={lightText}
				changePage={changePage}
				lightBg={lightBg}
				id={id}
				nextPage={nextPage}
				buttonModal={buttonModal}
				showModal={showModal}
				setShowModal={setShowModal}
				WIP={WIP}
			/>
		)
	) : (
		<>
			<Dip animatedCss={animatedCss}
				Btn={Btn}
				headLine={headLine}
				animation1={animation1}
				topLine={topLine}
				animation2={animation2}
				description={description}
				animation3={animation3}
				img={img}
				alt={alt}
				imgStart={imgStart}
				lightText={lightText}
				changePage={changePage}
				lightBg={lightBg}
				id={id}
				nextPage={nextPage}
				buttonModal={buttonModal}
				showModal={showModal}
				setShowModal={setShowModal}
				WIP={WIP}
			/>
			<Travel animatedCss={animatedCss}
				Btn={Btn}
				headLine={headLine}
				animation1={animation1}
				topLine={topLine}
				animation2={animation2}
				description={description}
				animation3={animation3}
				img={img}
				alt={alt}
				imgStart={imgStart}
				lightText={lightText}
				changePage={changePage}
				lightBg={lightBg}
				id={id}
				nextPage={nextPage}
				buttonModal={buttonModal}
				showModal={showModal}
				setShowModal={setShowModal}
				WIP={WIP}
			/>
		</>
	);

	useEffect(() => {
		window.addEventListener('scroll', changeDisplay);
	}, []);
		
	return (
		
		<>			
			{nextPage ? ( 
				RealSection
			) : (
				<TemplateContainer lightBg={lightBg} id={id} nextPage={nextPage}>
					<TemplateWrapper>
						<TemplateRow imgStart={imgStart}>
							<Column1>
								<TextWrapper>
									<TopLine>
										{AnimTopLine}
									</TopLine>
									<Heading lightText={lightText}>
										{AnimTitle}
									</Heading>
									<Subtitle darkText={darkText}>{AnimDescription}</Subtitle>
									{description2 ? <Subtitle darkText={darkText}>{AnimDescription2}</Subtitle> : null}
									<BtnWrap>
										{Btn}
									</BtnWrap>
								</TextWrapper>
							</Column1>
							
							<Column2>
								<ImgWrap>
									<Img src={img} alt={alt}/>
								</ImgWrap>
							</Column2>
						</TemplateRow>
					</TemplateWrapper>
					{buttonModal ? <Modal showModal={showModal} setShowModal={setShowModal} WIP={WIP}/> : null}

				</TemplateContainer>

			)}				
		</>
	);
};

export default Templateisations;
