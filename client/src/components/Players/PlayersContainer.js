//Search bar, region select, match history etc on the right on desktop,
//on mobile put these at the bottom
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayersView from './PlayersView';

class PlayersContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            searching: false,
            searchError: false,
            // foundPlayer: {
            //     username: '',
            //     region: '',
            //     ladders: {
            //         league: '',
            //         subleague: '',
            //         divisionRank: ''
            //     }
            // },
            playerName: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    // handleChange hooks into the searchbar
    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name] : value
        });
    }
    render() {

        const formActions = {
            handleChange: this.handleChange,
        }

        const { searchError, searching } = this.props;
        const { playerName } = this.state;
        const {playerId, playerSearched, playerIdFound, showPlayerIdNotFoundAlert, region} = this.props;
        const pass = {
            searchError,
            searching,
            formActions,
            searchValue: playerName,
            playerId,
            playerSearched,
            playerIdFound,
            showPlayerIdNotFoundAlert,
            region
        }
        return <PlayersView {...pass} />
    }
}

function mapStateToProps(state) {
    const { playerId, playerIdFound, playerSearched, region, showPlayerIdNotFoundAlert } = state.viewState;
    return {
        playerId,
        playerSearched,
        playerIdFound,
        region,
        showPlayerIdNotFoundAlert
    };
}

export default connect(mapStateToProps)(PlayersContainer);
