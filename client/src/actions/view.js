import { SELECT_REGION } from './constants';

export function changeRegion(region){
  return dispatch => {
    dispatch(selectRegion(region));
  }
  function selectRegion(region) { return {type: SELECT_REGION, payload: { region }}}
}

export function selectLadder(){

}

export function selectPlayer(){

}
