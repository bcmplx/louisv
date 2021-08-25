import React, {useRef , useEffect} from 'react';

const Typewriting = () => { 

	useEffect(() => {
		// console.log(element.current);
		var aText = new Array(
			'Aujourd’hui je suis à la recherche d’un <strong>CDI</strong>.',
			// 'There are only 10 types of people in the world:', 
			// 'Those who understand binary, and those who dont'
		);
		var iSpeed = 1; // time delay of print out
		var iIndex = 0; // start printing array at this posision
		var iArrLength = aText[0].length; // the length of the text array
		var iScrollAt = 20; // start scrolling up at this many lines
		
		var iTextPos = 0; // initialise text position
		var sContents = ''; // initialise contents variable
		var iRow; // initialise current row
		
		const typewriter = () =>  
		{
			sContents =  '';
			iRow = Math.max(0, iIndex-iScrollAt);
			
			var destination = element.current;
			// 
			while ( iRow < iIndex ) {
				sContents += aText[iRow++] + '<br />';
				
			}
			destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
			if ( iTextPos++ == iArrLength ) {
				iTextPos = 0;
				iIndex++;

				
				if ( iIndex != aText.length ) {
					iArrLength = aText[iIndex].length;
					setTimeout(typewriter(), 500);
				}
			} else {
				setTimeout(typewriter(), iSpeed);
			}
		};
		
		typewriter();

	});
	
	const element = useRef(null);
	
	// 
	
	return(
		<div  ref={element}>
			
		</div>
		
	);
};

export default Typewriting;