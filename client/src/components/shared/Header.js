import React, {Component} from 'react';
import {Link, matchPath} from 'react-router-dom';
import {AppBar, ToolbarGroup, Tabs, Tab,
    FontIcon, IconButton, FlatButton} from 'material-ui';

import styled from 'styled-components';
import Image from './Image';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack();
    }

    render(){

        const iconColor = 'white';
        const hoverIconColor = 'gray';

        const typeOfNavbar = (location) => (route) => !!matchPath(location.pathname, { path: route, exact: true }) ? false : true;

        const {location} = this.props;
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
                 <FontIcon color={iconColor}
                    hoverColor={hoverIconColor}
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
        return(
            <ToolbarGroup>
                <StyledTabs value={tabId}>
                    <StyledTab
                        value={getTabValue('/News')}
                        label="SC2 News"
                        containerElement={<Link to="/News"/>}/>
                    <StyledTab
                        value={getTabValue('/LadderInfo')}
                        label="Ladder Info"
                        containerElement={<Link to="/LadderInfo"/>}/>
                    <StyledTab
                        value={getTabValue('/PlayerRank')}
                        label="Player Rank" />
                </StyledTabs>
                <FlatButton label="Sign In or Register"
                            primary={true}
                            labelStyle={{color:'white', fontWeight:550}}
                            containerElement={<Link to="/SignIn"/>}/>
            </ToolbarGroup>
        )
    }
}

class Header extends Component{
    // Determine NavLinks content based on prop passed to header
    render(){
        return(
            <StyledAppBar title=""
                iconElementLeft = {
                    // TODO: Wrap this Image in ImageLink
                    <a href={battleNetLink}>
                    <Image source={sc2logo} width={150} height={50} mode='fit'/>
                    </a>
                }
                iconElementRight = {
                    <NavBar {...this.props}/>
                }
            >
            </StyledAppBar>
        );
    }
}
// Styled Components
const StyledTab = styled(Tab)`
    min-width: 120px;
    float: left;`;
const StyledTabs = styled(Tabs)`
    min-width: 50%;`;
const StyledAppBar = styled(AppBar)`
    flex-wrap: nowrap;
    minWidth: 800;`;

// Static Links for image
const sc2logo = "https://static.starcraft2.com/dist/images/global/logos/img-sc2-logo--large-37e1b5beb71bfdba2803303faa4d6cf4a33dfbba981e46693eb9244e68bdf6f139e296a456a325a47aed0124a1c95680e1bd7a0e88fffcf1b9e42dd513ce325f.png";
const battleNetLink = "https://starcraft2.com/en-us/";

// X Icon Button settings
const IconButtonProps = {
    tooltip: 'Exit',
    touch: true,
    tooltipPosition: 'bottom-left',
};

export default (Header);