import React from 'react';

import {BrowserRouter as Router,Switch} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"
import SideDrawer from "./components/SideDrawer/SideDrawer"
import Backdrop from "./components/Backdrop/Backdrop"
import Home from "./components/Home/Home"
import Portfolio from "./components/Portfolio/Portfolio"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

class App extends React.Component{
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState(function(prevState){
      return{
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    })
  }

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    })
  }

  render(){
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
        {backdrop}

        <Switch>
          <Router exact path="/">
              <Home />
          </Router>
          <Router path="/Portfolio">
              <Portfolio />
          </Router>
          <Router path="/Skills">
              <Skills />
          </Router>
          <Router path="/Contact">
             <Contact />
          </Router>
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
