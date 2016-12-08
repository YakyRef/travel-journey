import React, {Component} from 'react';
import {connect} from 'react-redux'
import Header from './../Header';
import './app.scss';
import AccountPage from './../AccountPage';
import {getAccountHolder} from './../../actions';


class App extends Component {
    constructor(){
        super();
    }

    componentWillMount() {
        if(Object.keys(this.props.accountHolder).length === 0 && this.props.accountHolder.constructor === Object){
            this.props.getAccountholder(this.props.params.id)
        }
    }

    render() {
        const {accountHolder,filter} = this.props;

        return (
            <div className="app">

                { accountHolder.activities &&
                <div>
                    <Header
                        name={accountHolder.activities.name}
                        entityId={accountHolder.activities.entityId}
                        tierCustomerSegment={accountHolder.activities.tierCustomerSegment}
                        totalAmountInUSD={accountHolder.activities.totalAmountInUSD}
                        regProgram={accountHolder.activities.regProgram}
                    />
                    {console.log(accountHolder.activities.posts)}
                    <AccountPage events={accountHolder.activities.posts} filter={filter} createdDay={accountHolder.activities.regCompleteDateStr}/>
                </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        accountHolder: state.AcActivities,
        filter:state.Filter
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getAccountholder: (id) => dispatch(getAccountHolder({id}))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
