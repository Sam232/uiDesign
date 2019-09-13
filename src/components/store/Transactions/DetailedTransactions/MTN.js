import React, { Component } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Navbar from '../../Dashboard/Navbar/Navbar';
import Footer from '../../Dashboard/Footer/Footer';
import mtn from '../mtn.jpg';
import logo from '../../../../components/manilla.png';
import MTNChart from '../../Dashboard/Chart/MTNChart';
import PanelHeader from '../../Dashboard/PanelHeader/PanelHeader';

class MTN extends Component {
    render() {
        return (
            <div className="wrapper">
              {/*Sidebar */}
              <Sidebar logo={logo}/>

              <div className="main-panel" id="main-panel">
              {/*Navbar */}
              <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> MTN Transactions Chart</span>} />

              <PanelHeader stat={"All MTN Transactions"} /> 

              {/*MTN Transactions Table*/}
              <div class="content mt-3">
              <MTNChart />
              <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                    <div className="card card-stats">
                                        <div className="card-header">
                                            <div className="statistics">
                                                <div className="icon icon-primary">                        
                                                    <div className="info" >
                                                        <div className="icon icon-primary">
                                                            <h5 className="stats-title" style={{color: "#163356"}}> <i class="fas fa-receipt"></i> Transaction History</h5>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>                   
                                        </div>
                                        </div>
                                        <table id="datatable" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                                            <thead>
                                                <tr>
                                                    <th>Transaction ID</th>
                                                    <th>Customer ID</th>
                                                    <th>Date Processed</th>
                                                    <th>Amount Debited(GHS)</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Transaction ID</th>
                                                    <th>Customer ID</th>
                                                    <th>Date Processed</th>
                                                    <th>Amount Debited(GHS)</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>001</td>
                                                    <td>020</td>
                                                    <td>02/07/19</td>
                                                    <td>61</td>
                                                </tr>
                                                
                                                <tr>
                                                    <td>201</td>
                                                    <td>120</td>
                                                    <td>02/07/19</td>
                                                    <td>601</td>
                                                </tr>
                                                <tr>
                                                    <td>401</td>
                                                    <td>620</td>
                                                    <td>03/07/19</td>
                                                    <td>361</td>
                                                </tr>
                                                <tr>
                                                    <td>01</td>
                                                    <td>0201</td>
                                                    <td>02/07/19</td>
                                                    <td>31</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div> 
                        </div>  
              </div>  
              {/*Footer */}
              <Footer/>              
              </div>
              
            </div>
        );
    }
}

export default MTN;
