import React from 'react';
import '../style/Questions.css';

class Questions extends React.Component {


    render() {
        return (
            <div >

                <h1 className="title_question">Questions</h1>
                <p className="text_ask">Ask about specific problem and wait for an answer.</p>
                <input className="input_ask"></input>

                <h1 className="title_question">Feeds</h1>
                <div><p>All</p></div>
            </div>
        )
    }
}

export default Questions;