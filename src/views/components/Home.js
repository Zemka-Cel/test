import React from 'react';
import '../style/Home.css';

class Home extends React.Component {


    render() {
        return (
            <div className="home">
                <h1 className="title">Hi, Azemina!</h1>
                <div className="div_text">
                <p className="paragraph">Do you want to search for a help and ask other students questions?</p>
                </div>
                <button className="button_learning">Start learning</button>
            </div>
        )
    }
}

export default Home;