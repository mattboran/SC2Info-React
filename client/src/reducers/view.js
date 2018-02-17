import { SELECT_REGION,
    SEARCH_PLAYER_REQUEST } from '../actions/constants';

const defaultState = {
    region: 'NA',
    playerSearched: '',
    playerSelected: '',
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
                playerSearched: player
            }
        default:
            return state;
    }
}
