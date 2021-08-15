import React, {Component} from "react";
import Nav from './Nav'

class Header extends Component {


    render() {
        return (
            <div className="header">
                <div>
                    <p>Louis Villain</p>
                    <p>Developpeur Web</p>
                </div>
                <Nav />
            </div>
        )
    }
}

export default Header