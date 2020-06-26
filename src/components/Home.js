import React, { Component } from 'react'
import skills from '../assets/skills.json';
import Typewriter from 'typewriter-effect';

export class Home extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="home-wrapper">
                    <h1>Hi,<br />
                    I'm <a href="" className="accent">Liam McAteer</a></h1>
                    <Typewriter
                        options={{
                            strings: skills.skills,
                            autoStart: true,
                            loop: true,
                            cursor: "_"
                        }}
                    />
                </div>                
            </div>
        )
    }
}

export default Home
