import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from "react-router-dom";
import logo from '../../manilla.png';
import visa from '../visa.png';
import master from '../mastercard.png';
import airtelTigo from '../airteltigo.jpg';
import mtn from '../mtn.jpg';
import vodafone from '../vodafone.png';
import glo from '../glo.jpg';
import './PaymentStatus.css';
import mailIcon from './mail-icon.png';

class PaymentStatus extends Component {
    state = {
        paymentStatus: "",
        businessName: ""
    }

    componentDidMount = () => {
        const search = this.props.location.search;       
        const { paymentStatus, businessName } = queryString.parse(search);

        if(paymentStatus && businessName){
            return this.setState({
                paymentStatus,
                businessName
            });
        }

        else {
            return this.state;
        }
    }

    render() {
        const { paymentStatus, businessName } = this.state;

        return (
            <div>
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
                                <div class="section-body center"> 
                                    {
                                        paymentStatus == "successful" && businessName ? 
                                            <div class="thankyou">
                                                <div class="thankyou-icon">
                                                    <img src={mailIcon}/>
                                                </div>
                                                <div class="section-title">Thank you for paying with Manilla</div>
                                                <p class="section-p">{businessName} has been notified and you will be contacted soon, thank you!</p>
                                                <div class="section-title" style={{marginTop: "-40px"}}>Below is your transaction Id and should be kept safe and used when needed</div>
                                                <h5 class="section-p">0012T2</h5>
                                                <div class="line sm"></div>
                                            </div> : null
                                    }
                                    {
                                        paymentStatus == "failed" && businessName ? 
                                            <div class="thankyou">
                                                <div class="thankyou-icon">
                                                    <img src="https://blog.codepen.io/wp-content/uploads/2018/09/500-1862005f3404f8efa3d777cf2fc09542179f96e8e24a728542ceaa6c3e46f881.png" width="350px" height="150px"/>
                                                </div>
                                                <div class="section-title">Sorry, an error occured while processing your payment with Manilla</div>
                                                <p class="section-p">Try again by clicking on the below back button, thank you!</p>                                                
                                                <Link class="btn btn-primary" to={this.props.history.goBack}><i class="ion-ios-arrow-thin-left"></i> Go Back</Link>  
                                                <div class="line sm"></div>
                                            </div> : null
                                    }
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

export default PaymentStatus;