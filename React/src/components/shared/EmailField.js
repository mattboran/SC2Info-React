import React, { Component } from 'react';
import { TextField } from 'material-ui';

import styles from '../shared/FormStyles';

export default class EmailField extends Component{
  constructor(props) {
    super(props)
    this.state = { errorText: '', value: props.value }
  }
  
}
