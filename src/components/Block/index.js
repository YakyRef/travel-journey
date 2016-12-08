import React, {Component} from 'react';

class Block extends Component {

    static propTypes = {
        icon: React.PropTypes.node,
        title: React.PropTypes.string,
        content: React.PropTypes.string,
        date: React.PropTypes.string,
        additionalDetails: React.PropTypes.string,
    };

    render() {
        return (

            <div className="block">

                block

            </div>
        )
    }
}


export default Block;
