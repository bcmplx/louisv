
import styled from 'styled-components/macro';
import {MdClose} from 'react-icons/md';


export const Background = styled.div`
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

export const ModalWrapper = styled.div`
    width: 800px;
    height: 300px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: flex;
    grid-template-columns: 1fr 1fr;
    z-index: 5;
    border-radius: 10px;
	overflow-y: hidden;
	
	& > a {
		width: 100%;
		text-align: left;
	}

	a:hover {
		color: black;
	}

	img {
		width: 100%;
		margin: 0;
	}

	@media only screen and (max-width: 1200px){
		width: 100%;
	}
	@media only screen and (max-width: 1024px){
		width: 100%;
	}
	@media only screen and (max-width: 768px){
		max-width: 100%;
		width: 475px;
		margin: auto;
	}
	@media only screen and (max-width: 480px){
		max-width: 100%;
		width: 370px;
		margin: auto;
	}
	@media only screen and (max-width: 375px){
		max-width: 100%;
		width: 300px;
		margin: auto;
	}
`;
export const ModalImg = styled.img`
    height: 100%;
    border-radius: 10px 0 0 10px;

	@media only screen and (max-width: 768px){
		position: fixed;
		max-width: 100%;
		height: 100%;
	}
	
`;

export const ModalContent = styled.div`
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

	

@media only screen and (max-width: 768px){
		padding: 6%;
		color: #fefefe;
		display: block;
		
		h3 {
			font-size: 7.6vw;
		}

		a {
			border: 1px solid #fefefe;
			border-radius: 3px;
			padding: 1%;
			display: flex;
			justify-content: center;
			margin: 5% 0;
		}

		a:hover {
			background: #fefefe;
		}
	}
`;


export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
	z-index: 10;
	
	@media only screen and (max-width: 768px){
		right: 40px;
		top: 40px;
		color: #fefefe;
	}
`;

export const WIPContent = styled.div`
	@media only screen and (max-width: 768px){
		background: rgba(21,36,54,0.6);
		padding: 4%;
		border-radius: 6px;
	}
	
`;
