import React, { Component } from "react";
import { withSwalInstance } from "sweetalert2-react";
import swal from "sweetalert2";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import logo from "../../../manilla.png";
import Navbar from "../../Dashboard/Navbar/Navbar";
import Footer from '../../Dashboard/Footer/Footer';

class FailedTransaction extends Component {
    state = {
        showModal: false
    }

    render(){
        const SweetAlert = withSwalInstance(swal)

        return(
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Failed Transactions</span>} />
                    <div className="panel-header panel-header"> 
                        <div className="header text-center">
                            <h2 className="title"><i className="fas fa-exclamation-triangle"></i> Failed Transactions</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Transactions that have failed during processing.</p>
                        </div> 
                    </div>
                    <div className="content">
                        <div class="row mt--100">
                            <div class="col-md-8">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="title">Transaction Details</h5>
                                    </div>
                                    <div class="card-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-6 pr-1">
                                                    <div class="form-group">
                                                        <label>Transaction ID</label>
                                                        <input type="text" class="form-control" disabled placeholder="Support ID" value="008232"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 pr-1">
                                                    <div class="form-group">
                                                        <label>Date Occured</label>
                                                        <input type="date" class="form-control" disabled placeholder="" value="23/07/19"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 pr-1">
                                                    <div class="form-group">
                                                        <label>Error Message</label>
                                                        <textarea className="form-control" disabled>
                                                            Unable to send money to "Fashion Hub" due to invalid payment API secret provided
                                                        </textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <div className="row">
                                                        <div className="col-md-4 col-sm-12 col-xs-12 text-danger">
                                                            <i class="fas fa-exclamation-triangle text-fanger"></i> Error Not Fixed
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-none d-sm-block d-sm-none d-md-block">
                                <div class="card card-user">
                                    <div class="image">
                                         </div>
                                    <div class="card-body">
                                        <div class="author">
                                            <a href="#">
                                            <img class="avatar border-gray" src="https://cdn.dribbble.com/users/199982/screenshots/4044699/furkan-avatar-dribbble.png" alt="..."/>
                                                <h5 class="title">John Doe</h5>
                                            </a>
                                            <p class="description">
                                                Business
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default FailedTransaction;
