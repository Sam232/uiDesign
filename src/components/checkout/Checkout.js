import React, { Component } from 'react';
import queryString from 'query-string';
import $ from 'jquery';
import logo from '../manilla.png';
import visa from './visa.png';
import master from './mastercard.png';
import airtelTigo from './airteltigo.jpg';
import mtn from './mtn.jpg';
import vodafone from './vodafone.png';
import glo from './glo.jpg';
import './Checkout.css';

class Checkout extends Component {
    state = {
        id: "",
        businessType: "",
        query: {},
        items: 0
    }

    componentDidMount = () => {
        const search = this.props.location.search;       
        const query = queryString.parse(search);
        
        var total = 0;

        if(query.businessType == "store"){
            const { id, customerId, businessType, order, shipping, discount, tax } = query;
            total =  parseInt(discount) / 100 * parseInt(order) + parseInt(shipping) + parseInt(tax)

            return this.setState({
                id,
                businessType,
                query: {
                    customerId,
                    order,
                    shipping,
                    discount,
                    tax,
                    total
                },
                items: 4
            });
        }

        else if(query.businessType == "institution"){
            const { id, customerId, businessType, order, discount } = query;
            total =  parseInt(discount) / 100 * parseInt(order) 

            return this.setState({
                id,
                businessType,
                query: {
                    customerId,
                    order,
                    discount,
                    total
                },
                items: 2
            });
        }

        else {
            return this.state;
        }
    }

    setPaymentMethod = e => {
        console.log(e.target.value)
    }

    makePayment = e => {
        this.props.history.push("/payment-status/?paymentStatus=successful&businessName=FashionHub")
    }

    handlePhoneNumber = e => {
        const network = e.target.value.substring(0, 3);

        if(network == "024" || network == "055" || network == "054"){
            return $("input.mm")
                    .removeClass("glo")
                    .removeClass("airtelTigo")
                    .removeClass("vodafone")
                    .addClass("mtn")
        }
        else if(network == "020" || network == "050"){
            return $("input.mm")
                    .removeClass("mtn")
                    .removeClass("glo")
                    .removeClass("airtelTigo")
                    .addClass("vodafone")
        }
        else if(network == "027" || network == "057" || network == "026"){
            return $("input.mm")
                    .removeClass("mtn")
                    .removeClass("vodafone")
                    .removeClass("glo")
                    .addClass("airtelTigo")
        }
        else if(network == "023"){
            return $("input.mm")
                    .removeClass("mtn")
                    .removeClass("vodafone")
                    .removeClass("airtelTigo")
                    .addClass("glo")
        }
        else {
            return $("input.mm")
                .removeClass("mtn")
                .removeClass("vodafone")
                .removeClass("airtelTigo")
                .removeClass("glo")
        }
    }

    render() {
        const { businessType, query, items } = this.state;

        return (
            <div>
                {/* Help Me */}
                <div class="helpme">
                    <div class="helpme-content">
                        <div class="helpme-icon"><i class="ion ion-help-buoy"></i></div>
                        <h2 class="helpme-title">Support</h2>
                        <div class="helpme-content-scrollable">
                            <div class="helpme-cards">					
                                <div class="helpme-card">
                                    <h4>What is Manilla?</h4>
                                    <div class="helpme-card-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div class="helpme-card">
                                    <h4>How does Manilla process payment?</h4>
                                    <div class="helpme-card-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div class="helpme-card">
                                    <h4>Is Manilla secure?</h4>
                                    <div class="helpme-card-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="helpme-footer">
                            <input type="text" placeholder="Search support"/>
                            <div class="helpme-other">
                                <div class="helpme-other-item" data-toggle="tooltip" title="Chat with real person" data-placement="left">
                                    <i class="ion ion-chatbubble"></i>
                                </div>
                                <div class="helpme-other-item" data-toggle="tooltip" title="Contact us" data-placement="left">
                                    <i class="ion ion-ios-telephone"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="helpme-inner">
                        <div class="icon">
                            <i class="ion ion-help-buoy"></i>
                            <i class="ion ion-close"></i>
                        </div>
                        <div class="text">Need Help?</div>
                    </div>
                </div>
                {/* Checkout */}
                <div class="">
                    <header class="primary">
                        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#143052"}}>
                            <div className="container mx-auto">
                                <a class="mx-auto" href="#">
                                    <img src={logo} width="40" height="40" class="d-inline-block " alt=""/><strong>anilla{' '} Checkout Page</strong>
                                </a>
                            </div>
                        </nav>
                    </header> 

                    <section class="section" style={{marginTop: "5px"}}>
                        <div class="container">
                            <div class="section-inner">
                                <div class="section-body"> 
                                    <h2 class="section-title padding-top">Checkout Here</h2>
                                    <div class="line"></div>
                                    <div class="section-subtitle">Estimation</div>
                                    {
                                        businessType == "store" ?  <div class="grand-total">
                                            <div class="grand-total-inner" data-slide=".grand-total-details," data-active=".grand-total-inner">
                                                <div class="grand-total-toggle">
                                                    <div class="grand-total-icon">
                                                        <i class="ion-bag"></i>
                                                    </div> 
                                                    <div class="grand-total-label">
                                                        Grand Total <span style={{color: "#143153"}}>{ items } Items</span>
                                                    </div> 
                                                    <div class="grand-total-price">
                                                        GHC { query.total }
                                                    </div> 										
                                                </div>
                                                <div class="grand-total-details">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="total-info" data-calculate-me>
                                                                <div class="total-item">
                                                                    <div class="total-name">Order</div>
                                                                    <div class="total-value" id="total-order" data-price>{ query.order }</div>
                                                                </div> 
                                                                <div class="total-item">
                                                                    <div class="total-name">Shipping</div>
                                                                    <div class="total-value" id="total-shipping" data-price>{ query.shipping }</div>
                                                                </div>
                                                                <div class="total-item" data-calculate-min="true">
                                                                    <div class="total-name">Discount</div>
                                                                    <div class="total-value" id="total-discount">{ query.discount }%</div>
                                                                </div> 
                                                                <div class="total-item">
                                                                    <div class="total-name">Tax</div>
                                                                    <div class="total-value" id="total-tax" data-price>{ query.tax }</div>
                                                                </div> 
                                                                <div class="total-item total">
                                                                    <div class="total-name">Total</div>
                                                                    <div class="total-value" id="" data-price>{ query.total }</div>
                                                                </div> 
                                                            </div> 
                                                        </div> 
                                                    </div>
                                                </div> 
                                            </div> 
                                        </div> : null
                                    }
                                    {
                                        businessType == "institution" ?  <div class="grand-total">
                                            <div class="grand-total-inner" data-slide=".grand-total-details," data-active=".grand-total-inner">
                                                <div class="grand-total-toggle">
                                                    <div class="grand-total-icon">
                                                        <i class="ion-bag"></i>
                                                    </div> 
                                                    <div class="grand-total-label">
                                                        Grand Total <span style={{color: "#143153"}}>{ items } Items</span>
                                                    </div> 
                                                    <div class="grand-total-price">
                                                        GHC { query.total }
                                                    </div> 										
                                                </div>
                                                <div class="grand-total-details">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="total-info" data-calculate-me>
                                                                <div class="total-item">
                                                                    <div class="total-name">Order</div>
                                                                    <div class="total-value" id="total-order" data-price>{ query.order }</div>
                                                                </div> 
                                                                <div class="total-item" data-calculate-min="true">
                                                                    <div class="total-name">Discount</div>
                                                                    <div class="total-value" id="total-discount" >{ query.discount }%</div>
                                                                </div>
                                                                <div class="total-item total">
                                                                    <div class="total-name">Total</div>
                                                                    <div class="total-value" id="" data-price>{ query.total }</div>
                                                                </div> 
                                                            </div> 
                                                        </div> 
                                                    </div>
                                                </div> 
                                            </div> 
                                        </div> : null
                                    }
                                    <div class="section-subtitle">Choose Method</div>
                                    <div class="payment-method-list">
                                        <label class="payment-method-item active" data-target="credit-card">
                                            <div class="payment-method-checkbox">
                                                <input type="radio" name="payment_method" checked="true" onClick={this.setPaymentMethod} defaultValue="debitCard"/>
                                            </div>
                                            <div class="payment-method-details">
                                                <div class="title">Debit Card</div>
                                                <div class="description">
                                                    Pay for your order using either your visa card or master card
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
                                                    Pay for order using any network that accepts mobile money
                                                </div> 
                                            </div>
                                        </label> 
                                    </div> 

                                    <div class="payment-method-form show" id="credit-card">
                                        <div class="section-subtitle">Debit Card</div>
                                        <div class="payment-method-form-inner">
                                            <div class="row">
                                                <div class="col-md-8 col-sm-8">
                                                    <div class="form-group">
                                                        <label>Card Number</label>
                                                        <input type="text" name="card_number" class="form-control cc bg" placeholder="&bull; &bull; &bull; &bull;   &bull; &bull; &bull; &bull;   &bull; &bull; &bull; &bull;   &bull; &bull; &bull; &bull;"/>
                                                    </div> 	
                                                </div> 
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <label>Expiry Date</label>
                                                        <input type="text" name="expiry_date" class="form-control cc-date" placeholder="MM / YY"/>
                                                    </div> 		
                                                </div> 
                                            </div> 
                                            <div class="row">
                                                <div class="col-md-8 col-sm-8">
                                                    <div class="form-group">
                                                        <label>Name on Card</label>
                                                        <input type="text" name="name_on_card" class="form-control"/>
                                                    </div> 								
                                                </div> 
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <label>CVV</label>
                                                        <input type="text" name="code" maxlength="3" class="form-control" placeholder="&bull; &bull; &bull;"/>
                                                    </div> 				
                                                </div> 
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="payment-method-form" id="paypal">
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
                                </div> 
                                <div class="section-cta">
                                    <strong>By clicking on the below button, you authorize Manilla to debit your payment method</strong><br/>
                                    <button class="btn btn-primary" onClick={this.makePayment}>Make Payment<i class="ion-ios-arrow-thin-right"></i></button>
                                </div> 
                            </div> 
                        </div> 
                    </section> 

                    <footer class="primary">
                        <div class="container">
                            <div class="copyright">
                                Copyright &copy; { new Date().getFullYear() }
                                <div class="payment-methods">
                                    <img src={master}/>{' '}
                                    <img src={visa}/>{' '}
                                    <img src={mtn}/>{' '}
                                    <img src={airtelTigo}/>{' '}
                                    <img src={vodafone} style={{height: "36px"}}/>{' '}
                                    <img src={glo} />
                                </div>
                            </div> 
                        </div> 
                    </footer> 
                </div>
            </div>
        )
    }
}

export default Checkout;