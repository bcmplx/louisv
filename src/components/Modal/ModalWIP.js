import React from 'react';
import { ModalWrapper, ModalImg, ModalContent, CloseModalButton, WIPContent} from './ModalElements';
import error from '../../images/coding_error.svg';

const ModalData = ({setShowModal}) => {

	const style = {
		width: '700px',
		height: '300px'
	};

	return (
		<ModalWrapper style={style}>
			<a href="https://days-in-paris.netlify.app/" target="_blank" rel="noreferrer">
				<ModalImg src={error} alt='error' style={{background: '#152436'}}/>
			</a>
			<ModalContent>
				<WIPContent>
					<h2>Work in Progress</h2>
					<p>Le site est encore en construction ...</p>
					<p>Je dois finir cette partie !</p>
				</WIPContent>							
			</ModalContent>
			<CloseModalButton aria-label='Close modal' onClick={() => setShowModal(false)} />
		</ModalWrapper>
	);
};

export default ModalData;
