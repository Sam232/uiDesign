import React, { Component } from "react";
import { withSwalInstance } from "sweetalert2-react";
import swal from "sweetalert2";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import logo from "../../manilla.png";
import Navbar from "../Dashboard/Navbar/Navbar";
import Footer from '../Dashboard/Footer/Footer';
import './ConfigPayment.css';

class ConfigurePayment extends Component {
    state = {
        showModal: false
    }

    render(){
        const SweetAlert = withSwalInstance(swal)

        return(
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Configure Payment</span>} />
                    <div className="panel-header panel-header"> 
                        <div className="header text-center">
                            <h2 className="title"><i className="fas fa-wrench"></i> Configure Payment</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Setup payment method to start receiving income.</p>
                        </div> 
                    </div>
                    <div className="content">
                        <div class="row mt--100">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header col-md-11 mx-auto mt-3">
                                        <h5 class="title">Configuration Details</h5>
                                    </div>
                                    <div class="card-body col-md-11 mx-auto">
                                        <form>
                                        <div class="section-subtitle">Choose Method</div>
                                    <div class="payment-method-list mt-3 mx-auto">
                                        <label class="payment-method-item active" data-target="credit-card">
                                            <div class="payment-method-checkbox">
                                                <input type="radio" name="payment_method" checked="true" onClick={this.setPaymentMethod} defaultValue="debitCard"/>
                                            </div>
                                            <div class="payment-method-details">
                                                <div class="title">Bank Account</div>
                                                <div class="description">
                                                    Add the bank details that you want your income to be sent to
                                                </div>  
                                            </div>  
                                        </label> 
                                        <label class="payment-method-item" data-target="paypal">
                                            <div class="payment-method-checkbox">
                                                <input type="radio" name="payment_method" onClick={this.setPaymentMethod} defaultValue="mobileMoney"/>
                                            </div> 
                                            <div class="payment-method-details">
                                                <div class="title">Mobile Money</div>
                                                <div class="description">
                                                    Add the mobile money details that you want your income to be sent to
                                                </div> 
                                            </div>
                                        </label> 
                                    </div> 
                                    <div class="payment-method-form show" id="credit-card">
                                        <div class="section-subtitle mt-3">Bank Account Details</div>
                                        <div class="payment-method-form-inner">
                                            <div class="row">
                                                <div class="col-md-8 col-sm-8">
                                                    <div class="form-group">
                                                        <label>Bank Name</label>
                                                        <input type="text" name="bankName" class="form-control bg" placeholder="Eg. Ecobank"/>
                                                    </div> 	
                                                </div> 
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <label>Account Name</label>
                                                        <input type="text" name="accountName" class="form-control" placeholder="Eg. FashionHub"/>
                                                    </div> 		
                                                </div> 
                                            </div> 
                                            <div class="row">
                                                <div class="col-md-12 col-sm-12">
                                                    <div class="form-group">
                                                        <label>Account Number</label>
                                                        <input type="text" name="accountNumber" class="form-control" placeholder="94205902450305050"/>
                                                    </div> 								
                                                </div> 
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="payment-method-form mt-3" id="paypal">
                                        <div class="section-subtitle">Mobile Money</div>
                                        <div class="payment-method-form-inner">
                                            <div class="row">
                                                <div class="col-md-8 col-sm-8">
                                                    <div class="form-group">
                                                        <label>Phone Number</label>
                                                        <input type="text" name="phone_number" className="form-control mm bg" 
                                                                placeholder="&bull; &bull; &bull;   &bull; &bull; &bull; &bull;   &bull; &bull; &bull;" 
                                                                defaultValue=""
                                                                maxLength="10"
                                                                minLength="10"
                                                                onChange={this.handlePhoneNumber}
                                                                />
                                                    </div> 	
                                                </div> 
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <label>Reference Id</label>
                                                        <input type="text" name="refId" class="form-control" placeholder="Eg. Paying For A Product"/>
                                                    </div> 		
                                                </div> 
                                            </div> 
                                        </div> 
                                    </div>
                                    </form>
                                    <div class="section-cta">
                                    <strong>By clicking on the below button, you authorize Manilla to send your revenue directly to the defined payment method</strong><br/>
                                    <button class="btn btn-primary" onClick={() => {
                                        this.setState({
                                            showModal: true
                                        })
                                    }}>Configure Payment</button>
                                    <SweetAlert
                                        show={this.state.showModal}
                                        title= '<p class="text-dark"><span><i class="fa fa-bullhorn"></i></span> Response</p>'
                                        html= '<h6>New Payment Details Added</h6>'
                                        confirmButtonClass= 'btn btn-info'
                                        confirmButtonText= 'Okay'
                                        buttonsStyling= {false}
                                    />
                                </div>
                                        {/* </form> */}
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

export default ConfigurePayment;
