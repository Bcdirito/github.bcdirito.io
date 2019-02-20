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
        This is where all contact information will go.
        Need to set up mailer function.
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" name="name" onChange={e => this.handleChange(e)}/>
          <input type="text" name="email" onChange={e => this.handleChange(e)}/>
          <textarea name="content" onChange={e => this.handleChange(e)}/>
          <input type="submit" name="submit"/>
        </form>
      </div>
    )
  }
}
