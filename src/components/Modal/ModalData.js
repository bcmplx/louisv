import React from 'react';
import { ModalWrapper, ModalImg, ModalContent, CloseModalButton} from './ModalElements';
import eiffel from '../../images/eiffel.jpeg';
import louvre from '../../images/louvre.jpg';
import Dip from '../PageRealisations/Dip';
import DipContent from '../PageRealisations/DipContent';
import ArrowModal from './ArrowModal';

const ModalData = ({textContent, setTextContent, setShowModal}) => {

	return (
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
	);
};

export default ModalData;
