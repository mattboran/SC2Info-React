import React, { Component } from 'react';
import { Paper, TextField, RaisedButton, FlatButton } from 'material-ui';
import Loader from 'react-loader';
import styles from '../shared/FormStyles';

class RegisterView extends Component {
    constructor(props){
      super(props);
      this.updateViewForServerErrors = this.updateViewForServerErrors.bind(this);
    }

    renderRegistering() {
      return (
        <div style={styles.div}>
          <Paper style={styles.paper} zDepth={3}>
            <Loader loaded = {!this.props.registering}
              options = {styles.loaderOptions}
              className = "spinner"/ >
          </Paper>
        </div>
      );
    }

    renderError() {
      return(
          <div style={styles.div}>
            <Paper style={styles.paper} zDepth={3}>
              <div> There was an unhandled error!</div>
          </Paper>
        </div>
      );
    }
    // TODO: This also needs to be moved to the container
    checkForEntryErrors(user){
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

      return error;
    }

    // TODO: This needs to be moved to the container
    updateViewForServerErrors(formError){
      const { error } = this.props.registerError;
      let finalError = {
        ...formError
      };
      if ( error === 'uniqueemail'){
          finalError.email = 'Email is already in use!';
      } else if (error === 'uniquename'){
          finalError.username = 'Username is already in use!';
      }
      return finalError;
    }

    renderRegisterBox() {
      const { user, submitted, formError } = this.props;
      const { handleChange, handleSubmit } = this.props.formActions;
      const { handleBackToLoginClick } = this.props.navActions;

      // This is the error that comes back from the server via DB
      // TODO: This is messy, refactor this
      var finalError = formError;
      if (submitted){
        const err = this.checkForEntryErrors(user);
        const submissionOK = !Object.keys(err).some(x =>err[x]);
        if (submissionOK){
          finalError = this.updateViewForServerErrors(formError);
        }
      }
      // Determine whether we should enable button based on entries

      return(
        <div>
          <div style={styles.div}>
            <Paper style={styles.paper} zDepth={3}>
                <TextField
                    name = "email"
                    value = { user.email }
                    onChange = { handleChange }
                    errorText = { submitted && finalError.email !== '' ? finalError.email : ''}
                    hintText= "Email"
                    floatingLabelText="Email"
                    style={styles.textField}/>

                <TextField
                    name = "username"
                    value = { user.username }
                    onChange = { handleChange }
                    errorText = { submitted && finalError.username !== '' ? finalError.username: ''}
                    hintText= {  "Username"}
                    floatingLabelText="Username"
                    style={styles.textField}/>

                <TextField
                    name = "password"
                    value = { user.password }
                    type= "password"
                    onChange = { handleChange }
                    errorText = { submitted && finalError.password !== '' ? finalError.password: ''}
                    hintText= { "Password" }
                    floatingLabelText="Password"
                    style={styles.textField}/>
                <RaisedButton label="Register"
                    primary={true}
                    style={styles.button}
                    onClick={(event) => handleSubmit(event)}/>
                <FlatButton label="Back to Login"
                    primary={true}
                    style={styles.button}
                    onClick={ handleBackToLoginClick }/>
            </Paper>
          </div>
        </div>

      );
    }

    render () {
      if (this.props.registering){
        return this.renderRegistering();
      } else if (this.props.error) {
        return this.renderError();
      } else {
        return this.renderRegisterBox();
      }
    }
}

export default RegisterView;
