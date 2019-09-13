import React, { Component } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import logo from "../../manilla.png";
import Navbar from "../Dashboard/Navbar/Navbar";
import Footer from '../Dashboard/Footer/Footer';
import { Link } from "react-router-dom";

class AdminUpdate extends Component {
    state = {

    }

    render(){
        return(
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Admin</span>} />
                    <div className="panel-header panel-header"> 
                    <div className="header text-center">
                            <h2 className="title"><i className="fas fa-user"></i> Admin Profile</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Personal and login details of the admin.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div class="row mt--100">
                            <div class="col-md-10 mx-auto">
                                <div class="card mx-auto">
                                    <div class="card-header">
                                        <h5 class="title">Profile</h5>
                                    </div>
                                    <div class="card-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-4 mx-auto">
                                                <div class="picture-container">
                                                    <div class="picture">
                                                        <img src="../../assets/img/default-avatar.png" class="picture-src" id="wizardPicturePreview" title=""/>
                                                        <br/><br/><input type="file" id="wizard-picture" />
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="col-md-8 mx-auto">
                                                    <div class="col-md-12 pl-1">
                                                        <h5>Personal Details</h5>
                                                        <div class="form-group">
                                                            <label>First Name</label>
                                                            <input type="text" class="form-control" placeholder="First Name" value="John"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 pl-1">
                                                        <div class="form-group">
                                                            <label>Last Name</label>
                                                            <input type="text" class="form-control" placeholder="Last Name" value="Doe"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 pl-1">
                                                        <div class="form-group">
                                                            <label>Email Address</label>
                                                            <input type="text" class="form-control" placeholder="First Name" value="johndoe@gmail.com"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 pl-1">
                                                        <div class="form-group">
                                                            <label>Mobile Number</label>
                                                            <input type="text" class="form-control" placeholder="Last Name" value="0550010011"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 pl-1">
                                                        <h5>Login Details</h5>
                                                            <div class="form-group">
                                                                <label>Old Password</label>
                                                                <input type="password" class="form-control" placeholder="First Name" value="johndoe@gmail.com"/>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 pl-1">
                                                            <div class="form-group">
                                                                <label>New Password</label>
                                                                <input type="password" class="form-control" placeholder="Last Name" value="0550010011"/>
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
                                                </div>
                                                
                                                </div>
                                            </form>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminUpdate;
