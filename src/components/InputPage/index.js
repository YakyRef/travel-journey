import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getAccountHolder} from './../../actions';


import './style.scss';

class InputPage extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.getAccountholder(this.state.value);
        //browserHistory.push(`/accountholder/${this.state.value}`);

        event.preventDefault();
    }

    render() {
        return (
            <div className="input-page">
                <div className="form-container">
                    <div className="payoneerLogo">
                        <img src={require('./../../images/payoneer-logo.png')}/>
                    </div>

                    <h1>Welcome!</h1>
                    <h2>Please enter a Card Holder ID :</h2>


                    <form onSubmit={this.handleSubmit}>
                        <span>
                            <input className="skinny" value={this.state.value}
                                   type="number" id="burger" type="text"
                                   onChange={this.handleChange}
                            />
                            <label htmlFor="burger">Account Holder ID</label>
                        </span>
                        <br/>
                        <input className="submitBtn" type="submit" value="Go"/>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAccountholder: (id) => dispatch(getAccountHolder({id,nextPath:`account/${id}`}))
    }
};
export default connect(null, mapDispatchToProps)(InputPage)

