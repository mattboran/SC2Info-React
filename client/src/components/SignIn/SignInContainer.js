import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import SignInView from './SignInView';

class SignInContainer extends Component {
  constructor(props){
    super(props);

      this.state = {
        user: {
          username:'',
          password:''
        },
        submitted: false,
        formError: {
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
        this.props.history.replace("/Register");
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
      const {  username, password } = user

      let error = {
        username: username.length !== 0 ? '' : 'Enter a username!',
        password: password.length !== 0 ? '' : 'Enter a password!'
      };
      this.setState({
        formError:{
          ...error
        }
      });
      
      return error;
    }

    handleSubmit(e){
        e.preventDefault();

        const { user } = this.state;
        const { dispatch } = this.props;
        //
        const error = this.validateForm(user);
        this.setState({ submitted : true });
        const submissionOK = !Object.keys(error).some(x =>error[x]);
        //
        if (submissionOK) {
           dispatch(userActions.login(user));
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

      const { loggingIn, loginError } = this.props;

      const pass = {
        ...this.state,
        loginError,
        loggingIn,
        formActions,
        navActions
      }

      return <SignInView { ...pass } />
    }
  }

  function mapStateToProps(state){
    const { loggingIn, loginError } = state.login;
    return {
      loggingIn,
      loginError,
    };
  }

export default connect(mapStateToProps)(SignInContainer);
