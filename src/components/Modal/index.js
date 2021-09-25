import React, {useRef, useEffect, useCallback, useState} from 'react';
import { useSpring, animated } from 'react-spring';
import {Background} from './ModalElements';
import ModalData from './ModalData';
import ModalWIP from './ModalWIP';
import {Animated} from 'react-animated-css';


const Modal = ({showModal, setShowModal, WIP}) => {

	
	const [textContent, setTextContent] = useState('intro');
	
	if(showModal) {
		
		document.body.style.overflow = 'hidden';
	}
	else {
		document.body.style.overflow = 'unset';
	}


	const modalRef = useRef();

	const animation = useSpring({
		config: {
			duration: 200
		},
		opacity: 1,
		transform: 'translateY(0%)',
		overflow: 'hidden'
	});

	const closeModal = e => {
		if(modalRef.current  == e.target) {
			setShowModal(false);
		}
	};

	const keyPress = useCallback(e => {
		if(e.key === 'Escape' && showModal) {
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

		WIP ? (
			<> 
				{showModal ? (
					<Background ref={modalRef} onClick={closeModal}> 
						<Animated animationIn='fadeInRight'
							animationOut="fadeOutLeft" 
							animationInDuration={500} 
							animationOutDuration={1000} 
							isVisible={true}
						>
							<animated.div style={animation}>
								<ModalWIP setShowModal={setShowModal}/>
							</animated.div>
						</Animated>
						
					</Background>
				) 
					: null 
				} 
			</>
		) : (
			<> 
				{showModal ? (
					<Background ref={modalRef} onClick={closeModal}> 
						<animated.div style={animation}>
							<ModalData textContent={textContent} setTextContent={setTextContent} setShowModal={setShowModal}/>
						</animated.div>
					</Background>
				) 
					: null 
				} 
			</>
		)
		
		
	);

};

export default Modal;