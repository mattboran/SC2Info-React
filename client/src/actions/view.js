import { SELECT_REGION,
    SEARCH_PLAYER_REQUEST,
    SEARCH_PLAYER_FOUND_DB,
    SEARCH_PLAYER_NOT_FOUND_DB,
    SEARCH_PLAYER_CLEAR ,
    SEARCH_PLAYER_DETAIL,
    SEARCH_PLAYER_NO_DETAIL,
    SEARCH_PLAYER_FOUND_DETAIL} from './constants';

import { searchForPlayer, searchPlayerDetail } from '../lib/api';

export function changeRegion(region){
    return dispatch => {
        dispatch(selectRegion(region));
    }
    function selectRegion(region) { return {type: SELECT_REGION, payload: { region }}}
}

export function selectLadder(){

}

// Player searched for by the API - check if profile ID is stored
export function searchPlayer(player){
    return (dispatch, getState) => {
        dispatch(selectPlayerToSearch(player));

        const { region } = getState().viewState;
        searchForPlayer(player, region)
            .then((data) => {
                dispatch(playerIdsFound(data));
            }).catch((err) => {
                dispatch(playerIdsNotFound(err));
        });

    }
    function selectPlayerToSearch(player) { return { type: SEARCH_PLAYER_REQUEST, payload: { player } } }
    function playerIdsFound(players) { return { type: SEARCH_PLAYER_FOUND_DB, payload: { players } } }
    function playerIdsNotFound(err) { return { type: SEARCH_PLAYER_NOT_FOUND_DB, payload: { err } } }
    // function searchDbForProfileId(player, region) { return {type: SEARCH_PLAYER_DETAIL}}
}

export function clearSearchPlayer(){
    return (dispatch) => {
        dispatch({type: SEARCH_PLAYER_CLEAR});
    }
}
export function selectPlayer(player){
    return (dispatch, getState) => {
        dispatch(search(player));

        const name = player.playerName;
        const id = player.playerId;
        const { region } = getState().viewState;

        searchPlayerDetail({name, id}, region)
            .then(data => {
                dispatch(found(data));
            }).catch(err => {
                dispatch(notFound(err));
        });
    }
    function search(player) { return {type: SEARCH_PLAYER_DETAIL, payload: { player } } }
    function found(player) { return {type: SEARCH_PLAYER_FOUND_DETAIL, payload: { player }}}
    function notFound(err) { return {type: SEARCH_PLAYER_NO_DETAIL, payload: { err } } }
}
