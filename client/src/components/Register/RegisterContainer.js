import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

import RegisterView from './RegisterView';

class RegisterContainer extends Component {
  constructor(props){
      super(props);

      // TODO: Reset previous login status with a dispatch logout()
      this.state = {
        user: {
          email:'',
          username:'',
          password:''
        },
        submitted: false,
        formError: {
          email: '',
          username: '',
          password: '',
        }
      };

    this.handleBackToLoginClick = this.handleBackToLoginClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleBackToLoginClick(){
      this.props.history.replace("/SignIn");
  }

  handleChange(e){
      const { name, value } = e.target;
      const { user } = this.state;
      this.setState({
        user: {
          ...user,
            [name]: value
          },
        submitted: false
      });
  }



  validateForm(user){
    const { email, username, password } = user;
    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    let error = {
      email: regex.test(email) ? '' : 'Invalid format for email!',
      username: '',
      password: ''
    };
    if (username.length < 3){
        error.username = 'Username too short!';
    } else if (username.length > 20){
        error.username = 'Username too long!';
    }
    if (password.length < 5){
        error.password = 'Password too short!';
    }else if (password.length > 30){
        error.password = 'Password too long!';
    }

    this.setState({
      formError: error
    });
    return error;
  }

  handleSubmit(e){
      e.preventDefault();

      const { user } = this.state;
      const { dispatch } = this.props;

      const error = this.validateForm(user);
      this.setState({ submitted : true });
      const submissionOK = !Object.keys(error).some(x =>error[x]);

      if (submissionOK) {
        dispatch(userActions.register(user));
      }
    }

  render() {
    const navActions = {
      handleBackToLoginClick: this.handleBackToLoginClick
    }

    const formActions = {
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    }

    const { registerError, registering } = this.props;

    const pass = {
      ...this.state,
      registerError,
      registering,
      formActions,
      navActions
    }

    return <RegisterView { ...pass } />
  }
}

function mapStateToProps(state){
  const { registering, registerError } = state.registration;
  return {
    registering,
    registerError
  };
}

export default connect(mapStateToProps)(RegisterContainer);
