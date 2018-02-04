import React, { Component } from 'react';
import { Paper, TextField, RaisedButton, FlatButton } from 'material-ui';
import Loader from 'react-loader';
import styles from '../shared/FormStyles';

class SignInView extends Component{
  constructor(props){
    super(props);
    this.updateViewForServerErrors = this.updateViewForServerErrors.bind(this);
  }

  renderSigningIn() {
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
  updateViewForServerErrors(formError){
    const { error } = this.props.loginError;
    let finalError = {
      ...formError
    };
    if ( error === 'invalidpassword' || error === 'invalidusername'){
        finalError.password = 'Username/Password combo invalid!';
    }
    return finalError;
  }

  renderSignInBox() {
    const { user, submitted, formError } = this.props;
    const { handleChange, handleSubmit } = this.props.formActions;
    const { handleBackToLoginClick } = this.props.navActions;

    var finalError = formError;
    if (submitted){
      if (user.password.length > 0 && user.username.length > 0){
        finalError = this.updateViewForServerErrors(formError);
      }
    }
    return(
      <div>
        <div style={styles.div}>
          <Paper style={styles.paper} zDepth={3}>
              <TextField
                  name = "username"
                  value = { user.username }
                  onChange = { handleChange }
                  errorText = { submitted && finalError.username !== '' ? finalError.username: ''}
                  hintText= "Usernamne"
                  floatingLabelText="Username"
                  style = {styles.loginField}/>

              <TextField
                  name = "password"
                  value = { user.password }
                  type="password"
                  onChange = { handleChange }
                  errorText = { submitted && finalError.password !== '' ? finalError.password: ''}
                  hintText= { "Password" }
                  floatingLabelText="Password"
                  style={styles.loginField}/>

                <RaisedButton label="Login"
                  primary={true}
                  style={styles.button}
                  onClick={(event) => handleSubmit(event)}/>
                <FlatButton label="Sign up"
                  primary={true}
                  style={styles.button}
                  onClick={ handleBackToLoginClick }/>
          </Paper>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.loggingIn){
      return this.renderSignInBox();
    } else if (this.props.error) {
      return this.renderError();
    } else {
      return this.renderSignInBox();
    }
  }
}

export default SignInView;
