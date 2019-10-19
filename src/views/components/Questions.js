import React from 'react';
import '../style/Questions.css';
import Speech from 'speak-tts'



const questions = [
    {
        name: "Lejla Omerovic",
        img: 'https://taxwise-consulting.com/wp-content/uploads/2019/08/user-male.png',
        question: 'What is forumula for triangle calculation?',
    },
    {
        name: "Lejla Omerovic",
        img: 'https://taxwise-consulting.com/wp-content/uploads/2019/08/user-male.png',
        question: 'Koja je fromula za racuanje obima trougla?',
    },
    {
        name: "Lejla Omerovic",
        img: 'https://taxwise-consulting.com/wp-content/uploads/2019/08/user-male.png',
        question: 'Koja je fromula za racuanje obima trougla?',
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

                <h1 className="title_question">Feed</h1>
                <div className="pills">
                    <div className="pill_inactive">
                        <p className="pill_txt">All</p>
                    </div>
                    <div className="pill_active">
                        <p className="pill_txt">Math</p>
                    </div>
                    <div className="pill_inactive">
                        <p className="pill_txt">Chem</p>
                    </div>
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
                            <p className="options_txt">
                                See Answers
                            </p>

                            <div className="distancer"> 

                            </div>

                            <img onClick={() => this.speak(question.question)} className="speak_ico" src='https://cdn1.iconfinder.com/data/icons/users-outline-1/40/10-512.png'>

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