import React, { Component } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Navbar from '../../Dashboard/Navbar/Navbar';
import Footer from '../../Dashboard/Footer/Footer';
import glo from '../glo.jpg';
import logo from '../../../../components/manilla.png';
import GloChart from '../../Dashboard/Chart/GloChart';
import PanelHeader from '../../Dashboard/PanelHeader/PanelHeader';

class Glo extends Component {
    render() {
        return (
            <div className="wrapper">
              {/*Sidebar */}
              <Sidebar logo={logo}/>

              <div className="main-panel" id="main-panel">
              {/*Navbar */}
              <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Glo Transactions Chart</span>} />

              <PanelHeader stat={"All Glo Transactions"} />

              {/*Glo Transactions Table*/}
              <div class="content mt-3">
              <GloChart />
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
                                                            <h5 className="stats-title"><span className="text-success"><i class="fas fa-receipt"></i> Glo Cash</span> Transactions</h5>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>                   
                                        </div>
                                        </div>
                                        <table id="datatable" className="table table-striped table-bordered" cellspacing="0" width="100%">
                                            <thead>
                                                <tr>
                                                    <th>Business Name</th>
                                                    <th>Business Type</th>
                                                    <th>Business URL</th>
                                                    <th>Total Amount(GHS)</th>
                                                    <th>Date</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Business Name</th>
                                                    <th>Business Type</th>
                                                    <th>Business URL</th>
                                                    <th>Total Amount(GHS)</th>
                                                    <th>Date</th>                                                
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>FashionHub</td>
                                                    <td>Fashion</td>
                                                    <td><a href="http://www.fashionhub.com">Access</a></td>
                                                    <td>61</td>
                                                    <td>02/03/19</td>
                                                </tr>
                                                
                                                <tr>
                                                    <td>KNUST</td>
                                                    <td>Institution</td>
                                                    <td><a href="http://www.knust.com">Access</a></td>
                                                    <td>27</td>
                                                    <td>01/03/19</td>
                                                </tr>
                                                <tr>
                                                    <td>CarsSpace</td>
                                                    <td>Auto Mechanic Shop</td>
                                                    <td><a href="http://www.carspace.com">Access</a></td>
                                                    <td>22</td>
                                                    <td>05/03/19</td>
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

export default Glo;
