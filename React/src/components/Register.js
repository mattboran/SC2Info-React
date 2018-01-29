import React, { Component } from 'react';
import { Paper, TextField, RaisedButton, FlatButton } from 'material-ui';
import { connect } from 'react-redux';

import { userActions } from '../actions/';

import styles from './shared/FormStyles';

class Register extends Component{
    constructor(props){
        super(props);

        //TODO: Reset previous login status with a dispatch logout()
        this.state={
          user: {
            email:'',
            username:'',
            password:''},
            submitted: false
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
        // TODO: Password length check here
        if (user.email && user.username && user.password){
          userActions.register(user);
        }
    }
    render(){
      const { registering } = this.props;
      const { user, submitted } = this.state;
        return(
            <div >
                <div style={styles.div}>
                <Paper style={styles.paper} zDepth={3}>
                    <TextField
                            name = "email"
                            value = { user.email }
                            onChange = { this.handleChange }
                            hintText= { submitted && !user.email ? "Email is required!" : "Email"}
                            floatingLabelText="Email"
                            style={styles.textField}/>

                    <TextField
                        hintText="Enter your username"
                        floatingLabelText="Username"
                        onChange = {(event, newValue)=>
                            this.setState({username:newValue})}
                        style={styles.textField}/>

                    <TextField
                        type="password"
                        hintText="Enter your password"
                        floatingLabelText="Password"
                        onChange = {(even, newValue)=>
                            this.setState({password:newValue})}
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
                        onClick={(event) =>this.handleClick(event)}/>
                    <FlatButton label="Back to Login"
                        primary={true}
                        style={styles.button}
                        onClick={this.handleBackToLoginClick}/>
                </Paper>
                </div>
            </div>
        );
    }
}

export default Register;
