import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import { List, ListItem, makeSelectable} from 'material-ui/List';

import { connect } from 'react-redux';
import { viewActions } from '../../actions';

const mapRankToImage = (rank) => {
    return require('../../images/Gmleague.jpg');
}

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
    return class SelectableList extends Component {
        static propTypes = {
            children: PropTypes.node.isRequired,
            defaultValue: PropTypes.number.isRequired,
        };

        componentWillMount() {
            this.setState({
                selectedIndex: this.props.defaultValue,
            });
        }

        handleRequestChange = (event, index) => {
            this.setState({
                selectedIndex: index,
            });
        };

        render() {
            return (
                <ComposedComponent
                    value = {this.state.selectedIndex}
                    onChange = {this.handleRequestChange}
                >
                    {this.props.children}
                </ComposedComponent>
            );
        }
    };
}

SelectableList = wrapState(SelectableList);

const SearchPlayers = (props) => {
    const { search, defaultVal, player, onSelectPlayer } = props;
    // const listItems = player.map((data) =>
    //     <ListItem
    //         value = {data.playerId}
    //         primaryText = {data.playerName}
    //         leftAvatar = { <Avatar src={mapRankToImage()}/>}
    //         onClick = {onSelectPlayer({
    //                 playerName: data.playerName,
    //                 playerId: data.playerId,
    //                 region: data.region
    //             })}/>
    // );
    return(
        <SelectableList defaultValue={defaultVal}>
            <ListItem
                value = {0}
                primaryText = {search}
                leftAvatar = {<Avatar src={mapRankToImage()}/>} />
            <ListItem
                value = {1}
                primaryText = {'test'}
                />
        </SelectableList>
    );
}
class LeftPlayerSelect extends Component {
    render() {
        return <SearchPlayers {...this.props} />
    }
}

function mapDispatchToProps(dispatch){
    return {
        onSelectPlayer: (player) => { dispatch(viewActions.selectPlayer(player));}
    }
}
export default connect(null, mapDispatchToProps) (LeftPlayerSelect);