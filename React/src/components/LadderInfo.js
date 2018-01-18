import React, {Component} from 'react';
import Header from './shared/Header';
class LadderInfo extends Component{
    render(){
        
        return(
            <div>
                <Header signIn={false} />
                    <div>
                    <h2>Ladder Info</h2>
                    
                </div>
            </div>
        );
    }
}

export default LadderInfo;