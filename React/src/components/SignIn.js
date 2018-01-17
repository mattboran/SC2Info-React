import React, {Component} from 'react';
import Header from './shared/Header';
class SignIn extends Component{

    render(){
        
        return(
            <div>
                <Header signIn={true}/>
                <div>
                    <h2>Signin Page</h2>
                    <p>Cras facilisis urna ornare ex volutpat, et
                    convallis erat elementum. Ut aliquam, ipsum vitae
                    gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                    metus nec massa. Maecenas hendrerit laoreet augue
                    nec molestie. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.</p>
            
                    <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
                </div>
            </div>
        );
    }
} 

export default SignIn;