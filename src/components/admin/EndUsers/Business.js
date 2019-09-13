import React, { Component } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import logo from "../../manilla.png";
import Navbar from "../Dashboard/Navbar/Navbar";
import Footer from '../Dashboard/Footer/Footer';
import { Link } from "react-router-dom";

class Business extends Component {
    state = {

    }

    render(){
        return(
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Business</span>} />
                    <div className="panel-header panel-header"> 
                    <div className="header text-center">
                            <h2 className="title"><i className="fas fa-university"></i> Business Details</h2>
                            <p className="category mt--100" style={{marginTop: "-25px"}}>Registration details of the registered business.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div class="row mt--100">
                            <div class="col-md-8">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="title">Edit Profile</h5>
                                    </div>
                                    <div class="card-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-6 pr-1">
                                                    <div class="form-group">
                                                        <label>Company (disabled)</label>
                                                        <input type="text" class="form-control" disabled placeholder="Company" value="Fashion Space"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 pl-1">
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">Email address</label>
                                                        <input type="email" class="form-control" placeholder="Email" value="fashionspace@hub.com"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-12 pr-1">
                                                    <div class="form-group">
                                                        <label>Store Type</label>
                                                        <select className="form-control">
                                                            <option value="" selected>Fashion</option>
                                                            <option value="">Electrical</option>
                                                            <option value="">Car-Auto parts</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-4 pr-1">
                                                    <div class="form-group">
                                                        <label>City</label>
                                                        <input type="text" class="form-control" disabled placeholder="City" value="Accra"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 px-1">
                                                    <div class="form-group">
                                                        <label>Country</label>
                                                        <input type="text" class="form-control" disabled placeholder="Country" value="Ghana"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 pl-1">
                                                    <div class="form-group">
                                                        <label>Postal Code</label>
                                                        <input type="number" class="form-control" disabled placeholder="0000"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label>Location Address</label>
                                                        <input type="text" class="form-control" disabled placeholder="Home Address" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                            <div class="col-md-8">
                                                    <div class="form-group">
                                                        <label>About Business</label>
                                                        <textarea rows="4" cols="80" class="form-control" disabled placeholder="Here can be your description" value="Mike">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 pl-1">
                                                    <div class="form-group">
                                                        <label>Store URL</label><br/>
                                                        <a href="/#">www.mystoreonline.com/buy</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <div className="row">
                                                    <div className="col-md-4 col-sm-12 col-xs-12">
                                                    <Link to="/dashboard/deactivate/business/4" class="btn btn-danger btn-md"><i class="fas fa-lock"></i> Deactivate Account</Link>
                                                </div>
                                                <div className="col-md-4 col-sm-12 col-xs-12">
                                                    <Link to="/dashboard/deactivate/business/4" class="btn btn-info btn-md"><i class="fas fa-lock-open"></i> Re-activate Account</Link>
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
                                        <img src="https://i2-prod.walesonline.co.uk/incoming/article15213832.ece/ALTERNATES/s615/0_Tessuti1.jpg" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <div class="author">
                                            <a href="#">
                                            <img class="avatar border-gray" src="https://i2-prod.walesonline.co.uk/incoming/article15213832.ece/ALTERNATES/s615/0_Tessuti1.jpg" alt="..."/>
                                                <h5 class="title">Fashion Shop</h5>
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
                                    <hr/>
                                    <div class="button-container">
                                        <button href="#" class="btn btn-neutral btn-icon btn-round btn-lg">
                                            <i class="fab fa-facebook-square"></i>
                                        </button>
                                        <button href="#" class="btn btn-neutral btn-icon btn-round btn-lg">
                                            <i class="fab fa-twitter"></i>
                                        </button>
                                        <button href="#" class="btn btn-neutral btn-icon btn-round btn-lg">
                                            <i class="fab fa-google-plus-square"></i>
                                        </button>
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

export default Business;
