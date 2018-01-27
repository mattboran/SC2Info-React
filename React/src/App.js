// React imports
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
// Google MaterialUI Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Pages in the app
import SignIn from './components/SignIn';
import Register from './components/Register';
import LadderInfo from './components/LadderInfo';
import News from './components/News';
import Header from './components/shared/Header';
import * as ActionCreators from './actions';
// Styles and Fonts
import {grey900, grey700, grey500,grey200} from 'material-ui/styles/colors'

class App extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
      // will trigger the callback function whenever a new Route renders a component(as long as this component stays mounted as routes change)
      this.props.history.listen(() => {
        // view new URL
        console.log('New URL', this.props.history.location.pathname);
      });
  }
    render(){
      const router = (
        <Switch>
          <Route exact path= "/News" component={News} />
          <Route exact path = "/LadderInfo" component= {LadderInfo} />
          <Route exact path = "/SignIn" component = {SignIn} />
          <Route exact path = "/Register" component = {Register} />
        </Switch>
      )

      return(
          <div>
              <MuiThemeProvider muiTheme={muiTheme}>
              <Header {...this.props}/>
              {router}
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

function mapStateToProps(state){
  return {
    user: state.user,
    routing: state.router
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
