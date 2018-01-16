// React imports
import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
// Google MaterialUI Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Pages in the app
import Header from './Header';
import SignIn from './SignIn';
import Register from './Register';
import Home from './Home';
// Styles and Fonts
import {grey900, grey700, grey500,grey200} from 'material-ui/styles/colors'
import './css/App.css';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: grey900,
        primary2Color: grey700,
        accent1Color: grey200,
        pickerHeaderColor: grey500
    },
});

const SignInOrRegister = ({match}) => (
    <div>
        <Route
            path={match.url + '/SignIn'}
            component={SignIn}
        />
        <Route
            path={match.url + '/Register'}
            component={Register}
        />
    </div>
)

class App extends Component {
    constructor() {
      super();
      this.state = {
          showHeader: true
      };
      this.handleClickLogin = this.handleClickLogin.bind(this);
      this.handleClickRegister = this.handleClickRegister.bind(this);
    }

    handleClickLogin(){
        this.setState({
            showHeader: false
        });
    }

    handleClickRegister(){
        this.setState({
            showHeader: false
        });
    }

    generateHeader(){
        let content = null;
        if(this.state.showHeader){
            content = <Header />;
        }
        return content;
    }

    render(){
        return(
        <MuiThemeProvider muiTheme={muiTheme}>
            <Header/>
            <BrowserRouter>
                <div>
                    <Route path="/Home" component={Home}/>
                    <Route path="/SignInOrRegister" component={SignInOrRegister}/>
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
        );
    }
 
}

export default App;
