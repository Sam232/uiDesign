import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../manilla.png"
import "./Login.css"

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            errorMsg: ""
        };
    }

    //call getStateDerivedFromProps

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    //validate forms
    validateForms = e => {
        e.preventDefault()

        const { email, password } = this.state;
        const { history } = this.props;

        if(!email){
            return this.setState({
                errorMsg: "Email Address Is Required"
            });
        }

        if(!password){
            return this.setState({
                errorMsg: "Password Is Required"
            });
        }

        console.log(this.state)

        //dispatch action to auth
        
        //
        history.push("/dashboard")
    }

    render(){
        const { email, password, errorMsg } = this.state;

        return(
            <div className="">
                {/* Desktop view */}
                <div className="d-none d-none d-lg-block d-xl-block">
                    <div class="form-body">
                    <div class="website-logo">
                        <a href="index.html" style={{textDecorationColor: "#000000"}}>
                            <div className="">
                                <img class="logo-size" src={logo} style={{marginLeft: "170px", marginRight: "50px", marginTop: "200px"}} alt=""/>
                                <h4 className="text-white" style={{marginLeft: "115px"}}>Manilla Checkout</h4>
                            </div>
                        </a>
                    </div>
                    <div class="row">
                        <div class="img-holder">
                            <div class="bg"></div>
                            <div class="info-holder">

                            </div>
                        </div>
                        <div class="form-holder ">
                            <div class="form-content " style={{height: "145%", backgroundColor: "#23466F"}}>
                                <div class="form-items">
                                  <h3>Get more things done with Manilla checkout.</h3>
                                    <p>Access the most powerful tool in the entire checkout ecosystem.</p>
                                    <div class="page-links">
                                        <a href="#">Login To Manilla</a>
                                    </div>
                                    <form>
                                        <input class="form-control" type="text" name="username" placeholder="E-mail Address" required/>
                                        <input class="form-control" type="password" name="password" placeholder="Password" required/>
                                        </form>
                                        {/* <div class="form-button">
                                            <button id="submit" type="submit" style={{color: "#23466F"}} class="ibtn"> <i className="fa fa-sign-in-alt"></i> Login</button> <Link to="/admin/forgot-password">Forgot password?</Link>
                                        </div> */}
                                        <div class="form-button">
                                            <Link to="/dashboard/statistics/today-stat" style={{color: "#23466F"}} class="ibtn"> <i className="fa fa-sign-in-alt"></i> Login</Link> <Link to="/admin/forgot-password">Forgot password?</Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* Tablet view */}
                <div className="d-none d-md-block d-lg-none">
                    <div class="wrapper wrapper-full-page ">
                        <div class="full-page lock-page section-image" filter-color="blue">
                            <div class="content">
                                <div class="container">
                                    <div class="col-md-12 ml-auto mr-auto">  
                                        <div class="card card-lock text-center">    
                                            <form>
                                                <div class="card-header">
                                                    <img src={logo} alt="..."/>
                                                </div>                        
                                                <div class="card-body">                            
                                                    <h4 class="card-title">Get more things done with Manilla checkout.</h4>
                                                    <div class="form-group">
                                                    <div class="page-links">
                                                        <a href="#">Login To Manilla</a>
                                                    </div>
                                                        <input type="password" class="form-control" placeholder="Enter Email Address"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="password" class="form-control" placeholder="Enter Password"/>
                                                    </div> 
                                                </div>
                                                <div class="card-footer ">
                                                    <button class="btn btn-round btn-lg" style={{backgroundColor: "#23466F"}}><i className="fa fa-sign-in-alt"></i> Login</button> <Link to="/admin/forgot-password">Forgot password?</Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer class="footer" ></footer>
                        </div>
                    </div>
                </div>
                {/* Mobile view */}
                <div className="d-block d-sm-none d-none d-sm-block d-md-none">
                <div class="wrapper wrapper-full-page ">
                        <div class="full-page lock-page section-image" filter-color="blue">
                            <div class="content">
                                <div class="container">
                                    <div class="col-md-12 ml-auto mr-auto">  
                                        <div class="card card-lock text-center">    
                                            <form>
                                                <div class="card-header">
                                                    <img src={logo} alt="..."/>
                                                </div>                        
                                                <div class="card-body ">                            
                                                    <h4 class="card-title">Get more things done with Manilla checkout.</h4>
                                                    <div class="form-group">
                                                        <h4 className="text-center">Login Here</h4>
                                                        <input type="email" class="form-control" placeholder="Enter Email Address"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="password" class="form-control" placeholder="Enter Password"/>
                                                    </div> 
                                                </div>
                                                <div class="card-footer ">
                                                    <button class="btn btn-round btn-lg" style={{backgroundColor: "#23466F"}}><i className="fa fa-sign-in-alt"></i> Login</button> <Link to="/admin/forgot-password">Forgot password?</Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer class="footer" ></footer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;