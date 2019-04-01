import React, { Component } from 'react'

export default class Contact extends Component {
  state = {
    name: "",
    body: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted")
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <div className="contactForm">
          <form onSubmit={e => this.handleSubmit(e)}>
            Name:
            <br/>
            <input type="text" name="name" label="name" onChange={e => this.handleChange(e)}/>
            <br/>
            <br/>
            Email:
            <br/>
            <input type="text" name="email" onChange={e => this.handleChange(e)}/>
            <br/>
            <br/>
            Message:
            <br/>
            <textarea name="content" onChange={e => this.handleChange(e)}/>
            <input type="submit" name="submit"/>
          </form>
        </div>
      </div>
    )
  }
}
