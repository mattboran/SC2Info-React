// React imports
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
// Google MaterialUI Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Pages in the app
import SignIn from './components/SignIn';
import Register from './components/Register';
import LadderInfo from './components/LadderInfo';
import News from './components/News';
import Header from './components/shared/Header';

// Styles and Fonts
import {grey900, grey700, grey500,grey200} from 'material-ui/styles/colors'

class App extends Component {
    constructor() {
      super();
      this.state = {
          loggedIn: false
        };
    }

    getLoggedInState = (loggedInData) => {
        return this.state;
    }

    render(){
        return(
            <div>
            <MuiThemeProvider muiTheme={muiTheme}>

                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component ={News} />
                        <Route exact path="/News"  component={News}/>
                        <Route exact path="/LadderInfo"  component={LadderInfo}/>
                        <Route exact path="/SignIn" component={SignIn}/>
                        <Route exact path="/Register" component={Register}/>
                    </Switch>
                  </div>
            </MuiThemeProvider>
            </div>
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
