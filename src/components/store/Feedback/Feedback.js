import React, { Component } from "react";
import { Link } from  "react-router-dom";
import logo from "../../manilla.png"
import "./Feedback.css"

class Feedback extends Component{
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
                                                <h3 style={{color: "#153254"}}>Get more things done with Manilla checkout.</h3>     
                                                <p style={{marginTop:"-35px", color: "#153254"}}>Access the most powerful tool in the entire checkout ecosystem.</p>
                                    <div class="page-links">
                                        <a href="#" class="">Register To Start Manilla</a>
                                    </div><br />
                                                    <div className="form-group">
                                                    <input class="form-control" type="text" name="username" placeholder="Business Name" style={{backgroundColor: "#E7E9FE"}} required/>
                                        
                                                    </div>                     
                                                <div className="form-group">
                                            <input class="form-control" type="email" name="businessEmail" placeholder="Business Email" style={{backgroundColor: "#E7E9FE"}} required/>
                                        </div>
                                        <div className="form-group ">
                                        <select class="form-control" style={{backgroundColor: "#E7E9FE", borderRadius: "5px"}}>
                                            <option selected style={{backgroundColor: "#23466F"}}>-- Business Type ---</option>
                                            <option>Institution</option>
                                            <option>Online Store</option>
                                        </select>
                                        </div>
                                        <div className="form-group">
                                            <input class="form-control" type="text" name="storeUrl" placeholder="Business URL" style={{backgroundColor: "#E7E9FE"}} required/>
                                        </div>
                                        <div className="form-group">
                                            <input class="form-control" type="text" name="fbUrl" placeholder="Facebook Page URL" style={{backgroundColor: "#E7E9FE"}} required/>
                                        </div>
                                        <div className="form-group">
                                            <textarea class="form-control" type="text" name="storeDescription" placeholder="Brief description about your business" style={{backgroundColor: "#E7E9FE"}}>

                                            </textarea>
                                        </div>
                                        <div class="form-button">
                                            <button id="submit" type="submit" class="btn btn-round btn-lg" style={{backgroundColor: "#23466F"}}> <i className="fa fa-sign-in-alt"></i> Register</button> {' '}<Link to="/business/login">Already A Member?</Link>
                                        </div>
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
                                                <div class="card-body ">
                                                <p>Access the most powerful tool in the entire checkout ecosystem.</p>
                                    <div class="page-links">
                                        <a href="#" class="">Register To Start Manilla</a>
                                    </div><br />
                                                    <div className="form-group">
                                                    <input class="form-control" type="text" name="username" placeholder="Business Name" style={{backgroundColor: "#E7E9FE"}} required/>
                                        
                                                    </div>                            
                                                <div className="form-group">
                                            <input class="form-control" type="email" name="businessEmail" placeholder="Business Email" style={{backgroundColor: "#E7E9FE"}} required/>
                                        </div>
                                        <div className="form-group ">
                                        <select class="form-control" style={{backgroundColor: "#E7E9FE", borderRadius: "5px"}}>
                                            <option selected style={{backgroundColor: "#23466F"}}>-- Business Type ---</option>
                                            <option>Institution</option>
                                            <option>Online Store</option>
                                        </select>
                                        </div>
                                        <div className="form-group">
                                            <input class="form-control" type="text" name="storeUrl" placeholder="Business URL" style={{backgroundColor: "#E7E9FE"}} required/>
                                        </div>
                                        <div className="form-group">
                                            <input class="form-control" type="text" name="fbUrl" placeholder="Facebook Page URL" style={{backgroundColor: "#E7E9FE"}} required/>
                                        </div>
                                        <div className="form-group">
                                            <textarea class="form-control" type="text" name="storeDescription" placeholder="Brief description about your business" style={{backgroundColor: "#E7E9FE"}}>

                                            </textarea>
                                        </div>
                                        <div class="form-button">
                                            <button id="submit" type="submit" class="btn btn-round btn-lg" style={{backgroundColor: "#23466F"}}> <i className="fa fa-sign-in-alt"></i> Register</button> <Link to="/business/login">Already A Member?</Link>
                                        </div>
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
                                                <p>Access the most powerful tool in the entire checkout ecosystem.</p>
                                    <div class="page-links">
                                        <a href="#" class="">Register To Start Manilla</a>
                                    </div><br />
                                                    <div className="form-group">
                                                    <input class="form-control" type="text" name="username" placeholder="Business Name" style={{backgroundColor: "#E7E9FE"}} required/>
                                        
                                                    </div>                     
                                                <div className="form-group">
                                            <input class="form-control" type="email" name="businessEmail" placeholder="Business Email" style={{backgroundColor: "#E7E9FE"}} required/>
                                        </div>
                                        <div className="form-group ">
                                        <select class="form-control" style={{backgroundColor: "#E7E9FE", borderRadius: "5px"}}>
                                            <option selected style={{backgroundColor: "#23466F"}}>-- Business Type ---</option>
                                            <option>Institution</option>
                                            <option>Online Store</option>
                                        </select>
                                        </div>
                                        <div className="form-group">
                                            <input class="form-control" type="text" name="storeUrl" placeholder="Business URL" style={{backgroundColor: "#E7E9FE"}} required/>
                                        </div>
                                        <div className="form-group">
                                            <input class="form-control" type="text" name="fbUrl" placeholder="Facebook Page URL" style={{backgroundColor: "#E7E9FE"}} required/>
                                        </div>
                                        <div className="form-group">
                                            <textarea class="form-control" type="text" name="storeDescription" placeholder="Brief description about your business" style={{backgroundColor: "#E7E9FE"}}>

                                            </textarea>
                                        </div>
                                        <div class="form-button">
                                            <button id="submit" type="submit" class="btn btn-round btn-lg" style={{backgroundColor: "#23466F"}}> <i className="fa fa-sign-in-alt"></i> Register</button> <Link to="/business/login">Already A Member?</Link>
                                        </div>
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

export default StoreLogin;