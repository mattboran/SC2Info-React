import React, {Component} from 'react';
import {AppBar, Tabs, Tab} from 'material-ui';
import Image from './Image';
import './css/Header.css'


class Header extends Component{
    // Generate muiTheme
    render(){
        const styles = {
            appBar: {
                flexWrap: 'wrap',
            },
            tabs: {
                width: '100%',
            },
        };
        const sc2logo = "https://static.starcraft2.com/dist/images/global/logos/img-sc2-logo--large-37e1b5beb71bfdba2803303faa4d6cf4a33dfbba981e46693eb9244e68bdf6f139e296a456a325a47aed0124a1c95680e1bd7a0e88fffcf1b9e42dd513ce325f.png";
        const battleNetLink = "https://starcraft2.com/en-us/";
        return(
            <AppBar title="SC2Info" 
                iconElementLeft = {
                    <a href={battleNetLink}>
                    <Image source={sc2logo} width={150} height={50} mode='fill'/>
                    </a>
                }
                style={styles.appBar}>
                <Tabs style={styles.tabs}>
                    <Tab label="SC2 News"/>
                    <Tab label="Ladder Info"/>
                    <Tab label="Player Rank"/>
                </Tabs>
            </AppBar>
        );
    }
}

export default Header;