import React, { Component } from 'react'
import config from '../assets/config.json';
import axios from 'axios'

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };
    }

    render() {
        return (
            <div className="content-wrapper">
                <h1>Contact</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)}></input>
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)}></input>
                    </label>
                    <label>
                        Name:
                        <textarea name="message" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        
        //Send using axios
        axios.post(`${config.backendHost}/api/contact`, this.state)
            .then(function (response){
                alert('Success')
            })
            .catch(function (error){
                alert('Error:\n' + error)
            })
    }

}

export default Contact
