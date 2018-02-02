import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions, testRegister } from '../../actions';

import RegisterView from './RegisterView';
import * as ActionCreators from '../../actions';

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
        error: false
      };


    this.handleBackToLoginClick = this.handleBackToLoginClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleBackToLoginClick(){
      this.props.history.replace("/SignIn")
  }

  handleChange(e){
      const { name, value } = e.target;
      const { user } = this.state;
      this.setState({
        user: {
          ...user,
            [name]: value
          }
      });
  }

  handleSubmit(e){
      e.preventDefault();

      this.setState({ submitted : true });
      const { user } = this.state;
      const { dispatch } = this.props;
      // TODO: Password length check
      if (user.email && user.username && user.password){
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

    const pass = {
      ...this.state,
      formActions,
      navActions
    }

    return <RegisterView { ...pass } />
  }
}

function mapStateToProps(state){
  const { registering } = state.registration;
  return {
    registering
  };
}

export default connect(mapStateToProps)(RegisterContainer);
