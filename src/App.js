import React from 'react';

import Navbar from "./components/Navbar/Navbar"

class App extends React.Component{
  state = {
    showSideDrawer: false
  }

    
  drawerToggleClickHandler = () => {
    console.log(!this.state.showSideDrawer)
    this.setState(function(prevState){
      return{
        showSideDrawer: !prevState
      }
    })
  }


  render(){
    return (
      <div>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
      </div>
    );
  }
}

export default App;
