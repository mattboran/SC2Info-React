import React from 'react';
import { Paper, TextField, IconButton } from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';
import MenuItem from 'material-ui/Menu';
import DropdownMenu from './DropdownMenu';

const SearchBar = (props) => (
  <Paper style = {paperStyle}>
    <DropdownMenu
      id={'region-select'}
      style={dropdownMenuStyle}>
       <MenuItem primaryText = {'NA'} label={'NA'} value={'NA'}/>
       <MenuItem primaryText = {'EU'} label={'EU'} value={'EU'}/>
       <MenuItem primaryText = {'KR'} label={'KR'} value={'KR'}/>
       <MenuItem primaryText = {'SEA'} label={'SEA'} value={'SEA'}/>
    </DropdownMenu>
    <TextField
      hintText = {props.hintText}
      style = {searchBoxStyle}/>
    <IconButton>
      <ActionSearch
        style = {searchButtonStyle}/>
    </IconButton>
  </Paper>
)
const dropdownMenuStyle = {
  flex: 1,
  outline: 3,
  alignSelf: 'bottom',
  justifySelf: 'bottom',
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
  alignSelf: 'center',
  width: '99.9%',
  maxHeight: 50,
  padding: 5,
  backgroundColor: '#eee',
}


export default SearchBar;
