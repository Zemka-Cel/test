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
                        <p className="answers_cont_text">Koja je forumula za izracunavanje zapremine valjka?</p>
                    </div>

                <div >
                    <div className="user">
                        <img src={Avatar} className="user_img"></img>
                        <p className="user_name">Lejla Omerovic</p>
                    </div>
                    <div className="answers_cont2">
                        <p className="answers_cont_text">Forumla je V = B * H</p>
                        <div className="likes">
                            <img src={Heart1}></img>
                        </div>
                    </div>
                    </div>

                    <div >
                    <div className="user">
                        <img src={Avatar} className="user_img"></img>
                        <p className="user_name">Lejla Omerovic</p>
                    </div>
                    <div className="answers_cont2">
                        <p className="answers_cont_text">Za izracunavanje zapremine potrebno je znati sta je baza geometrijskog tijela.</p>
                        <div className="likes">
                            <img src={Heart1}></img>
                        </div>
                    </div>
                    </div>

            </div>
        )
    }
}

export default Answers;