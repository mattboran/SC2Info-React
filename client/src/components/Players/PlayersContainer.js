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
      search: {
        region : 'NA',
        playerName : '',
      }
    }
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    // this.handleClearUserClick = this.handleClearUserClick.bind(this);
    // this.selectIndividualUser = this.selectIndividualUser.bind(this);
  }
  // handleChange hooks into the searchbar
  handleChange(e, name, value){
    const { search } = this.state;
    this.setState({
      ...this.state,
      search: {
        ...search,
        [name] : value
      }
    });
  }

  render() {

    const formActions = {
      handleChange: this.handleChange,
      // handleSubmit: this.handleSubmitSearch
    }

    const { searchError, searching } = this.props;

    const pass = {
      // ...this.state,
      searchError,
      searching,
      formActions,
      // navActions,
    }
    return <PlayersView {...pass} />
  }
}

export default PlayersContainer;
