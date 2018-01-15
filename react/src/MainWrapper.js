import React, {Component} from 'react';
import Header from './Header'

export default class MainWrapper extends React.Component{
    constructor() {
        super();
        this.state = {
            showNewsAndBlog: true,
            showLoginScreen: false,
            showRegisterScreen: false,
            userLoggedIn: false,
            showUserStats: false
        };
        this.handleClickLogin = this.handleClickLogin.bind(this);
        this.handleClickRegister = this.handleClickRegister.bind(this);
    }

    handleClickLogin(){
        this.setState({
            showNewsAndBlock: false,
            showLoginScreen: true,
            showRegisterScreen: false           
        });
    }

    handleClickRegister(){
        this.setState({
            showNewsAndBlock: false,
            showLoginScreen: false,
            showRegisterScreen: true
        });
    }

    render(){
        return(
            <Header />
            // <Login/Register Body>
            // <Bottom bar>
        )
    }
}