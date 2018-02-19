import { SELECT_REGION,
    SEARCH_PLAYER_REQUEST } from './constants';
import { searchForPlayer } from '../lib/api';

export function changeRegion(region){
    return dispatch => {
        dispatch(selectRegion(region));
    }
    function selectRegion(region) { return {type: SELECT_REGION, payload: { region }}}
}

export function selectLadder(){

}

// Player searched for by the API
export function searchPlayer(player){
    return (dispatch, getState) => {
        dispatch(selectPlayerToSearch(player));
        const { region } = getState();
        searchForPlayer(player, region)
            .then()

    }
    function selectPlayerToSearch(player) { return { type: SEARCH_PLAYER_REQUEST, payload: { player } } }
    function searchDbForProfileId(player, region) { return {type: S}}
}

export function selectPlayer(){

}
