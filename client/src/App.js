// React imports
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

// Google MaterialUI Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Styles and Fonts
import {grey900, grey700, grey500,grey200} from 'material-ui/styles/colors'

// Pages in the app
import { SignIn } from './components/SignIn';
import { Register } from './components/Register';
import LadderInfo from './components/LadderInfo';
import News from './components/News';
import Header from './components/shared/Header';
import * as ActionCreators from './actions';

class App extends Component {
    render(){
      const router = (
        <Switch>
          <Route exact path= "/News" component={News} />
          <Route exact path = "/LadderInfo" component= { LadderInfo }/>
          <Route exact path = "/SignIn" component = { SignIn }  {...this.props}/>
          <Route exact path = "/Register" component = { Register }  {...this.props}/>
          <Redirect from="*" to="/News"/>
        </Switch>
      )

      return(
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
              <Header {...this.props}/>
              { router }
          </div>
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

function mapStateToProps(state){
  const { auth } = state.login;
  return {
    auth,
    routing: state.router
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
