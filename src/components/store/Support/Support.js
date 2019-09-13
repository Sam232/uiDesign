import React, { Component } from 'react';
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

    render() {
        const SweetAlert = withSwalInstance(swal)

        return (
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> Helpline</span>} />
                    <div className="panel-header panel-header"> 
                        <div className="header text-center">
                            <h2 className="title"><i className="fas fa-headset"></i> Usage Support</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Submit your questions and receive your answers in less 24 hours.</p>
                        </div> 
                    </div>
                    <div className="content">
                        <div class="row mt--100">
                            <div class="col-md-12">
                            <div class="card ">    
                                <div class="card-header mx-auto">
                                    <h4 class="card-title text-center" style={{color: "#153254"}}> Need Help <i className="far fa-question-circle"></i></h4>
                                    <ul class="nav nav-pills nav-pills-primary center" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-toggle="tab" href="#link1" role="tablist" style={{backgroundColor: "#153254", color: "#FFFFFF"}}>
                                                Submit Question
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link " data-toggle="tab" href="#link2" role="tablist" style={{backgroundColor: "#153254", color: "#FFFFFF"}} >
                                                View Responses
                                            </a>
                                        </li>
                                    </ul>
                                </div>                    
                                <div class="card-body ">  
                                
                                    
                                    <div class="tab-content tab-space col-md-12 mx-auto">
                                    
                                        <div class="tab-pane active" id="link1">
                                        <div class="col-sm-12">
                                                <div class="form-group ">
                                                    <label>Subject</label>
                                                    <input type="text" class="form-control" placeholder="Subject (required)" name="businessName" value=""/>
                                                </div>

                                                <div class="form-group ">
                                                    <label>Brief Question</label>
                                                    <textarea type="text" placeholder="Question  (required)" class="form-control" name="fbPage" >
                                                    </textarea>
                                                </div>
                                                <div>
                                                <input type='button' class='btn btn-info btn-sm' style={{backgroundColor: "#153254", color: "#FFFFFF"}} name='next' onClick={() => {
                                                    this.setState({showModal: true})
                                                }} value='Submit' />
                                                <SweetAlert
                                                    show={this.state.showModal}
                                                    title= '<p class="text-dark"><span><i class="fa fa-bullhorn"></i></span> Response</p>'
                                                    html= '<h6>Question submitted</h6>'
                                                    confirmButtonClass= 'btn btn-info'
                                                    confirmButtonText= 'Okay'
                                                    buttonsStyling= {false}
                                                />
                                                
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="link2">
                                        <div class="card">
                                    <div class="card-body">
                                    <div id="accordion" role="tablist" aria-multiselectable="true" class="card-collapse">
                                        <div class="card card-plain">
                                        <div class="card-header" role="tab" id="headingOne">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <h6>Why should I use Manilla?</h6>

                                                <i class="now-ui-icons arrows-1_minimal-down" style={{color: "blue"}}></i>
                                            </a>
                                        </div>

                                        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                            <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                        </div>
                                        <div class="card card-plain">
                                        <div class="card-header" role="tab" id="headingTwo">
                                            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <h6>How will Manilla help me to receive E-money?</h6>

                                                <i class="now-ui-icons arrows-1_minimal-down" style={{color: "blue"}}></i>
                                            </a>
                                        </div>
                                        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                        </div>
                                        <div class="card card-plain">
                                            <div class="card-header" role="tab" id="headingThree">
                                                <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <h6>Can I integrate Manilla directly into my online store?</h6>

                                                    <i class="now-ui-icons arrows-1_minimal-down" style={{color: "blue"}}></i>
                                                </a>
                                            </div>
                                            <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
                                                <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                            </div>
                                            <div class="card card-plain">
                                                <div class="card-header" role="tab" id="headingThree">
                                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        <h6>Who can use Manilla?</h6>

                                                        <i class="now-ui-icons arrows-1_minimal-down" style={{color: "blue"}}></i>
                                                    </a>
                                                </div>
                                                <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
                                                    <div class="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            </div>
                        </div>
                    <Footer />
                </div>
            </div>
        </div>
        )
    }
}

export default Support