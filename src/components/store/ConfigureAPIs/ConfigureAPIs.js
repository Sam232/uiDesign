import React, { Component } from "react";
import { withSwalInstance } from "sweetalert2-react";
import swal from "sweetalert2";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import logo from "../../manilla.png";
import Navbar from "../Dashboard/Navbar/Navbar";
import Footer from '../Dashboard/Footer/Footer';
import './ConfigureAPIs.css';

class ConfigureAPIs extends Component {
    state = {
        showModal: false,
        showSuccessModal: false
    }

    render(){
        const SweetAlert = withSwalInstance(swal)

        return(
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Configure APIs</span>} />
                    <div className="panel-header panel-header"> 
                        <div className="header text-center">
                            <h2 className="title"><i className="fas fa-exchange-alt"></i> Configure Manilla APIs</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Connect to Manilla from your own platform.</p>
                        </div> 
                    </div>
                    <div className="content">
                        <div class="row mt--100">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header col-md-11 mx-auto mt-3">
                                        <h5 class="title">Connection Details</h5>
                                    </div>
                                    <div class="card-body col-md-11 mx-auto">
                                        
                                        <strong class="section-subtitle">Generate API key and secret</strong>
                                        <p class="">
                                            Connecting to Manilla from your platform will require from you a generated API key and secret. This required will 
                                            enable to integrate Manilla directly into your platform so that all the tasks you perform on this platform can 
                                            also be performed at your end.
                                        </p> 
                                        <div class="section-cta">
                                            <button type="button" class="btn btn-primary" onClick={() => {
                                                this.setState({showModal: true})
                                            }}>Generate Key And Secret</button>
                                            <SweetAlert
                                                show={this.state.showModal}
                                                title= '<p class="text-dark"><span><i class="fa fa-cog"></i></span> Generated Auth Credentials</p>'
                                                html= '<h6>API Key - ANNS3932893DHE29D2I</h6><h6>API SECRET - DNEJK8293D39E3N3JKDND </h6>'
                                                confirmButtonClass= 'btn btn-info'
                                                confirmButtonText= 'Okay'
                                                buttonsStyling= {false}
                                            />
                                        </div>
                                        <br />
                                        
                                        <strong class="section-subtitle">Add Endpoint URL</strong>
                                        <p class="">
                                            Manilla will need to send a response to a defined endpoint anytime it successfully debit an account or when an error 
                                            occured during the deduction process.<br/>
                                            Add the endpoint url that Manilla should send the response to below
                                        </p> 
                                        <div class="">
                                            <div class="form-group">
                                                <label>Endpoint URL</label>
                                                <input type="text" name="bankName" class="form-control bg" placeholder="Eg. https://myapi.com/transaction-results"/>
                                            </div> 	
                                        </div> 
                                        <div class="section-cta">
                                            <button class="btn btn-primary" onClick={() => {
                                                this.setState({showSuccessModal: true})
                                            }}>Add Endpoint</button>
                                            <SweetAlert
                                                show={this.state.showSuccessModal}
                                                title= '<p class="text-dark"><span><i class="fa fa-bullhorn"></i></span> Response</p>'
                                                html= '<h6>Endpoint URL added successfully</h6>'
                                                confirmButtonClass= 'btn btn-info'
                                                confirmButtonText= 'Okay'
                                                buttonsStyling= {false}
                                            />
                                        </div> 
                                        
                                        <div className="mt-3">
                                        <strong class="section-subtitle">Checkout URL</strong>
                                        <p class="">
                                            In order for your Manilla checkouts to be successful, a checkout URL has been generated for you to redirect your customers 
                                            to, anytime you want them to checkout using Manilla.<br/>
                                            Below is the checkout URL which will required you to pass the follwoing parameters to based on your business type:
                                        </p>
                                        <strong><i className="fa fa-university"></i> Institution</strong>
                                        <p className="">https://checkoutmanilla.com/?businessType=institution&customerId={"customerId"}&order={"price"}&discount={"discount"}</p>
                                        <strong><i className="fa fa-store"></i> E-commerce Store</strong>
                                        <p className="">https://checkoutmanilla.com/?businessType=store&customerId={"customerId"}&order={"price"}&shipping={"cost"}&discount={"discount"}&tax={"tax"}</p>
                                        </div>
                                        <div style={{marginTop: "10px"}}>
                                            <h5 className="text-center mt-5" style={{color: "#153254"}}>That's it, you are ready to start using Manilla <i className="far fa-smile-wink"></i>{' '}<i className="far fa-smile-wink"></i> </h5>
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

export default ConfigureAPIs;
