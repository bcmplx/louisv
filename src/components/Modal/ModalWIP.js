import React from 'react';
import { ModalWrapper, ModalImg, ModalContent, CloseModalButton, WIPContent} from './ModalElements';
import error from '../../images/coding_error.svg';

const ModalData = ({setShowModal}) => {

	return (
		<ModalWrapper >
			<ModalImg src={error} alt='error'/>
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
