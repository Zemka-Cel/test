
import React from 'react';
import Nav from '../components/nav.js';
import '../style/Tutors.css';
import Profilna1 from '../assets/profil1.svg';
import Star from '../assets/star.svg';
import Maps from '../assets/maps.svg';

import Profilna2 from '../assets/profilna2.svg';


class Tutors extends React.Component {

    render() {
        return (
            
            <div className="tutors">
                <Nav></Nav>
                <div>

                <div className="d-flex flex-column justify-content-center text-light">
                <h2 className="title_tutors"> Tutors near me </h2>
                <input className="form-control radijus" type="text" placeholder="Search" aria-label="Search"></input>
                <img src={Maps} className="maps"></img>
                    <div className="d-flex pt-3 m-0 p-0 col-12">
                        <div className="col-5 radijus boja align-content-center ">
                            <img className="pt-2 pb-1 d-block m-auto " src={Profilna1}></img>
                            <h6 className="pt-1">Damir Aleksić</h6>
                            <p className="text-center">Math, Eng</p>
                            <div className="ml-4 pb-3" >
                                <img  src={Star}></img>
                                <p className="d-inline pl-2 font-weight-bold">4.7</p>
                            </div>
                            <p className="text-center font-weight-bold">See more</p>


                        </div>
                        <div className="col-2"></div>
                        <div className="col-5 boja radijus ">
                            <img className="pt-2 pb-1 d-block m-auto " src={Profilna2}></img>
                            <h6 className="pt-1">Emina Softic</h6>
                            <p className="text-center">Math, Coding</p>
                            <div className="ml-4 pb-3" >
                                <img  src={Star}></img>
                                <p className="d-inline pl-2 font-weight-bold">4.9</p>
                            </div>
                            <p className="text-center font-weight-bold">See more</p>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Tutors;
