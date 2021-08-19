import React, {useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';

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
    z-index: 2;
`;

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* position: fixed; */
    /* top: 10%; */
    z-index: 200;
    border-radius: 10px;
    overflow-y: hidden;
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
    overflow-y: hidden;

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
		if(modalRef.current  === e.target) {
			setShowModal(false);
		}
	};

	const keyPress = useCallback(e => {
		if(e.key === 'Escape' && showModal) {
			setShowModal(false);
		}
	}, [setShowModal, showModal]);

	useEffect(() => {
		document.addEventListener('keydown', keyPress);
		return () => {
			document.removeEventListener('keydown', keyPress) ;
		} ;
	}, [keyPress]);



	return (
		
		<> 
			{showModal ? (
				<Background ref={modalRef} onClick={closeModal}> 
					<animated.div style={animation}>
						<ModalWrapper>
							<ModalImg src={'https://images.pexels.com/photos/5957128/pexels-photo-5957128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt='camera' />
							<ModalContent>
								<h1>Ready ?</h1>
								<p>Hello World</p>
							</ModalContent>
							<CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
						</ModalWrapper>
					</animated.div>
				</Background>
			) 
				: null 
			} 
		</>
	);

};