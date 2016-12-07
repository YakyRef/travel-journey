import React from 'react';
import TypeFilter from './../Filters/TypeFilter';
import './style.scss';

const Header = ({ name,entityId,tierCustomerSegment,totalAmountInUSD,regProgram}) => (
    <div className="header-container">
        <h2 className="header-container__cardholder"> Card Holder: &nbsp;&nbsp;<span>{entityId}</span></h2>
            <div className="header-details">
                { tierCustomerSegment && <div className="header-details__part tier">
                    <img src={require(`./../../images/icon-star-a.png`)}/>
                    <span>Tier: </span>7A {/*tierCustomerSegment*/}</div> }
                { name && <div className="header-details__part"><span>Name: </span>{name}</div> }
                { totalAmountInUSD && <div className="header-details__part"><span>Balance: </span> ${totalAmountInUSD} </div> }
                {regProgram && <div className="header-details__part"><span>Partner: </span> {regProgram}</div>}
            </div>
        <TypeFilter />

    </div>
);

export default Header;