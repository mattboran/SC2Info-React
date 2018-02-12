//Search bar, region select, match history etc on the right on desktop,
//on mobile put these at the bottom
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
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

  handleChange(e){
    const { name, value } = e.target;
    const { foundPlayer, searching, searchError } = this.state;
    const { search } = this.state;

    this.setState({
      searching,
      searchError: false,
      ...foundPlayer,
      search: {
        ...search,
        [name] : value
      }
    });
  }

  render() {
    const navActions = {
      handleClearUserClick: this.handleClearUserClick
    }

    const formActions = {
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmitSearch
    }

    const { searchError, searching } = this.props;

    const pass = {
      ...this.state,
      searchError,
      searching,
      formActions,
      navActions,
    }
    return <PlayersView {...pass} />
  }
}

export default PlayersContainer;
