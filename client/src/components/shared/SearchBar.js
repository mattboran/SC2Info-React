import React from 'react';
import { Paper, TextField, IconButton } from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';

const SearchBar = (props) => (
  <Paper style = {paperStyle}>
    <TextField
      hintText = {props.hintText}
      style = {searchBoxStyle}/>
    <IconButton>
      <ActionSearch
        style = {searchButtonStyle}/>
    </IconButton>
  </Paper>
)

const searchButtonStyle = {
  flex: 1,
  alignSelf: 'center'
}
const searchBoxStyle = {
  flex: 1,
  minWidth: '90%'
}
const paperStyle = {
  display: 'flex',
  alignSelf: 'center',
  width: '99.9%',
  minHeight: 15,
  padding: 5,
  backgroundColor: '#eee',
}


export default SearchBar;
