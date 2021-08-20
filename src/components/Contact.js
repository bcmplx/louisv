import React, {Component} from 'react';

class Contact extends Component {
	render() {
		return(
			<div className="footer__video--titre">
				<h3>Contact</h3>
				<p>Louis Villain</p>
				<p><a HREF="mailto:louis.villainl@gmail.com">louis.villainl@gmail.com</a></p>
				<p>06 27 57 05 61</p>  
				<ul className="social-icons">
					<li><a href="https://www.facebook.com/LGTProductions/" className="social-icon" target="_blank" rel="noreferrer"> <i className="fa fa-facebook"></i></a></li>
					<li><a href="https://www.youtube.com/channel/UC_fQgXy-p_vjjEbuv1ggBEQ" className="social-icon" target="_blank" rel="noreferrer"> <i className="fa fa-youtube"></i></a></li>
					<li><a href="https://www.linkedin.com/in/louis-villain-71aa85170/" className="social-icon" target="_blank" rel="noreferrer"> <i className="fa fa-linkedin"></i></a></li>
					<li><a href="https://github.com/bcmplx/" className="social-icon" target="_blank" rel="noreferrer"> <i className="fa fa-github"></i></a></li>
				</ul>
			</div>  
		);
	}
}

export default Contact;