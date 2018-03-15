import React, { Component } from 'react';
import SearchBar from './SearchBar';
import LeftPlayersDrawer from './LeftPlayersDrawer';
import PlayerNotFoundDialogue from './PlayerNotFoundDialogue';
class PlayersView extends Component{
    constructor(props){
        super(props);
        const height = this.getDimensions();
        this.state = {
            height
        }
    }

    getDimensions = () => {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 135;
    }

    updateDimensions = () => {
        const height = this.getDimensions();
        this.setState({height});
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    renderSearchBox(props) {
        const menuItems = ['NA', 'EU', 'KR', 'SEA'];
        return(
            <SearchBar {...props} dropdownValue={'region'} items={menuItems} searchbarName={'playerName'} hintText={'Search for a user'} />
        )
    }

    renderPlayersPage(){
        const searchBox = this.renderSearchBox({...this.props});
        // TODO: this needs to take an array
        const { playerSearched, playerIdFound, showPlayerIdNotFoundAlert, playerId, region } = this.props;

        const props = {
            playerSearched,
            playerIdFound,
            showPlayerIdNotFoundAlert,
            playerId,
            region
        };

        return(
            <div style = { playerPageStyle } >
                <div>
                    { searchBox }
                </div>
                <div style={{height: this.state.height}}>
                    <LeftPlayersDrawer {...props}/>
                    <PlayerNotFoundDialogue {...props}/>
                </div>
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
