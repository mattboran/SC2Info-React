import { SELECT_REGION } from '../actions/constants';

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
    default:
      return state;
  }
}
