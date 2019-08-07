import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Login extends Component {
  state = {
    user: {
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ 
      user: {
        ...this.state.user,
        [name]: value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state.user;
    if(email && password){
      fetch.post('http://localhost:3000/api/v1/users/login',{
        
      })
      .then((res) => {
        console.log(res, "login data");
        if(res.data.success){
          localStorage.setItem("jwt", res.data.token);
          this.props.dispatch({ type: "USER_LOGIN_SUCCESS", data: res.data });
          this.setState({ user: {} });
          this.props.history.push('/');
        }
      })
      .catch(function (err) {
        console.log(err, "catch error");
        this.setState({ error: "Wrong email address" });
        setTimeout(() => this.setState({ error: "" }), 1000);
      });
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          onChange={ this.handleChange }
          value={ this.state.user.email }
          />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={ this.handleChange }
          value={ this.state.user.password }
          />
        <button onSubmit={ this.handleSubmit }>
          Login
        </button>
      </form>
    );
  }
}


export default Login;