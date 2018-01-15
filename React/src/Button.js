import React, {Component} from 'react';

export default class Button extends Component{
    render(){
        const buttonStyle = {
            margin: '10px 10px 10px 0'
        };
        return (
            <button
                className = 'btn btn-default'
                style = {buttonStyle}
                onClick = {this.props.handleClick}>{this.props.label}</button>        
        );
    }
};
