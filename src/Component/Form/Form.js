import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  render() {
    return (
      <div className="container">
        <form id="text-area">
          <div class="form-group">
            <label for="firstname" />
            <input
              type="text"
              class="form-control"
              id="firstnameinput1"
              aria-describedby="emailHelp"
              placeholder="First name ....."
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" />
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Last name ...."
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" />
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email ...."
            />
            <small id="emailHelp" class="form-text text-muted">
              We won't share your email without your permission.
            </small>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" />
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password ...."
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
