import React, { Component } from 'react';
import { Paper, TextField, RaisedButton, FlatButton } from 'material-ui';

import styles from '../shared/FormStyles';

class RegisterView extends Component {
    constructor(props){
      super(props);
      this.updateViewForServerErrors = this.updateViewForServerErrors.bind(this);
    }
    renderRegistering() {
      return <div>Registering...</div>;
    }

    renderError() {
      return <div>There was an error registering!</div>;
    }

    updateViewForServerErrors(formError){
      const { registerError } = this.props.registerError;
      let finalError = {
        ...formError
      }
      if ( registerError ){
        if ( registerError.error === 'uniqueemail'){
            finalError.email = 'Email is already in use!';
        } else if (registerError.error === 'uniquename'){
            finalError.username = 'Username is already in use!';
        }
      }
      return finalError;
    }
    renderRegisterBox() {

      const { user, submitted, formError } = this.props;
      const { handleChange, handleSubmit } = this.props.formActions;
      const { handleBackToLoginClick } = this.props.navActions;

      // This is the error that comes back from the server via DB
      var finalError = formError;
      if (submitted){
        finalError = this.updateViewForServerErrors();
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
                    type="password"
                    onChange = { handleChange }
                    errorText = { submitted && finalError.password !== '' ? finalError.password: ''}
                    hintText= { "Password" }
                    floatingLabelText="Password"
                    style={styles.textField}/>
                  {/*<TextField
                    type="password"
                    hintText="Confirm your password"
                    floatingLabelText="Password"
                    onChange = {(even, newValue)=>
                        this.setState({confirmPassword:newValue})}
                    style={styles.textField}/>*/}

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
