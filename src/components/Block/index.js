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

            <div className="cd-timeline-block">

                <div className="cd-timeline-img cd-picture">
                    {this.props.icon}
                </div>

                <div className="cd-timeline-content">
                    <h2>{ this.props.title }</h2>

                    { this.props.additionalDetails ? Object.keys(this.props.additionalDetails).sort((a,b)=>a.localeCompare(b)).map((x)=> (
                        <p className="cd-timeline-content__details"><span>{x}</span> : <span className="cd-timeline-content__value"> &nbsp;&nbsp; {this.props.additionalDetails[x]}</span></p>
                        )): <p>  {this.props.content}</p>
                    }


                    <span className="cd-date">
                        {this.props.date}
                    </span>
                </div>

            </div>
        )
    }
}


export default Block;
