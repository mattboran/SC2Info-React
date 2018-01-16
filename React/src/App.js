// React imports
import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
// Google MaterialUI Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Pages in the app
import Header from './Header';
import SignIn from './SignIn';
import Register from './Register';
import News from './News';
// Styles and Fonts
import {grey900, grey700, grey500,grey200} from 'material-ui/styles/colors'
// import './css/App.css';

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
          showHeader: true,
          loggedIn: false
      };
    }

    getLoggedInState = (loggedInData) => {
        return this.state;
    }

    render(){
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component ={null}/>
                        <Route path="/News" exactly component={News}/>
                        <Route path="/SignInOrRegister" component={SignInOrRegister}/>
                    </Switch>
                </div>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
 
}

export default App;
