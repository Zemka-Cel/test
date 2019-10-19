import React from 'react';
import '../style/Home.css';
import Math from '../assets/math.svg';
import Coding from '../assets/coding.svg';
import Eng from '../assets/engineering.svg';
import Science from '../assets/science.svg';
import Chemistry from '../assets/chemistry.svg';
import Physics from '../assets/physics.svg';
import Nav from '../components/nav.js';
import history from '../../history';

class Home extends React.Component {


    render() {
        return (
            <div className="home">
                <Nav></Nav>
                <div className="first">
                <h1 className="title">Hi, Azemina!</h1>
                <div className="div_text">
                <p className="paragraph">Do you want to search for a help and ask other students questions?</p>
                </div>
                <button onClick={()=> this.props.history.push('/questions')} className="button_learning">Start learning</button>
                </div>
                <div className="second">
                    <div className="tutors_container">
                    <h1 className="tutors_title">Tutors</h1>
                    <p onClick={()=> this.props.history.push('/tutors')} className="tutors_see">SEE ALL</p>
                    </div>

                   <div className="fields"> 
                   <div className="fields_pair">
                       <div className="fields_icon">
                <img src={Math} className="img_1" onClick={()=> this.props.history.push('/questions')}></img>
                <p className="fields_text">Math</p>
                </div>
                <div className="fields_icon">
                <img src={Coding}  onClick={()=> this.props.history.push('/questions')}></img>
                <p className="fields_text">Coding</p>
                </div>
                </div>

                <div className="fields_pair">

                <div className="fields_icon">
                <img src={Eng} className="img_1" onClick={()=> this.props.history.push('/questions')}></img>
                <p className="fields_text">Engineering</p>
                </div>

                <div className="fields_icon">
                <img src={Science} className="img_1" onClick={()=> this.props.history.push('/questions')}></img>
                <p className="fields_text">Science</p>
                </div>
                </div>

                <div className="fields_pair">
                <div className="fields_icon">
                <img src={Chemistry} className="img_1" onClick={()=> this.props.history.push('/questions')}></img>
                <p className="fields_text">Chemistry</p>
                </div>

                <div className="fields_icon">
                <img src={Physics} onClick={()=> this.props.history.push('/questions')}></img>
                <p className="fields_text">Physics</p>
                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Home;
