import React from 'react';

import { Paper, TextField, IconButton } from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';
import MenuItem from 'material-ui/MenuItem';
import DropdownMenu from '../shared/DropdownMenu';

import { connect } from 'react-redux';
import { viewActions } from '../../actions';

const SearchBar = (props) => {
      // prune props for passing down to DropdownMenu
      const { dropdownValue, formActions, region, onSelect, ...otherProps } = props;
      return(
      <Paper style = {paperStyle}>
        <DropdownMenu
          dropdownValue = { dropdownValue }
          onSelect = { onSelect }
          region = { region }
          selectedMenuItemStyle={ { color: 'red' } }
          >
          { otherProps.items.map(val=>{
            return <MenuItem primaryText = {val} key = {val} value = {val}/>
          })}
        </DropdownMenu>
        <TextField

          name = "playerName"
          hintText = { otherProps.hintText }
          onChange = { (event) => otherProps.formActions.handleChange(event) }
          style = { searchBoxStyle }/>
        <IconButton>
          <ActionSearch
            style = { searchButtonStyle }/>
        </IconButton>
      </Paper>
    );
}
const searchButtonStyle = {
  flex: 1,
  alignSelf: 'center'
}
const searchBoxStyle = {
  flex: 1,
  minWidth: '70%'
}
const paperStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxHeight: 55,
  padding: 5,
  backgroundColor: '#eee',
}

function mapStateToProps(state){
  const { region } = state.viewState;
  return {
    region
  }
}

function mapDispatchToProps(dispatch){
  return {
    onSelect: (region) => dispatch(viewActions.changeRegion(region))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
