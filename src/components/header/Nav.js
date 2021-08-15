import React from 'react';

const Nav = (props) => {

    return (
        <div>
            <nav id="navbar" role="navigation">
                <ul>
                <div role="link" tabindex="0">
                    <li><a href="#prestations">Prestations</a></li>
                </div>
                <div role="link" tabindex="0">
                    <li><a href="#formation">Formation</a></li>
                </div>
                <div role="link" tabindex="0">
                    <li><a href="#contact">Contact</a></li>
                </div>
                </ul>
            </nav>
        </div>
    )
}

export default Nav