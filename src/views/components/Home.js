import React from 'react';
import '../style/Home.css';
import Math from '../assets/math.png';
import Coding from '../assets/coding.png';
import Eng from '../assets/engineering.png';
import Science from '../assets/science.png';
import Chemistry from '../assets/chemistry.png';
import Physics from '../assets/physics.png';
import history from '../../history';
class Home extends React.Component {


    render() {
        return (
            <div className="home">
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
                    <p className="tutors_see">SEE ALL</p>
                    </div>

                   <div className="fields"> 
                   <div className="fields_pair">
                <img src={Math} className="img_1"></img>
                <img src={Coding}></img>
                </div>

                <div className="fields_pair">
                <img src={Eng} className="img_1"></img>
                <img src={Science}></img>
                </div>

                <div className="fields_pair">
                <img src={Chemistry} className="img_1"></img>
                <img src={Physics}></img>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Home;