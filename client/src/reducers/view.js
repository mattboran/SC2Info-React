import { SELECT_REGION,
    SEARCH_PLAYER_REQUEST,
    SEARCH_PLAYER_FOUND_DB,
    SEARCH_PLAYER_NOT_FOUND_DB,
    SEARCH_PLAYER_CLEAR,
    SEARCH_PLAYER_DETAIL,
    SEARCH_PLAYER_FOUND_DETAIL,
    SEARCH_PLAYER_NO_DETAIL} from '../actions/constants';

const defaultState = {
    region: 'NA',
    playerSearched: '',
    playerId: '',
    playerSelected: '',
    searching: false,
    loadingPlayers: false,
    playerIdFound: false,
    showPlayerIdNotFoundAlert: false,
    fetchingStats: false,
    stats: null,
    ladderSelected: 'TOP100',
}

export default function viewState(state = defaultState, action){
    switch(action.type){
        case SELECT_REGION:
            return {
                ...state,
                region: action.payload.region
            };
        case SEARCH_PLAYER_REQUEST:
            const { player } = action.payload;
            return {
                ...state,
                searching: true,
                playerSearched: player
            };
        case SEARCH_PLAYER_FOUND_DB:
            const { id } = action.payload.players;
            console.log("Got to search player found db");
            return {
                ...state,
                playerId: id,
                searching: false,
                showPlayerIdNotFoundAlert: false,
                loadingPlayers: true,
                playerIdFound: true
            };
        case SEARCH_PLAYER_NOT_FOUND_DB:
            console.log("Got error - player not found in DB");
            return {
                ...state,
                playerId: "",
                searching: false,
                showPlayerIdNotFoundAlert: true,
                loadingPlayers: false,
                playerIdFound: false,
            };
        case SEARCH_PLAYER_CLEAR:
            return {
                ...state,
                showPlayerIdNotFoundAlert: false,
                playerId: "",
                playerSearched: ""
            };
        case SEARCH_PLAYER_DETAIL:
            return {
                ...state,
                loadedStats: false,
                fetchingStats: true
            };
        case SEARCH_PLAYER_FOUND_DETAIL:
            return {
                ...state,
                loadedStats: true,
                fetchingStats: false,
                stats: action.payload
            };
        case SEARCH_PLAYER_NO_DETAIL:
            return {
                ...state,
                loadedStats: true,
                fetchingStats: false,
                stats: null
            };
        default:
            return state;
    }
}
