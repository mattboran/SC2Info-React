import { SELECT_REGION,
    SEARCH_PLAYER_REQUEST,
    SEARCH_PLAYER_FOUND_DB,
    SEARCH_PLAYER_NOT_FOUND_DB} from '../actions/constants';

const defaultState = {
    region: 'NA',
    playerSearched: '',
    playerSelected: '',
    searching: false,
    ladderSelected: 'TOP100'
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
        default:
            return state;
    }
}
