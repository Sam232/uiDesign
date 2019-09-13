import React, { Component } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import logo from "../../manilla.png";
import Navbar from "../Dashboard/Navbar/Navbar";
import Footer from '../Dashboard/Footer/Footer';
import { Link } from "react-router-dom";

class Client extends Component {
    state = {

    }

    render(){
        return(
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Client</span>} />
                    <div className="panel-header panel-header"> 
                    <div className="header text-center">
                            <h2 className="title"><i className="fas fa-user"></i> Client Details</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Registration details of the registered client.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div class="row mt--100">
                            <div class="col-md-8">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="title">Profile</h5>
                                    </div>
                                    <div class="card-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-6 pr-1">
                                                    <div class="form-group">
                                                        <label>First Name</label>
                                                        <input type="text" class="form-control" disabled placeholder="First Name" value="John"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 pl-1">
                                                    <div class="form-group">
                                                        <label>Last Name</label>
                                                        <input type="text" class="form-control" disabled  placeholder="Last Name" value="Doe"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 pr-1">
                                                    <div class="form-group">
                                                        <label>Email Address</label>
                                                        <input type="text" class="form-control" disabled placeholder="First Name" value="johndoe@gmail.com"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 pl-1">
                                                    <div class="form-group">
                                                        <label>Mobile Number</label>
                                                        <input type="text" class="form-control" disabled placeholder="Last Name" value="0550010011"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <div className="row">
                                                    <div className="col-md-4 col-sm-12 col-xs-12">
                                                    <Link to="/dashboard/deactivate/client/4" class="btn btn-danger btn-md"><i class="fas fa-lock"></i> Deactivate Account</Link>
                                                </div>
                                                <div className="col-md-4 col-sm-12 col-xs-12">
                                                    <Link to="/dashboard/deactivate/client/4" class="btn btn-info btn-md"><i class="fas fa-lock-open"></i> Re-activate Account</Link>
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
                                                Fa_shop
                                            </p>
                                        </div>
                                        <p class="description text-center">
                                            "Everything related to <br/>
                                            fashion can be found in our <br/>
                                            E-commerce store"
                                        </p>
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

export default Client;
