import React, {Component} from 'react';
import {Link, matchPath} from 'react-router-dom';
import {AppBar, ToolbarGroup, Tabs, Tab,
    FontIcon, IconButton, FlatButton} from 'material-ui';
import { IconMenu, MenuItem } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { userActions } from '../../actions/';
import { connect } from 'react-redux';

import styles from './FormStyles';
import Image from './Image';

const iconButtonColors = {
  color: 'white',
  hoverColor: 'gray',
  backgroundColor: 'black',

};

const Logged = (props) => (
  <IconMenu
    {...props}
    style={iconButtonColors}

    iconButtonElement={
      <IconButton  >
        <MoreVertIcon color={iconButtonColors.color} hoverColor={iconButtonColors.hoverColor}/>
      </IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
    <MenuItem primaryText="Sign out" onClick = {props.onLogoutClick} style={iconButtonColors}/>
    <MenuItem primaryText="Options" containerElement= {<Link to="/UserOptions" />} style={iconButtonColors}/>
  </IconMenu>
);

Logged.muiName = 'IconMenu';

const LoginButton = (props) => (
  <FlatButton label="Sign In or Register"
              primary={true}
              labelStyle={styles.loginButtonLabel}
              containerElement={<Link to="/SignIn"/>}/>
          );
class NavBar extends Component{
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack();
    }

    render(){

        const typeOfNavbar = (location) => (route) => !!matchPath(location.pathname, { path: route, exact: true }) ? false : true;
        const { location } = this.props;
        const matchNavbarType = typeOfNavbar(location);

        if (matchNavbarType('/SignIn') && matchNavbarType('/Register')){
            return(
                <NavLinks {...this.props}/>
            );
        }
        return(
            <IconButton
                 props={IconButtonProps}
                 onClick={this.goBack}>
                 <FontIcon color={iconButtonColors.color}
                    hoverColor={iconButtonColors.hoverColor}
                    className="material-icons">
                        clear
                    </FontIcon>

            </IconButton>
        );
    }
}

class NavLinks extends  Component{

    render(){
        const mountTabValueFactory = (location, tabId) => (route) => !!matchPath(location.pathname, { path: route, exact: true }) ? tabId : Infinity;

        const tabId = 'navTabId';
        const {location} = this.props;
        const getTabValue = mountTabValueFactory(location, tabId);
        var loginButton = <LoginButton />;
        if (this.props.auth ){
          if (this.props.auth.user !== ""){
            loginButton = <Logged {...this.props}/>
          }
        }
        return(
            <ToolbarGroup>
                <Tabs value={tabId}>
                    <Tab
                        value={getTabValue('/News')}
                        label='News'
                        style = {TabStyle}
                        containerElement={<Link to="/News"/>}/>
                      <Tab
                        value={getTabValue('/LadderInfo')}
                        label='Ladder'
                        style = {TabStyle}
                        containerElement={<Link to="/LadderInfo"/>}/>
                      <Tab
                        value={getTabValue('/PlayerRank')}
                        label='Players'
                        style = {TabStyle} />
                    </Tabs>
                {loginButton}
            </ToolbarGroup>
        )
    }
}

class Header extends Component{
    // Determine NavLinks content based on prop passed to header
    render(){
        return(
            <AppBar title=""
                iconElementLeft = {
                    <a href={battleNetLink}>
                    <Image source={sc2logo} width={150} height={50} mode='fit'/>
                    </a>
                }
                iconElementRight = {
                    <NavBar {...this.props}/>
                }
            >
            </AppBar>
        );
    }
}

// Static Links for image
const sc2logo = "https://static.starcraft2.com/dist/images/global/logos/img-sc2-logo--large-37e1b5beb71bfdba2803303faa4d6cf4a33dfbba981e46693eb9244e68bdf6f139e296a456a325a47aed0124a1c95680e1bd7a0e88fffcf1b9e42dd513ce325f.png";
const battleNetLink = "https://starcraft2.com/en-us/";

// X Icon Button settings
const IconButtonProps = {
    tooltip: 'Exit',
    touch: true,
    tooltipPosition: 'bottom-left',
};
const TabStyle = {
    paddingRight: 8,
    paddingLeft: 8,
    minWidth: '15%'
};

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    onLogoutClick: () => dispatch(userActions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
