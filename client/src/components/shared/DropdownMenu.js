import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

class DropdownMenu extends React.Component {
  constructor(props){

  }

  state = {
    anchorEl: null,
    selectedRegion: 'NA',
  };

  handleClick = event => {
    this.setState({
       anchorEl: event.currentTarget 
     });
  };

  clickedOnMenuItem(label){
    this.setState({anchorEl: null, selectedRegion: label});
  }

  handleClose = () => {
    this.setState({ ...this.state, anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id={this.props.id}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {this.props.children.map(menuItem => {
            return <MenuItem onClick = {this.handleClose}
          })}
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default DropdownMenu;
