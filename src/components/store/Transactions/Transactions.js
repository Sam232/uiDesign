import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Transactions extends Component {
    state = {}

    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                    {/*Transaction Stat*/}
                        <div className="card card-stats">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="statistics">
                                            <Link to="/dashboard/transactions/mobile-money" style={{cursor: "pointer", textDecorationColor: "#ffffff"}}>
                                                <div className="info" >
                                                    <div className="icon icon-primary">
                                                        <i className="fas fa-mobile-alt"></i>
                                                    </div>
                                                    <h3 className="info-title">GHC 859</h3>
                                                    <h6 className="stats-title">Mobile Money</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="statistics">
                                            <Link to="/dashboard/transactions/debit-card" style={{cursor: "pointer", textDecorationColor: "#ffffff"}}>
                                                <div className="info">
                                                    <div className="icon icon-success">
                                                        <i className="far fa-credit-card"></i>
                                                    </div>
                                                    <h3 className="info-title">GHC 521</h3>
                                                    <h6 className="stats-title">Debit Card</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="statistics">
                                            <Link to="/dashboard/stores" style={{cursor: "pointer", textDecorationColor: "#ffffff"}}>
                                                <div className="info">
                                                    <div className="icon icon-info">
                                                        <i className="now-ui-icons shopping_shop"></i>
                                                    </div>
                                                    <h3 className="info-title">562</h3>
                                                    <h6 className="stats-title">Stores</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="statistics">
                                            <Link to="/dashboard/shoppers" style={{cursor: "pointer", textDecorationColor: "#ffffff"}}>
                                                <div className="info">
                                                    <div className="icon icon-danger">
                                                        <i className="now-ui-icons users_single-02"></i>
                                                    </div>
                                                    <h3 className="info-title">353</h3>
                                                    <h6 className="stats-title">Shoppers</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Transactions;