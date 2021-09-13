import React, {useState, useEffect } from 'react';
import { Button } from '../ButtonElement';
import {Animated} from 'react-animated-css';
import {RealContainer, 
	RealWrapper, 
	RealRow, 
	Column1, 
	Column2, 
	TextWrapper, 
	TopLine, 
	Heading, 
	Subtitle, 
	BtnWrap,
	ImgWrap,
	Img} from './RealisationsElements';
import { useMediaQuery } from 'react-responsive';

const Realisations = ({
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
	buttonTo,
	img, 
	alt,
	primary,
	dark, dark2,
	min, max,
	minMobile, maxMobile,
	animation1,
	animation2,
	animation3

}) => {

	const [animatedBtn, setanimBtn] = useState(false);
	const [animatedh1, setanimatedh1] = useState(false);
	const [animatedTopLine, setanimatedTopLine] = useState(false);
	const [animatedDescription, setanimatedDescription] = useState(false);

	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


	const changeBtn = () => { 
		console.log(window.scrollY);
		if (isMobile) {
			if(window.scrollY > minMobile && window.scrollY < maxMobile) {
				setanimBtn(true);
				setanimatedh1(true);
				setanimatedTopLine(true);
				setanimatedDescription(true);
			} else {
				setanimBtn(false);
				setanimatedh1(false);
				setanimatedDescription(false);
				setanimatedTopLine(false);
			}
		}
		else {
			if(window.scrollY > min && window.scrollY < max) {
				setanimBtn(true);
				setanimatedh1(true);
				setanimatedTopLine(true);
				setanimatedDescription(true);
			} else {
				setanimBtn(false);
				setanimatedh1(false);
				setanimatedDescription(false);
				setanimatedTopLine(false);
			}
		}





		
	};

	useEffect(() => {
		window.addEventListener('scroll', changeBtn);

	}, []);

	

	const Btn = animatedBtn ? (		
		<Animated animationIn={animation1} 
			animationOut="fadeOutLeft" 
			animationInDuration={1500} 
			animationOutDuration={1000} 
			isVisible={true}
		>
			<Button to={buttonTo}
				smooth={true}
				duration={700}
				spy={true}
				exact="true"
				offset={-80}
				primary={primary ? 1 : 0} 
				dark={dark ? 1 : 0}
				dark2={dark2 ? 1 : 0}
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
				smooth={true}
				duration={700}
				spy={true}
				exact="true"
				offset={-80}
				primary={primary ? 1 : 0} 
				dark={dark ? 1 : 0}
				dark2={dark2 ? 1 : 0}
			>{buttonLabel}</Button>
		</Animated>
	);

	const AnimTitle = animatedh1 ? (
		<Animated animationIn={animation1} 
			animationOut="fadeOutLeft" 
			animationInDuration={1000} 
			animationOutDuration={1000} 
			isVisible={true}
		>
			{headLine}
		</Animated>
	) : (
		<Animated animationIn={animation1} 
			animationOut="fadeOutLeft" 
			animationInDuration={1000} 
			animationOutDuration={1000} 
			isVisible={false}
		>
			{headLine}
		</Animated>
	);
	
	const AnimTopLine = animatedTopLine ? (
		<Animated animationIn={animation2} 
			animationOut="fadeOutLeft" 
			animationInDuration={1000} 
			animationOutDuration={1000} 
			isVisible={true}
		>
			{topLine}
		</Animated>
	) : (
		<Animated animationIn={animation2} 
			animationOut="fadeOutLeft" 
			animationInDuration={1000} 
			animationOutDuration={1000} 
			isVisible={false}
		>
			{topLine}
		</Animated>
	);

	const AnimDescription = animatedDescription ? (
		
		<Animated animationIn={animation3} 
			animationOut="fadeOutLeft" 
			animationInDuration={2000} 
			animationOutDuration={1000} 
			isVisible={true}
		>
			
			{description}
		</Animated>
	) : (
		<Animated animationIn={animation3} 
			animationOut="fadeOutLeft" 
			animationInDuration={2000} 
			animationOutDuration={1000} 
			isVisible={false}
		>
			
			{description}
		</Animated>
	);
		
	const AnimDescription2 = animatedDescription ? (
		<Animated animationIn={animation3} 
			animationOut="fadeOutLeft" 
			animationInDuration={4000} 
			animationOutDuration={1000} 
			isVisible={true}
		>
			
			{description2}
		</Animated>
	) : (
		<Animated animationIn={animation3} 
			animationOut="fadeOutLeft" 
			animationInDuration={4000} 
			animationOutDuration={1000} 
			isVisible={false}
		>
			{description2}
		</Animated>
	);
		
	return (
		
		<>			
			<RealContainer lightBg={lightBg} id={id}>
				<RealWrapper>
					<RealRow imgStart={imgStart}>
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
					</RealRow>
				</RealWrapper>
			</RealContainer>
		</>
	);
};

export default Realisations;
