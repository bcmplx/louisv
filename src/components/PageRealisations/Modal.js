import React, {useRef, useEffect, useCallback, useState} from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import eiffel from '../img/eiffel.jpeg';
import louvre from '../img/louvre.jpg';
import Dip from './Dip';
import DipContent from './DipContent';
import ArrowModal from '../ArrowModal';

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center; 
    overflow-y: hidden;
    z-index: 5;
`;

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: flex;
    grid-template-columns: 1fr 1fr;
    /* position: fixed; */
    /* top: 10%; */
    z-index: 5;
    border-radius: 10px;
	overflow-y: hidden;
	
	a {

		text-align: left;
	}

	img {
		margin: 0;
	}
	/* i {
		content: "\f063";
	} */
`;
const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
	background: #000;
	
	
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
	width: 150%; 
	padding: 5%;
	margin: 0 1%;
	z-index: 4;

    p {
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`;


const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;




export const Modal = ({showModal, setShowModal}) => {

	console.log(showModal);
	// setShowModal(false);

	const [textContent, setTextContent] = useState('intro');

	// console.log(textContent);
 
	if(showModal) {
		document.body.style.overflow = 'hidden';
	}
	else {
		document.body.style.overflow = 'unset';
	}


	const modalRef = useRef();

	const animation = useSpring({
		config: {
			duration: 2500
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? 'translateY(0%)' : 'translateY(-100%)'
	});

	const closeModal = e => {
		console.log('in closeModal');
		// console.log(e.target);
		// console.log(modalRef.current);
		if(modalRef.current  == e.target) {
			console.log('in closeModal modalRef.current == e.target');
			// console.log(setShowModal);
			setShowModal(false);
		}
	};

	const keyPress = useCallback(e => {
		if(e.key === 'Escape' && showModal) {
			console.log('in keyPress Escape');
			setShowModal(false);
		}
	}, [setShowModal, showModal]);

	const arrowPress = useCallback(a => {
		if (showModal) {
			switch(a.key) {
			case 'ArrowRight':
				setTextContent('dip');
				break;
			case 'ArrowDown':
				setTextContent('dip');
				break;
			
			case 'ArrowLeft':
				setTextContent('intro');
				break;
			case 'ArrowUp':
				setTextContent('intro');
				break;
			}
		}
	}, [setTextContent, showModal]);

	useEffect(() => {
		document.addEventListener('keydown', keyPress);
		document.addEventListener('keydown', arrowPress);
		return () => {
			document.removeEventListener('keydown', keyPress) ;
			document.removeEventListener('keydown', arrowPress) ;
		} ;
	}, [keyPress]);




	return (
		
		<> 
			{showModal ? (
				<Background ref={modalRef} onClick={closeModal}> 
					<animated.div style={animation}>
						<ModalWrapper>
							<a href="https://days-in-paris.netlify.app/" target="_blank" rel="noreferrer">
								{textContent == 'intro' ? (
									<ModalImg src={eiffel} alt='Tour Eiffel' />
								)
									:(
										<ModalImg src={louvre} alt='Louvre' />
									)}
							</a>
							<ModalContent>
								{textContent == 'intro' ? <Dip /> : <DipContent />}
								<ArrowModal setTextContent={setTextContent} textContent={textContent} />							
							</ModalContent>
							<CloseModalButton aria-label='Close modal' onClick={() => setShowModal(false)} />
						</ModalWrapper>
					</animated.div>
				</Background>
			) 
				: null 
			} 
		</>
	);

};