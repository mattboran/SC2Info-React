import React, { Component } from 'react';
import SearchBar from '../shared/SearchBar';

class PlayersView extends Component{
  constructor(props){
    super(props);
  }
  renderSearchBox() {
    return(
      <SearchBar {...this.props} hintText={'Search for a user'} />
    )
  }
  render() {
    const retVal = this.renderSearchBox();
    return retVal;
  }
}

export default PlayersView;
