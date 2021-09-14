import React from 'react';
import Animations from '../Animations';

const testAnim = () => {
	return (
		<div></div>
	);
};

export default Animations(3400, 4500, 'FadeIn', 'FadeOut', 1000, 1000, testAnim);
