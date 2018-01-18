import React, {Component} from 'react';
import Header from './shared/Header';
class News extends Component{
    render(){
        
        return(
            <div>
                <Header signIn={false} />
                    <div>
                    <h2>Homepage</h2>
                    <p>There will be links here:</p>
                    <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default News;