import React, { Component } from "react";
import logo from "../../manilla.png";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Navbar from "../Dashboard/Navbar/Navbar";
import Footer from "../Dashboard/Footer/Footer";
import PanelHeader from "../Dashboard/PanelHeader/PanelHeader";
import TransactionDetails from "./TransactionDetails";

class Transaction extends Component{
    state = {}

    render(){
        
        return(
            <div className="wrapper" >
              {/*Sidebar */}
              <Sidebar logo={logo}/>

              <div className="main-panel" id="main-panel">
                {/*Navbar */}
                <Navbar />
                
                <PanelHeader stat={"12/03/19 - 20/03/19 "} />

                <TransactionDetails />

                {/*Footer */}
                <Footer />            
              </div>
              
            </div>           
        );
    }
}

export default Transaction;