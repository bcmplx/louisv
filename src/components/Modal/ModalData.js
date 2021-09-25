import React from 'react';
import { ModalWrapper, ModalContent, CloseModalButton} from './ModalElements';
import ArrowModal from './ArrowModal';

const ModalData = ({textContent, setTextContent, setShowModal}) => {

	return (
		<ModalWrapper>
			<a href="https://days-in-paris.netlify.app/" target="_blank" rel="noreferrer">
				
			</a>
			<ModalContent>
				<ArrowModal setTextContent={setTextContent} textContent={textContent} />							
			</ModalContent>
			<CloseModalButton aria-label='Close modal' onClick={() => setShowModal(false)} />
		</ModalWrapper>
	);
};

export default ModalData;
