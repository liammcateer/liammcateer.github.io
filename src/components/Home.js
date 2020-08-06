import React, { Component } from 'react'
import Typist from 'react-typist';
import TypistCSS from 'react-typist/dist/Typist.css';
import config from '../assets/config.json';

export class Home extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="home-wrapper">
                    <h1>
                        Hi,<br />
                        I'm <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="accent">
                                {config.name}
                            </a>
                    </h1>
                    <div className="home-skills">
                        <Typist cursor={{element: '‎ _'}}>
                            {config.skills.map((skill) => {return <span className="skill">{skill}<br></br></span>})}
                        </Typist>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Home
