import React from 'react';
import '../style/navstyle.css';
import Profilna from '../assets/profilna.png';

class Nav extends React.Component {


    render() {
        return (
            <div className="navigacija">
                <nav className="navbar navbar-expand-lg navbar-light pl-0">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                        </ul>

                    </div>
                    <img className="pt-1" src={Profilna}></img>
                </nav>
            </div>
        )
    }
}

export default Nav;