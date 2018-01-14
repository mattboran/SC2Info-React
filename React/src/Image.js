import React, {Component} from 'react';

export default class Image extends Component {
    render(){
        let {mode, source, height, width, style, ...props} = this.props;
        let modes = {
            'fill':'cover',
            'fit' : 'contain'
        };
        
        let size = modes[mode] || 'contain';

        const defaults = {
            height: height || 100,
            width: width || 100,
            backgroundColor: '#222'
        };

        let important = {
            backgroundImage: 'url('+source+')',
            backgroundSize: size,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
        };

        return <div {...props} style={{...defaults, ...style, ...important}}/>
    }
}