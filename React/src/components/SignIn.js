import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import {RaisedButton, FlatButton, TextField, Paper} from 'material-ui';

import styles from './shared/FormStyles';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
    }

    handleRegisterClick(){
        this.props.history.replace("/Register");
    }

    render(){
        return(
            <div >
                <div style={styles.div}>
                <Paper style={styles.paper} zDepth={3}>
                    <TextField
                        hintText="Enter your username"
                        floatingLabelText="Username"
                        onChange = {(event, newValue)=>
                            this.setState({username:newValue})}
                        style={styles.textField}/>
                    <br/>
                    <TextField
                        type="password"
                        hintText="Enter your password"
                        floatingLabelText="Password"
                        onChange = {(even, newValue)=>
                            this.setState({password:newValue})}
                        style={styles.textField}/>
                    <br/>
                    <RaisedButton label="Login"
                        primary={true}
                        style={styles.button}
                        onClick={(event) =>this.handleClick(event)}/>
                    <FlatButton label="Sign Up"
                        primary={true}
                        style={styles.button}
                        onClick={this.handleRegisterClick}/>
                </Paper>
                </div>
            </div>
        );
    }
}

export default withRouter(SignIn);
