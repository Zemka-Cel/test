import React from 'react';
import '../style/Answers.css';

import Avatar from '../assets/avatar_lejla.svg';
import Heart1 from '../assets/likes.svg';

class Answers extends React.Component {


    render() {
        return (
            <div className="answers">
                    <h1 className="answers_title">Answers</h1>
                    <div className="answers_cont1">
                        <p className="answers_cont_text">Koja je formula za impuls i kako se rjesava zadatak s tom formulom?</p>
                    </div>
                    <div className="user">
                        <img src={Avatar} className="user_img"></img>
                        <p className="user_name">Lejla Omerovic</p>
                    </div>
                    <div className="answers_cont2">
                        <p className="answers_cont_text">Forumla je ta i ta i ovo je njen broj</p>
                        <div className="likes">
                            <img src={Heart1}></img>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Answers;