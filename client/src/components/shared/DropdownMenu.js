import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Menu, { MenuItem } from 'material-ui/Menu';

class DropdownMenu extends Component {
  constructor(props){
    super(props);
    console.log(props.children);
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
    this.handleClose();
  }

  handleClose = () => {
    this.setState({ ...this.state, anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <FlatButton
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          style={{marginTop: 5}}
        >
          Region
        </FlatButton>
        <Menu
          id={this.props.id}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        {this.props.children}
      </Menu>
    </div>
        // {  // {this.props.children.map(menuItem => {
        //   //   console.log("Menu Item: ", menuItem);
        //   //   return <MenuItem onClick = {
        //   //       this.clickedOnMenuItem.bind(this, menuItem.props.label)
        //   //     }/>
        //   // })}
        //   // <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        //   // <MenuItem onClick={this.handleClose}>My account</MenuItem>
        //   // <MenuItem onClick={this.handleClose}>Logout</MenuItem>}
        // // </Menu>
    );
  }
}

export default DropdownMenu;
