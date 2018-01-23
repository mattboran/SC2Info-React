import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Paper, TextField, RaisedButton, FlatButton} from 'material-ui';
import styles from './shared/FormStyles';

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            username:'',
            password:'',
            confirmPassword:''
        }
        this.handleBackToLoginClick = this.handleBackToLoginClick.bind(this);
    }

    handleBackToLoginClick(){
        this.props.history.replace("/SignIn")
    }
    render(){
        return(
            <div >
                <div style={styles.div}>
                <Paper style={styles.paper} zDepth={3}>
                    <TextField
                            hintText="Enter your email"
                            floatingLabelText="Email"
                            onChange = {(event, newValue)=>
                                this.setState({email:newValue})}
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
                    <TextField
                        type="password"
                        hintText="Confirm your password"
                        floatingLabelText="Password"
                        onChange = {(even, newValue)=>
                            this.setState({confirmPassword:newValue})}
                        style={styles.textField}/>

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

export default withRouter(Register);
