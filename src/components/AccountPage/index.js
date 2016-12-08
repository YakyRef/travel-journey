import React, {Component} from 'react';
import TimeLine from './../TimeLine';

import {getActivityByFilter} from './../../actions/FilterAction';
import './style.scss';

class AccountPage extends Component {


    render() {
        const {events, filter, createdDay} = this.props;
        console.log(events);
        return (
            <div className="account-page">

                <TimeLine events={events} createdDay={createdDay}/>
            </div>
        );
    }
}

export default AccountPage
