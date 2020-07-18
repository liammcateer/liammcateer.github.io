import React, { Component } from 'react'
import config from '../assets/config.json';

export class Home extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="home-wrapper">
                    <h1>
                        Hi,<br />
                        I'm <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="accent">{config.name}</a>
                    </h1>
                    <div className="home-skills">
                        {config.skills.map((skill) => {return <p>{skill}</p>})}
                    </div>
                </div>                
            </div>
        )
    }
}

export default Home
