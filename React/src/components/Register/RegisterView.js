import React, { Component } from 'react';
import { Paper, TextField, RaisedButton, FlatButton } from 'material-ui';

import styles from '../shared/FormStyles';

class RegisterView extends Component {
    renderRegistering() {
      return <div>Registering...</div>;
    }

    renderError() {
      return <div>There was an error registering!</div>;
    }

    renderRegisterBox() {
      console.log("Props recieved: "+JSON.stringify(this.props));
      const { user, submitted, error } = this.props;
      const { handleChange, handleSubmit } = this.props.formActions;
      const { handleBackToLoginClick } = this.props.navActions;
      return(
        <div>
          <div style={styles.div}>
            <Paper style={styles.paper} zDepth={3}>
                <TextField
                    name = "email"
                    value = { user.email }
                    onChange = { handleChange }
                    hintText= { submitted && !user.email ? "Email is required!" : "Email"}
                    floatingLabelText="Email"
                    style={styles.textField}/>

                <TextField
                    name = "username"
                    value = { user.username }
                    onChange = { handleChange }
                    hintText= { submitted && !user.username ? "Username is required!" : "Username"}
                    floatingLabelText="Username"
                    style={styles.textField}/>

                <TextField
                    name = "password"
                    value = { user.password }
                    type="password"
                    onChange = { handleChange }
                    hintText= { submitted && !user.password ? "Password is required!" : "Password" }
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
