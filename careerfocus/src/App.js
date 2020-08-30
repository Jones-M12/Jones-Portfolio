import React, { Component } from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar';
import Home from './components/Home'
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';



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
          <ContactMe></ContactMe>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
