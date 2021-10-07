import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Modal from '../Modal';
import { 
	RealContainer,
	RealWrapper,
	RealRow, 
	Column1, 
	Column2, 
	Column3, 
	TextWrapper, 
	ArrowWrapper, 
	TopLine, 
	Heading, 
	Subtitle, 
	Subtitle2, 
	BtnWrap,
	ImgWrap,
	Img} from './RealElements';

const dip = ({
	imgStart, 
	lightText, 
	darkText, 
	description2,
	img, 
	alt,
	animatedCss,
	headLine,
	animation1,
	animation2,
	animation3,
	topLine,
	description,
	Btn,
	changePage,
	lightBg,
	id,
	nextPage,
	buttonModal,
	showModal,
	setShowModal,
	WIP

}) => {

	const extraDesc = <a href="https://days-in-paris.netlify.app/" target="_blank" rel="noreferrer" >Lien vers le site (nouvel onglet)</a>;


	const AnimTitle = animatedCss(headLine, 1000, animation1, 'fadeOutLeft');
	const AnimTopLine = animatedCss(topLine, 1000, animation2, 'fadeOutLeft');
	const AnimDescription = animatedCss(description, 2000, animation3, 'fadeOutLeft');
	const AnimDescription2 = animatedCss(description2, 4000, animation3, 'fadeOutLeft');
	const AnimDescription3 = animatedCss(extraDesc, 2000, animation2, 'fadeOutLeft');

	return (
		<RealContainer lightBg={lightBg} id={id} nextPage={nextPage}>
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
							<Subtitle2 darkText={darkText}>{AnimDescription3}</Subtitle2>
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

					<Column3 onClick={changePage}>
						<ArrowWrapper>
							<AiOutlineArrowRight />
						</ArrowWrapper>
						
					</Column3>
				</RealRow>
			</RealWrapper>
			{buttonModal ? <Modal showModal={showModal} setShowModal={setShowModal} WIP={WIP}/> : null}

		</RealContainer>
	);
};

export default dip;
