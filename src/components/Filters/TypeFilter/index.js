import React,{Component} from 'react';
import {connect} from 'react-redux';
import {changeFilter,ChangeDate} from './../../../actions';
import * as actions from './../../../actions/FilterAction';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './../style.scss';

class Filter extends Component{
    constructor(){
        super();
        this.state={
            startDate:'',
            endDate:'',
            payoutMethod:''
        }

    }

    handlePayoutMethodChange = (event) =>{
        this.setState({payoutMethod: event.target.value});
        console.log(event.target.value)
        this.props.changeFilter(actions.SPECIFICPM,{id:event.target.value})
    };
    handleStartChange = (date)=> {
        this.setState({
            startDate: date,
            active1:false,
            active2:false,
            active3:false,
            active4:false
        });
        if(this.state.endDate&&date<this.state.endDate){
            this.props.changeDates({startDate:date,endDate:this.state.endDate});
        }
    };

    handleEndChange = (date)=> {
        this.setState({
            endDate: date
        });
        if(this.state.startDate&&date>this.state.startDate){
            this.props.changeDates({endDate:date,startDate:this.state.startDate});
        }
    };
    render(){
        const {changeFilter,options}=this.props;
        return(
            <div className="changeFilter">
                <a href="#" onClick={e =>{e.preventDefault(),changeFilter(actions.ALL)}}>All</a>
                <a href="#" onClick={e =>{ e.preventDefault(),changeFilter(actions.ACCOUNTHOLDER)}}>Accountholder</a>
                <a href="#" onClick={e =>{e.preventDefault(),changeFilter(actions.PAYMENT)}}>Payment</a>
                <a href="#" onClick={e =>{e.preventDefault(),changeFilter(actions.PAYOUTMETHOD)}}>Payout Method</a>
                <select value={this.state.payoutMethod} onChange={this.handlePayoutMethodChange}>
                    <option value="none">All</option>
                    {options.map((x)=>(
                        <option value={x.id}>{x.name}</option>
                    ))}
                </select>

                <div className="datesContainer">
                <span className="start-date">Start date : </span>
                <DatePicker selected={this.state.startDate} dateFormat="YYYY/MM/DD"
                            onChange={this.handleStartChange}/>
                    &nbsp;&nbsp;&nbsp;
                <span className="start-date">End date : </span>
                <DatePicker selected={this.state.endDate} dateFormat="YYYY/MM/DD"
                            onChange={this.handleEndChange} />
                    <button className="datePickerBtn" onClick={()=>{this.setState({startDate:'', endDate:''})
                        this.props.changeDates({startDate:'',endDate:''});
                    }}>clear dates</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilter:(filter,params)=>dispatch(changeFilter(filter,params)),
        changeDates:(dates)=>dispatch(ChangeDate(dates))
    }
};

const mapStoreToProps = (state) =>{
    return {
        options:state.AcActivities.activities.subEntitis
    }
};

export default connect(mapStoreToProps,mapDispatchToProps)(Filter);


