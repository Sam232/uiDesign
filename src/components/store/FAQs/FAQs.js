import React, { Component } from 'react';
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import logo from "../../manilla.png";
import Navbar from "../Dashboard/Navbar/Navbar";
import Footer from '../Dashboard/Footer/Footer';

class FAQs extends Component {
    render() {
        return (
            <div className="wrapper">
                <Sidebar logo={logo}/>
                <div className="main-panel" id="main-panel">
                    <Navbar navbarName= {<span><i className="fas fa-arrow-right" ></i> FAQs</span>} />
                    <div className="panel-header panel-header"> 
                        <div className="header text-center">
                            <h2 className="title"><i className="fa fa-bullhorn"></i> Frequently Asked Questions</h2>
                            <p className="category" style={{marginTop: "-25px"}}>Answers to frequently asked questions that are related Manilla .</p>
                        </div> 
                    </div>
                    <div className="content">
                        <div class="row mt--100">
                            <div class="col-md-12">
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
                    <Footer />
                </div>
            </div>
        </div>
        )
    }
}

export default FAQs
