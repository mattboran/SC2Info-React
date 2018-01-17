import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {AppBar, ToolbarGroup, Tabs, Tab,
    FontIcon, IconButton, FlatButton} from 'material-ui';
import styled from 'styled-components';

import Image from './Image';


class NavLinks extends  Component{    
    render(){
        const iconColor = 'white';
        const hoverIconColor = 'gray';

        if (!this.props.signIn){
            return(
                <ToolbarGroup>
                    <StyledTabs>
                        <StyledTab label="SC2 News" containerElement={<Link to="/News"/>}/>
                        <StyledTab label="Ladder Info" />
                        <StyledTab label="Player Rank" />
                    </StyledTabs>
                    <FlatButton label="Sign In or Register"
                                primary={true}
                                
                                labelStyle={{color:'white', fontWeight:550}}
                                containerElement={<Link to="/SignIn"/>}/> 
                </ToolbarGroup>
            );
        }
        return(
            <IconButton
                 tooltip="Exit"
                 touch={true}
                 tooltipPosition="bottom-left">
                 <FontIcon color={iconColor} 
                    hoverColor={hoverIconColor}
                    className="material-icons">
                        clear
                    </FontIcon>
        
            </IconButton>
        );
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
                    <NavLinks {...this.props}/>
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
const StyledFlatButton = styled(FlatButton)`
    margin: 12;
    float: left;
    background-color: gray;`;

// Static Links for image
const sc2logo = "https://static.starcraft2.com/dist/images/global/logos/img-sc2-logo--large-37e1b5beb71bfdba2803303faa4d6cf4a33dfbba981e46693eb9244e68bdf6f139e296a456a325a47aed0124a1c95680e1bd7a0e88fffcf1b9e42dd513ce325f.png";
const battleNetLink = "https://starcraft2.com/en-us/";

export default Header;