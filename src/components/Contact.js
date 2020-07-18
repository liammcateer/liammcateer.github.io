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
            loading: false,
            statusMessage: '',
        };
    }

    render() {
        return (
            <div className="content-wrapper">
                <h1>Contact</h1>
                <p>{this.state.loading ? "Loading..." : this.state.statusMessage}</p>
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
        this.setState({ statusMessage: 'Loading...' })

        //Send using axios
        axios.post(`${config.backendHost}/api/contact`, this.state)
            .then((response) => {
                this.setState({ statusMessage: 'Message Sent successfully.' })
                this.resetForm(); 
            })
            .catch((error) => {
                this.setState({ statusMessage: 'Message not sent: ' + error }) 
            })
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

}

export default Contact
