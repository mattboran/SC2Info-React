import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux';
import { viewActions } from '../../actions';

class PlayerNotFoundDialogue extends Component {
    constructor(props){
        super(props);
        const open = this.shouldOpen();
        this.state = {
            open
        }
    }

    componentWillReceiveProps(nextProps) {
        const prevIdAlert = this.props.showPlayerIdNotFoundAlert;
        const nextIdAlert = nextProps.showPlayerIdNotFoundAlert;
        if (nextIdAlert && !prevIdAlert) {
            this.handleOpen();
        }
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.props.onClear();
        this.setState({open: false});
    };

    shouldOpen = () => {
        const { playerSearched, playerIdFound } = this.props;
        return playerSearched !== "" && !playerIdFound;
    }
    render() {
        return (
            <div>
                <Dialog
                    title="Player not found!"
                    modal = {false}
                    open = {this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    The player you searched for was not found in the player ID database! Error code DB#001
                </Dialog>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {

        onClear: () => {
            console.log("onClear called!");
            dispatch(viewActions.clearSearchPlayer()) }
    }
}

export default connect(null, mapDispatchToProps)(PlayerNotFoundDialogue);

