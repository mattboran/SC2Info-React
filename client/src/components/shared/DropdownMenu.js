import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class DropdownMenu extends Component {
  constructor(props){
    super(props);
    // region comes down from redux store
    this.state = {
      selected: props.region,

    }
  }

  // This handleChange method hooks into the dropdown menu and redux
  handleChange = (event, name, selected) =>{
    this.setState({ selected });
    const { onSelect } = this.props;
    // dispatch region select
    onSelect(selected);
  }

  render() {
    const { selectedMenuItemStyle, dropDownValue} = this.props;
    const { selected } = this.state;
    return (
      <div>
        <DropDownMenu
          value = { selected }
          selectedMenuItemStyle = { selectedMenuItemStyle }
          >
          {
            this.props.children.map((child, index) => {
              return <MenuItem {...child.props}
                key={ index }
                onClick={(event)=>this.handleChange(event, dropDownValue, child.props.value)}
                />
            })
          }
        </DropDownMenu>
    </div>
    );
  }
}

export default DropdownMenu;
