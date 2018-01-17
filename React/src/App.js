// React imports
import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
// Google MaterialUI Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Pages in the app
import Header from './components/shared/Header';
import SignIn from './components/SignIn';
import Register from './components/Register';
import News from './components/News';
// Styles and Fonts
import {grey900, grey700, grey500,grey200} from 'material-ui/styles/colors'

// Browser history, this should probably be moved
import {createBrowserHistory } from 'history';
let history= createBrowserHistory();

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
                <Router history={history}>
                <div> 
                    <Switch>
                        <Route exact path="/" component ={News}/>
                        <Route exact path="/News"  component={News}/>
                        <Route exact path="/SignIn" component={SignIn}/>
                    </Switch>
                </div>
                </Router>
            </MuiThemeProvider>
        );
    }
    
}

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: grey900,
        primary2Color: grey700,
        accent1Color: grey200,
        pickerHeaderColor: grey500
    },
});

export default App;
