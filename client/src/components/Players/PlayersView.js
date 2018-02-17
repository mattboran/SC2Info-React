import React, { Component } from 'react';
import SearchBar from './SearchBar';

class PlayersView extends Component{
  renderSearchBox(props) {
    const menuItems = ['NA', 'EU', 'KR', 'SEA'];
    return(
      <SearchBar {...props} dropdownValue={'region'} items={menuItems} searchbarName={'playerName'} hintText={'Search for a user'} />
    )
  }
  renderPlayersPage(){
    const searchBox = this.renderSearchBox({...this.props});
    return(
      <div style = { playerPageStyle } >
            <div>
            { searchBox }
            </div>
            sometexthere
      </div>
    );
  }
  render() {
    return this.renderPlayersPage();
  }
}
const playerPageStyle = {
  backgroundColor: '#aaa',
  minHeight: '100%',
  minWidth: '100%',
  display: 'flex',
  flexDirection: 'column'
}
export default PlayersView;
