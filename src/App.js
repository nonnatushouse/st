import React, { Component } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css"; 
import Timer from "./Timer/Timer";
import banner from "./Images/st_banner2023.jpg"


class App extends Component {
  state = { menuIsExpanded: false };

  toggleSidebarMenu() {
    this.setState(prevState => ({ menuIsExpanded: !prevState.menuIsExpanded }));
  }

  getTargetDate(){
    const currDate = new Date()

    const st2023 = Date.UTC(2023, 8, 1, 8, 0, 0);
    const st2024 = Date.UTC(2023, 8, 1, 8, 0, 0);

    const startHasPassed = st2023 - currDate;
    if (!startHasPassed) {
      return st2023;
    } else {
      return st2024;
    }
    ;
  }
  //npx run subs
  render() {
    return (
      <>
      <img className="banner" src={banner} alt="Sicktember 2023 banner"></img>
      <div className="timer-container">
        <Timer targetDate={this.getTargetDate()} title="Time until Sicktember 2023 starts:" />
      </div>
      
        <div className="page-container">
        <BrowserRouter>
        <Routes>          
          <Route path="/" render={() => <Timer targetDate={this.getTargetDate()} title="Time until Sicktember 2023 starts:" />} />
        </Routes>
        </BrowserRouter>
        </div>


      </>
    );
  }
}

export default App;
