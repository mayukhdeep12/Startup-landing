import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="First Name"
          />
        </div>

        <div className="mb-3">
          <label>Last Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Last Name"
          />
        </div>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="name"
            className="form-control"
            placeholder="Username"
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      
      </form>
    )
  }
}
