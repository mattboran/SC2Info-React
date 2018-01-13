import React, {Component} from 'react';
import './Header.css'
class Header extends Component{
    render(){
        const sc2logo = "https://static.starcraft2.com/dist/images/global/logos/img-sc2-logo--large-37e1b5beb71bfdba2803303faa4d6cf4a33dfbba981e46693eb9244e68bdf6f139e296a456a325a47aed0124a1c95680e1bd7a0e88fffcf1b9e42dd513ce325f.png";
        return(
            <div className="Header">
                <img src={sc2logo} className="Header-logo" />
                <div className = "Header-text">
                    <span>SC2 Info by ThatDude33</span>
                </div>
            </div>
        );
    }
}

export default Header;