import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Sidebar.css';

class Sidebar extends Component {
    state = {}

    render() {
        
        return (
            // <div className="sidebar" style={{backgroundColor: "#183558"}}> 

            //     <div className="logo">
            //         <a href="#" className="simple-text logo-mini">
            //             <img src={this.props.logo} alt="Logo" />
            //         </a>
            
            //         <a href="#" className="simple-text logo-normal">
            //           <strong>Manilla</strong>
            //         </a>                    
            //     </div>
    
            //     <div className="sidebar-wrapper" id="sidebar-wrapper">
                    
            //         <div className="user">
            //             <div className="photo">
            //                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ajKbrYD-GGBhrcRsf0gGbBaow3_mE_Xm3gwlcuj4mH6EPBns" />
            //             </div>
            //             <div className="info">
            //                 <a data-toggle="collapse" href="#collapseExample" className="collapsed">
            //                     <span>
            //                         James Amos
            //                     </span>
            //                 </a>
            //                 <div className="clearfix"></div>
            //             </div>
            //         </div>
            //         <ul className="nav">
            //             <li> 
            //             <Link to="/dashboard/statistics/today-stat">
                            
            //                 <i className="now-ui-icons design_app"></i>
                            
            //                 <p>Dashboard</p>
            //             </Link>               
            //             </li>
                        
            //             <li>
            //                 <Link to="/dashboard/service-requests">                            
            //                     <i className="fa fa-debit-card business_badge"></i>
            //                     <p>List Debit Card Transactions</p>
            //                 </Link>
            //             </li>
                        
            //             <li>
            //                 <Link to="/dashboard/registered-businesses">
            //                     <i className="fa fa-mobile"></i>
            //                 <p>List Mobile Money Transactions</p>
            //                 </Link>                      
            //             </li>
            //             <li>                        
            //                 <Link to="/dashboard/registered-clients">
                            
            //                     <i className="now-ui-icons users_single-02"></i>
                            
            //                 <p>Configure</p>
            //                 </Link>                      
            //             </li>
            //             <li>                        
            //                 <Link to="/dashboard/user-supports">
                            
            //                     <i className="fas fa-headset"></i>
                            
            //                 <p>User Support</p>
            //                 </Link>                      
            //             </li>
            //         </ul>
            //     </div>
            // </div>
            <div class="sidebar" data-color="red">

                <div className="logo">
                     <a href="#" className="simple-text logo-mini">
                         <img src={this.props.logo} alt="Logo" />
                     </a>
            
                     <a href="#" className="simple-text logo-normal">
                      <strong>Manilla</strong>
                     </a>                    
                 </div>

        <div class="sidebar-wrapper" id="sidebar-wrapper">

            <div class="user">
                <div class="photo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ajKbrYD-GGBhrcRsf0gGbBaow3_mE_Xm3gwlcuj4mH6EPBns" />
                </div>
                <div class="info">
                    <a data-toggle="collapse" href="#collapseExample" class="collapsed">
                                <span>
                                    FashionHub
                                </span>
                    </a>
                    <div class="clearfix"></div>
                </div>
            </div>

            <ul class="nav">

                <li  class="active">


                    <Link to="/business/dashboard/statistics/today-stat" style={{color: "#163356"}}>
                        <i class="now-ui-icons design_app" style={{color: "#163356"}} ></i>
                        <p>Dashboard</p>
                    </Link>

                </li>

                <li >


                    <a data-toggle="collapse" href="#store" >

                        <i class="fas fa-hand-holding-usd"></i>

                        <p>
                            Received Transactions <b class="caret"></b>
                        </p>
                    </a>

                    <div class="collapse " id="store">
                        <ul class="nav">

                            <li >
                                <Link to="/business/dashboard/debit-card/transactions">
                                    <span class="sidebar-mini-icon"><i className="far fa-credit-card"></i></span>
                                    <span class="sidebar-normal"> Debit Card Transactions </span>
                                </Link>
                            </li>

                            <li >
                                <Link to="/business/dashboard/mobile-money/transactions">
                                    <span class="sidebar-mini-icon"><i className="fas fa-mobile"></i></span>
                                    <span class="sidebar-normal"> Mobile Money Transactions </span>
                                </Link>
                            </li>


                        </ul>
                    </div>


                </li>

                <li>
                            <Link to="/business/dashboard/transaction-period">
                                <i className="fas fa-calendar-alt"></i>
                            <p>Transaction Period</p>
                            </Link>                      
                        </li>

                <li >


                    <a data-toggle="collapse" href="#settings" >

                        <i class="fa fa-cogs"></i>

                        <p>
                            Settings <b class="caret"></b>
                        </p>
                    </a>

                    <div class="collapse " id="settings">
                        <ul class="nav">

                            <li >
                                <Link to="/business/dashboard/configure-payment">
                                    <span class="sidebar-mini-icon"><i className="fas fa-wrench"></i></span>
                                    <span class="sidebar-normal"> Configure Payment Mode </span>
                                </Link>
                            </li>
                            <li >
                                <Link to="/business/dashboard/configure-apis">
                                    <span class="sidebar-mini-icon"><i className="fas fa-exchange-alt"></i></span>
                                    <span class="sidebar-normal">Configure API Access</span>
                                </Link>
                            </li>

                        </ul>
                    </div>

                </li>
                <li  class="" >

                    <Link to="/business/dashboard/support">

                        <i class="fa fa-headset"></i>

                        <p>Support</p>
                    </Link>

                </li>
                <li  class="" >

                    <Link to="/business/dashboard/faqs">

                        <i class="fa fa-bullhorn"></i>

                        <p>FAQs</p>
                    </Link>

                </li>

            </ul>
        </div>
    </div>
        );
    }
}

export default Sidebar