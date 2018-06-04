import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import LeftPlayerSelect from './LeftPlayerSelect';
import {connect} from 'react-redux';

export class LeftPlayersDrawer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { playerId, region } = this.props;
        const playerName = this.props.playerSearched;
        let player = [{ playerName, playerId, region }];

        // Default value to suppress the requirement for a default value
        if (!this.props.playerIdFound){
            player = [{playerId:0}];
        } else {
            console.log("Got player: ", player);
        }
        return (
            <Drawer open={this.props.playerIdFound}
                    style={drawerStyle}
                    containerStyle={drawerStyle}>
                <LeftPlayerSelect
                    search={ playerName }
                    playersSearched={[playerName]}
                    defaultVal = {player[0].playerId}
                    player = {player}
                />
            </Drawer>
        )
    }
}

const drawerStyle = {
    position: 'relative',
    height: '100%',
}

export default (LeftPlayersDrawer);