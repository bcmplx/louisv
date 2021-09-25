
import styled from 'styled-components';
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
	
	@media only screen and (max-width: 576px){
		z-index: 500;
	}
`;

export const ModalWrapper = styled.div`
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
	@media only screen and (min-width: 768px) and (max-width: 991px){
		width: 740px;
	}
	@media only screen and (min-width: 577px) and (max-width: 767px){}
	@media only screen and (max-width: 576px){
		width: 99%;
		height: 70vh;
	}
`;
export const ModalImg = styled.img`
    /* width: 100%; */
    height: 100%;
    border-radius: 10px 0 0 10px;
	background: #000;

	@media only screen and (max-width: 576px){
		position: fixed;
		max-width: 100%;
		height: auto;
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

	@media only screen and (min-width: 1400px){
		
	}
	@media only screen and (min-width: 1200px) and (max-width: 1399px){
		
	}
	@media only screen and (min-width: 992px) and (max-width: 1199px){}
	@media only screen and (min-width: 768px) and (max-width: 991px){
		display: block;
		overflow-y: scroll;
		padding: 3%;
		margin: auto;
		height: 100%;

		p {
			font-size: 1.5vw;
		}

		h3 {
			font-size: 3.4vw;
			margin: auto;
			width: 85%;
			margin-bottom: 4%;
		}
	}
	@media only screen and (min-width: 577px) and (max-width: 767px){}

	@media only screen and (max-width: 576px){
		padding: 6%;
		color: #fefefe;
		background: rgba(0,0, 0, 0.6);
		display: block;
		overflow-y: scroll;
		
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
	
	@media only screen and (max-width: 576px){
		right: 25px;
		color: #fefefe;
	}
`;

export const WIPContent = styled.div`

`;
