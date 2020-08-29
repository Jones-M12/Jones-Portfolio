import React, { Component } from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar';
import Home from './components/Home'
import Skills from './components/Skills';
import Projects from './components/Projects';



class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<SideNavBar></SideNavBar>
				<div id="colorlib-main">
          <Home></Home>
          <Skills></Skills>
					<Projects></Projects>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
