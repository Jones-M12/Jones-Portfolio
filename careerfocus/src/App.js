import React, { Component } from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar';
import Home from './components/Home'



class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<SideNavBar></SideNavBar>
				<div id="colorlib-main">
          <Home></Home>
					
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
