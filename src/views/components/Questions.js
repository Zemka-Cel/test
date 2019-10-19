import React from 'react';
import '../style/Questions.css';
import Speech from 'speak-tts';
import Avatar from '../assets/avatar_lejla.svg';
import Audio from '../assets/audio.svg'
import Nav from './nav';

import history from '../../history';

import Speaker from '../assets/speaker.svg';


const questions = [
    {
        name: "Lejla Omerovic",
        img: Avatar,
        question: 'Koja je forumula za izracunavanje zapremine valjka?',
    },
    {
        name: "Lejla Omerovic",
        img: Avatar,
        question: 'Da li je potrebno izracunati bazu indukcije kod zadataka i koje se vrijenosti uzimaju?',
    },
    {
        name: "Lejla Omerovic",
        img: Avatar,
        question: 'Koja je formula za povrsinu kupe?',
    }
]


class Questions extends React.Component {

    constructor(props) {
        super(props)
        this.speech = new Speech();
        this.speech
          .init({
            'volume': 1,
            'lang': 'en-GB',
            'rate': 1,
            'pitch': 1,
            'voice':'Fiona',
            'splitSentences': true,
            'listeners': {
                'onvoiceschanged': (voices) => {
                    console.log("Event voiceschanged", voices)
                }
            }
          })
          .then(data => {
            console.log("Speech is ready", data);
          })
          .catch(e => {
            console.error("An error occured while initializing : ", e);
          });
          
    }

    state = {

    }

    render() {
        return (
            <div className="Questions">
                <Nav></Nav>
                <h1 
                    className="title_question">
                        Questions
                </h1>
                <p 
                    className="text_ask">
                        Ask about specific problem and wait for an answer.
                </p>
                <textarea 
                    placeholder="Type here" 
                    className="input_ask">

                </textarea>
                <button className="btn_submit">Submit</button>
                <div className="speak">
                <p className="speak_text">Use audio search</p>
                <img src={Audio}></img>
                </div>

                <h1 className="title_question">Feed</h1>
                <div className="pills">
                    <p className="pills_txt">All</p>
                    <p className="pills_txt"><b>Math</b></p>
                    <p className="pills_txt">Coding</p>
                    <p className="pills_txt">Science</p>
                </div>

                <div className="post_container">
                    {this.renderQuestions()}
                </div>
            </div>
        )
    }

    renderQuestions () {
        return questions.map(question => {
            return (
                
                <div className="post">
                        <div className="profile">
                            <img 
                                className="profile_img" 
                                src={question.img}/>
                            <p className="profile_name"> {question.name}</p>
                        </div>
                        <div>
                           <p className="profile_content"> {question.question} </p>
                        </div>

                        <div className="options_bar">
                            <p className="options_txt" onClick={()=> this.props.history.push('/answers')}>
                                See Answers
                            </p>

                            <div className="distancer"> 

                            </div>

                            <img onClick={() => this.speak(question.question)} className="speak_ico" src={Speaker}>

                            </img>
                        
                </div>
                </div>
             
            )
        })
    }

    speak (txt) {
        console.log("speak clicked")
        console.log(this.speech)
        this.speech.speak({
            text: txt,
            queue: false,
        }).then(()=>{
            console.log("Speaking end")
        })
    }
}

export default Questions;