import React, {Component} from 'react';
import LadderView from './LadderView';
class LadderContainer extends Component{
    constructor(props){
      super(props);
      
    }
    render(){
        return(
            <div>
                <div>
                <h2>Ladder Info</h2>
                </div>
                <div>
                  Search Bar
                </div>
                <div>
                  List elements from Blizz
                </div>
            </div>
        );
    }
}

export default LadderContainer;
