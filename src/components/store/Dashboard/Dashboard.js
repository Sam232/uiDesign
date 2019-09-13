import React, { Component } from "react";
import logo from "../../manilla.png";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import TodayStat from "../Transactions/Statistics/TodayStatistics";
import YesterdayStat from "../Transactions/Statistics/YesterdayStatistics";
import YearStat from "../Transactions/Statistics/YearStatistics";
import MonthStat from "../Transactions/Statistics/MonthStatistics";
import Footer from "./Footer/Footer";
import PanelHeader from "./PanelHeader/PanelHeader";

class StoreDashboard extends Component{
    state = {}

    showStatistics = () => {
      const statsName = this.props.match.params.statsName;
      
      if(statsName == "today-stat"){
        return (
          <React.Fragment>
              <PanelHeader stat={"Today"} />
              <TodayStat />
          </React.Fragment>
        );
      }
      else if(statsName == "yesterday-stat"){
        return (
          <React.Fragment>
              <PanelHeader stat={"Yesterday"} />
              <YesterdayStat />
          </React.Fragment>
        );
      }
      else if(statsName == "year-stat"){
        return (
          <React.Fragment>
              <PanelHeader stat={"The Year"} />
              <YearStat />
          </React.Fragment>
        );
      }
      else if(statsName == "month-stat"){
        return (
          <React.Fragment>
              <PanelHeader stat={"The Month"} />
              <MonthStat />
          </React.Fragment>
        );
      }
    }

    render(){
        
        return(
            <div className="wrapper" style={{height: "0px"}}>
              {/*Sidebar */}
              <Sidebar logo={logo}/>

              <div className="main-panel" id="main-panel">
                {/*Navbar */}
                <Navbar />
                {
                  this.showStatistics() 
                }

                {/*Footer */}
                <Footer />            
              </div>
              
            </div>           
        );
    }
}

export default StoreDashboard;