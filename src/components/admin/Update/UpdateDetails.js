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
                            <h2 className="title"><i className="fas fa-user"></i> Admin Details</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Personal and login details of the admin.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div class="col-md-10 mr-auto ml-auto">
                            <div class="wizard-container">
                                <div class="card" data-color="primary">
                                    <form action="#" method="">
                                        <div class="card-body">
                                            <div class="tab-content">
                                                <div class="tab-pane show active" id="about">
                                                <h5 class="info-text text-center" style={{paddingTop: "20px"}}> <i className="fas fa-address-card"></i> Account Details</h5>
                                                <div class="row justify-content-center">
                                                        <div class="col-sm-4">
                                                            <div class="picture-container">
                                                                <div class="picture">
                                                                    <img src="../../assets/img/default-avatar.png" class="picture-src" id="wizardPicturePreview" title=""/>
                                                                    <input type="file" id="wizard-picture" className="pt-2"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="input-group form-control-lg">
                                                                <div class="input-group-prepend">
                                                                <div class="input-group-text">
                                                                    <i class="fas fa-user"></i>
                                                                </div>
                                                                </div>
                                                                <input type="text" class="form-control" placeholder="First Name (required)" name="firstname" value="John"/>
                                                            </div>

                                                            <div class="input-group form-control-lg">
                                                                <div class="input-group-prepend">
                                                                <div class="input-group-text">
                                                                    <i class="fas fa-user"></i>
                                                                </div>
                                                                </div>
                                                                <input type="text" placeholder="Last Name (required)" class="form-control" name="lastname" value="Doe"/>
                                                            </div>

                                                            <div class="input-group form-control-lg">
                                                                <div class="input-group-prepend">
                                                                <div class="input-group-text">
                                                                    <i class="fas fa-envelope"></i>
                                                                </div>
                                                                </div>
                                                                <input type="email" placeholder="Email (required)" class="form-control" name="email" value="jdoe@mail.com"/>
                                                            </div>

                                                            <div class="input-group form-control-lg">
                                                                <div class="input-group-prepend">
                                                                <div class="input-group-text">
                                                                    <i class="fas fa-lock"></i>
                                                                </div>
                                                                </div>
                                                                <input type="password" placeholder="Old Password" class="form-control" name="oldPassword"/>
                                                            </div>

                                                            <div class="input-group form-control-lg">
                                                                <div class="input-group-prepend">
                                                                <div class="input-group-text">
                                                                    <i class="fas fa-lock"></i>
                                                                </div>
                                                                </div>
                                                                <input type="email" placeholder="New Password" class="form-control" name="newPassword"/>
                                                            </div>
                                                            <div>
                                                            <input type='button' class='btn btn-info btn-wd' name='next' value='Update Profile' />
                                                            <input type='button' class='btn btn-finish btn-fill btn-rose btn-wd' name='finish' value='Update Auth' />
                                            
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-footer">
                                            <div class="pull-right">
                                                </div>
                                            <div class="clearfix"></div>
                                        </div>

                                    </form>
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
