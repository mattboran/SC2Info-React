//Search bar, region select, match history etc on the right on desktop,
//on mobile put these at the bottom
import React, { Component } from 'react';
import PlayersView from './PlayersView';

class PlayersContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            searching: false,
            searchError: false,
            foundPlayer: {
                username: '',
                region: '',
                ladders: {
                    league: '',
                    subleague: '',
                    divisionRank: ''
                }
            },
            playerName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
        // this.handleClearUserClick = this.handleClearUserClick.bind(this);
        // this.selectIndividualUser = this.selectIndividualUser.bind(this);
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
        const pass = {
            searchError,
            searching,
            formActions,
            searchValue: playerName
            // navActions,
        }
        return <PlayersView {...pass} />
    }
}

export default PlayersContainer;
