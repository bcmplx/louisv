import React, { Fragment} from 'react';

const ArrowModal = ({setTextContent, textContent}) => {

	return(
		<>
			{textContent == 'intro' ? (
				<a className="fa fa-arrow-right fa-2x" href="" onClick={(a) => {
					a.preventDefault();
					setTextContent('dip');
				}}></a>
			)
				:
				(<a className="fa fa-arrow-left fa-2x" href="" onClick={(a) => {
					a.preventDefault();
					setTextContent('intro');
				}}></a>)
			}
			
		</>
	);
};

export default ArrowModal;