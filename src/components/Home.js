import React, { Component } from 'react'
import profile from '../assets/profile.json';

export class Home extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="home-wrapper">
                    <h1>
                        Hi,<br />
                        I'm <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="accent">{profile.name}</a>
                    </h1>
                    <div className="home-skills">
                        {profile.skills.map((skill) => {return <p>{skill}</p>})}
                    </div>
                </div>                
            </div>
        )
    }
}

export default Home
