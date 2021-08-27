import React, {Component, Fragment} from 'react';
import Stacks from './Stacks';
import styled from 'styled-components';
import Introduction from './Introduction';


class FirstPage extends Component {

	render() {

		const FirstPage = styled.div`
			display: flex;
			flex-direction: column;
		`;

		return (
			<>
				<FirstPage>
					<div className="contentpageone">
						<h1>Fullstack Web and Application Developer <br /> Javascript - NodeJS / React</h1>
						<Introduction />
						
						<Stacks />
						<div className="arrow bounce">
							<a className="fa fa-arrow-down fa-2x" href="#realisations"></a> {/* eslint-disable-line no-alert*/}
						</div>
					</div>
				</FirstPage>
				
				
			</>
		);
	}
}


export default FirstPage;