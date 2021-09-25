import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const Modal = styled.div`
	position: absolute;
	/* top: 0; */
	background-color: rgba(0,0,0,0.3);
	margin: auto;
	display: flex;
	justify-content: center;
	width: 100%;
    height: 100%;
`;

const ModalTest = () => {
	return ReactDom.createPortal(
		<Modal>
			test
		</Modal>,
		document.getElementById('modal')
	);
};

export default ModalTest;
