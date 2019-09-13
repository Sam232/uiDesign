import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TodayChart from '../../Dashboard/Chart/TodayChart';

class TodayStatistics extends Component {
    state = {}

    render() {
        return (
            <div className="content mt-3">
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="card card-stats">                    
                            <div class="card-body">
                                <div class="statistics statistics-horizontal">
                                    <div class="info info-horizontal">
                                        <div class="row">
                                        <div class="col-5">
                                            <div class="icon icon-info icon-circle">
                                                <Link to="/dashboard/transactions/mobile-money">
                                                    <i class="fas fa-mobile-alt text-info"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="col-7 text-right">
                                            <h3 class="info-title"><span>GHS</span>1,000</h3>
                                            <h6 class="stats-title">Mobile Money</h6>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="card-footer bg-info">
                                <div class="stats text-white">
                                    <i class="fas fa-mobile-alt"></i> Transactions Performed
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card card-stats">                    
                            <div class="card-body">
                                <div class="statistics statistics-horizontal">
                                    <div class="info info-horizontal">
                                        <div class="row">
                                        <div class="col-5">
                                            <div class="icon icon-success icon-circle">
                                                <Link to="/dashboard/transactions/debit-card">
                                                <i class="far fa-credit-card text-success"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="col-7 text-right">
                                            <h3 class="info-title"><span>GHS</span>3,000</h3>
                                            <h6 class="stats-title">Debit Card</h6>
                                        </div>
                                        </div>
                                    </div>
                                </div>                        
                            </div>                   
                            <hr/> 
                            <div class="card-footer bg-success">
                                <div class="stats text-white">
                                    <i class="far fa-credit-card"></i> Transactions Performed
                                </div>
                            </div>                    
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card card-stats">
                            <div class="card-body ">
                                <div class="statistics statistics-horizontal">
                                    <div class="info info-horizontal">
                                        <div class="row">
                                        <div class="col-5">
                                            <div class="icon icon-danger icon-circle">
                                                <Link to="/dashboard/registered-businesses">
                                                    <i class="fa fa-university text-danger"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="col-7 text-right">
                                            <h3 class="info-title">364</h3>
                                            <h6 class="stats-title">Business Signups</h6>
                                        </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>                    
                            <hr/> 
                            <div class="card-footer bg-danger">
                                <div class="stats text-white">
                                    <i class="fa fa-university"></i> Registered Businesses
                                </div>
                            </div>                   
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card card-stats">                    
                            <div class="card-body ">
                                <div class="statistics statistics-horizontal">
                                    <div class="info info-horizontal">
                                        <div class="row">
                                        <div class="col-5">
                                            <div class="icon icon-warning icon-circle">
                                                <Link to="/dashboard/tracked-checkouts">
                                                <i class="fa fa-users text-warning"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="col-7 text-right">
                                            <h3 class="info-title">289</h3>
                                            <h6 class="stats-title">Checkouts</h6>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <hr/>
                        <div class="card-footer bg-warning">
                            <div class="stats text-white">
                                <i class="fa fa-users"></i> Tracked Checkouts
                            </div>
                        </div>                    
                        </div>
                    </div>
                </div>
                <TodayChart />
                <div class="row">
                    <div class="col-lg-4 col-md-4">
                        <div class="card card-chart">
                            <div class="card-header">
                            <h5 class="card-category">Successful Transactions</h5>
                            <h2 class="card-title">55</h2>
                            <div class="dropdown">
                                <Link to="/dashboard/successful-transactions" className="btn btn-round dropdown-toggle btn-outline-default btn-icon no-caret" >
                                    <i class="fas fa-table"></i>
                                </Link>
                            </div>
                            </div>
                            <div class="card-body">
                            <div class="card-progress">
                                <div class="progress-container">
                                <span class="progress-badge">Business</span>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                    <span class="progress-value">25</span>
                                    </div>
                                </div>
                                </div>

                                <div class="progress-container progress-success">
                                <span class="progress-badge">Clients</span>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                                    <span class="progress-value">30</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="card-footer">
                            <div class="stats">
                                    <i class="now-ui-icons ui-1_calendar-60"></i> Today
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="card card-chart">
                            <div class="card-header">
                            <h5 class="card-category">Failed Transactions</h5>
                            <h2 class="card-title">55</h2>
                            <div class="dropdown">
                                <Link to="/dashboard/failed-transactions" className="btn btn-round dropdown-toggle btn-outline-default btn-icon no-caret" >
                                    <i class="fas fa-table"></i>
                                </Link>
                            </div>
                            </div>
                            <div class="card-body">
                            <div class="card-progress">
                                <div class="progress-container">
                                <span class="progress-badge">Business</span>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                    <span class="progress-value">25</span>
                                    </div>
                                </div>
                                </div>

                                <div class="progress-container progress-success">
                                <span class="progress-badge">Clients</span>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                                    <span class="progress-value">30</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="card-footer">
                            <div class="stats">
                                    <i class="now-ui-icons ui-1_calendar-60"></i> Today
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="card card-chart">
                            <div class="card-header ">
                            <h5 class="card-category">Support Requests</h5>
                            <h2 class="card-title">55</h2>
                            <div class="dropdown">
                                <Link to="/dashboard/user-supports" className="btn btn-round dropdown-toggle btn-outline-default btn-icon no-caret" >
                                    <i class="fas fa-table"></i>
                                </Link>
                            </div>
                            </div>
                            <div class="card-body">
                            <div class="card-progress">
                                <div class="progress-container">
                                <span class="progress-badge">Business</span>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                    <span class="progress-value">25</span>
                                    </div>
                                </div>
                                </div>

                                <div class="progress-container progress-success">
                                <span class="progress-badge">Clients</span>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                                    <span class="progress-value">30</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="card-footer">
                            <div class="stats">
                                    <i class="now-ui-icons ui-1_calendar-60"></i> Today
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodayStatistics;