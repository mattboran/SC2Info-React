import { SELECT_REGION,
         SEARCH_PLAYER_REQUEST } from './constants';

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
  return dispatch => {
    dispatch(selectPlayerToSearch(player));
  }
  function selectPlayerToSearch(player) { return { type: SEARCH_PLAYER_REQUEST, payload: { player } } }
}

export function selectPlayer(){

}
