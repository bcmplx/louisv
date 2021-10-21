import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components/macro';
import eiffelImg from '../../images/eiffel.svg';
import travelImg from '../../images/travel.svg';
import carouselimg1 from '../../images/carousel/carousel1.svg';
import carouselimg2 from '../../images/carousel/carousel5.svg';
import carouselimg3 from '../../images/carousel/carousel6.svg';


const index = () => {
	return (
		<Container id="realisations">
			<H1>MES RÉALISATIONS</H1>
			<Wrapper>
				<Carousel interval='4000' showArrows={true} autoPlay={true} infiniteLoop={true} css={'@media screen and (max-width: 420px){max-width: 400px;} @media screen and (max-width: 375px){max-width: 370px;}'}>
					<div> 
						<img src={eiffelImg} />
						<a href="https://daysinparis.netlify.app/">
							
							<p className="legend">Days in Paris</p>
						</a>
					</div>
					<div>
						<img src={carouselimg1} />
						<a href="https://louisvillain-dev.com/">
							
							<p className="legend">Portfolio</p>
						</a>
					</div>
					<div>
						<img src={carouselimg2} />
						<a href="https://calendar-louisv.netlify.app/">
							
							<p className="legend">Calendar</p>
						</a>
					</div>
					<div>
						<img src={travelImg} />
						<a href="https://travel-louisvillain.netlify.app/">
							
							<p className="legend">Travel</p>
						</a>
					</div>
					<div>
						<img src={carouselimg3} />
						<a href="https://tictactrip.netlify.app/">
							
							<p className="legend">Train Booking</p>
						</a>
					</div>
					{/*<div>
						<img src={travelImg} />
						<p className="legend">Legend 6</p>
					</div> */}
				</Carousel>
			</Wrapper>

		</Container>
	);
};

export default index;

const Wrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 860px;
	width: 50%;
	max-width: 1200px;
	margin-right: auto;
	margin-left: auto;
	padding: 1rem 5rem;
	justify-content: center;

	@media screen and (max-width: 768px){
		width: 90%;
	}

	.slider-wrapper {
		border: 1px solid white;
		padding: 0.5rem;
		border-radius: 10px;
	}
`;

const Container = styled.div`
	color: #fefefe;
	background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#152436')};
	height: 1200px;
	overflow: hidden;
	padding: 2rem;

	@media screen and (max-width: 768px) {
		padding: 100px 0;
		height: 1000px;
	}
	
	@media screen and (max-width: 468px) {
		padding: 70px 0;
		height: 950px;
	}
`;

const H1 = styled.h1`
	font-size: 2.5rem;
	color: #fefefe;
	margin-bottom: 100px;
	font-weight: 600;
	text-align: center;


	@media screen and (max-width: 780px) {
		font-size: 2rem;
		margin: 60px 0 64px 0;
	}
	@media screen and (max-width: 480px) {
		font-size: 2rem;
		margin: 60px 0 64px 0;
	}
`;