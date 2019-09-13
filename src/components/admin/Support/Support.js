import React, { Component } from "react";
import { withSwalInstance } from "sweetalert2-react";
import swal from "sweetalert2";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import logo from "../../manilla.png";
import Navbar from "../Dashboard/Navbar/Navbar";
import Footer from '../Dashboard/Footer/Footer';

class Support extends Component {
    state = {
        showModal: false
    }

    render(){
        const SweetAlert = withSwalInstance(swal)

        return(
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Customer Support</span>} />
                    <div className="panel-header panel-header"> 
                        <div className="header text-center">
                            <h2 className="title"><i className="fas fa-headset"></i> Customer Support</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Support request from both businesses and clients.</p>
                        </div> 
                    </div>
                    <div className="content">
                        <div class="row mt--100">
                            <div class="col-md-8">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="title">Message Details</h5>
                                    </div>
                                    <div class="card-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-6 pr-1">
                                                    <div class="form-group">
                                                        <label>Support ID</label>
                                                        <input type="text" class="form-control" disabled placeholder="Support ID" value="008232"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 pl-1">
                                                    <div class="form-group">
                                                        <label>Title</label>
                                                        <input type="text" class="form-control" disabled  placeholder="Title" value="Transaction Error"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 pr-1">
                                                    <div class="form-group">
                                                        <label>Date Sent</label>
                                                        <input type="date" class="form-control" disabled placeholder="" value="23/07/19"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 pl-1">
                                                    <div class="form-group">
                                                        <label>User Type</label>
                                                        <input type="text" class="form-control" disabled placeholder="User Type" value="Business"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 pr-1">
                                                    <div class="form-group">
                                                        <label>Message</label>
                                                        <textarea className="form-control" disabled>Lorem ipsum dolor sit amet</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <div className="row">
                                                        <div className="col-md-4 col-sm-12 col-xs-12">
                                                            <a class="btn btn-info btn-md text-white" onClick={() => {
                                                                this.setState({showModal: true})
                                                            }}><i class="fas fa-headset"></i> Reply User</a>
                                                            <SweetAlert
                                                                show={this.state.showModal}
                                                                title= '<p class="text-dark"><i class="fas fa-envelope-open-text"></i> Reply User</p>'
                                                                html= '<div class="form-group"><textarea id="input-field" class="form-control"></textarea></div>'
                                                                showCancelButton= {true}
                                                                confirmButtonClass= 'btn btn-info'
                                                                confirmButtonText= 'Submit'
                                                                cancelButtonClass= 'btn btn-danger'
                                                                buttonsStyling= {false}
                                                                onConfirm={() => {
                                                                    console.log(document.getElementById("input-field"))
                                                                    this.setState({showModal: false})
                                                                }}
                                                            />
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

export default Support;
