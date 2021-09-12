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
	min, max}) => {

	const [animBtn, setanimBtn] = useState(false);

	const changeBtn = () => { 
		if(window.scrollY > min && window.scrollY < max) {
			setanimBtn(true);
		} else {
			setanimBtn(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeBtn);
	}, []);

	

	const Btn = animBtn ? (
		<BtnWrap>
			<Animated animationIn="fadeInLeft" 
				animationOut="fadeOutLeft" 
				animationInDuration={1000} 
				animationOutDuration={2000} 
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
		</BtnWrap>) 
		: null;
		
	return (
		
		<>
			{console.log(window.scrollY)}
			<RealContainer lightBg={lightBg} id={id}>
				<RealWrapper>
					<RealRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								{description2 ? <Subtitle darkText={darkText}>{description2}</Subtitle> : null}
								{Btn}
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
