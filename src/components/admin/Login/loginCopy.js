import React, { Component } from "react";
import logo from "../../manilla.png"
import "./Login.css"

class Login extends Component{
   state = {

   }

    render(){
        const { email, password, errorMsg } = this.state;

        return(
            <div class="wrapper wrapper-full-page ">
    <div class="full-page login-page section-image" filter-color="black" data-image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80">
        <div class="content">
            <div class="container">
                <div class="col-md-4 ml-auto mr-auto">
                    <form class="form" method="" action="#">
<div class="card card-login card-plain">
    
    <div class="card-header ">
    <div class="logo-container">
                            <img style={{width:"100px"}} src={logo} alt=""/>
                        </div>
    </div>
    
    <div class="card-body ">        
            <div class="input-group no-border form-control-lg">
                                <span class="input-group-prepend">
                                  <div class="input-group-text">
                                    <i class="now-ui-icons users_circle-08"></i>
                                  </div>
                                </span>
                                <input type="text" class="form-control" placeholder="First Name..."/>
                              </div>

                              <div class="input-group no-border form-control-lg">
                                <div class="input-group-prepend">
                                  <div class="input-group-text">
                                    <i class="now-ui-icons text_caps-small"></i>
                                  </div>
                                </div>
                                <input type="text" placeholder="Last Name..." class="form-control"/>
                              </div>
        

        
    </div>
    
    
    
                            <div class="card-footer ">
                                <a href="#pablo" class="btn btn-primary btn-round btn-lg btn-block mb-3">Get Started</a>
                                                <div class="pull-left">
                                                    <h6><a href="#pablo" class="link footer-link">Create Account</a></h6>
                                                </div>

                                                <div class="pull-right">
                                                <h6><a href="#pablo" class="link footer-link">Need Help?</a></h6>
                                                </div>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <footer class="footer" >
    
    <div class=" container-fluid ">
        <nav>
            <ul>
                <li>
                    <a href="https://www.creative-tim.com/">
                        Creative Tim
                    </a>
                </li>
                <li>
                    <a href="http://presentation.creative-tim.com/">
                       About Us
                    </a>
                </li>
                <li>
                    <a href="http://blog.creative-tim.com/">
                       Blog
                    </a>
                </li>
            </ul>
        </nav>
        <div class="copyright" id="copyright">
            &copy; {/* <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script>, Designed by <a href="https://www.invisionapp.com/" target="_blank">Invision</a>. Coded by <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a>. */}
        </div>
    </div>
    


</footer>

    </div>

          
        </div>
        );
    }

}

export default Login;