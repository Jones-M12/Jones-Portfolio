import React from "react";

function SideNavBar() {
      return (
       <div> 
        <div >
          <nav  href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/profimage4.jpg)'}} />
              <h1 id="colorlib-logo" ><a href="index.html">Malesha Jones</a></h1>
              <span className="position"><a href="#">Full Stack Web Developer</a></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="" data-nav-section="home">Introduction</a></li>                                    
                  <li><a href="#" data-nav-section="skills">Skills</a></li>                                  
                  <li><a href="#" data-nav-section="work">Projects</a></li>  
                  <li><a href="#" data-nav-section="contact">Contact</a></li>                
                  
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>                                
                <li><a href="https://www.linkedin.com/in/m-jones89/" target="_blank" rel="noopener noreferrer"><h4><i className="icon-linkedin2" /></h4></a></li>
                <li><a href="https://github.com/Jones-M12" target="_blank" rel="noopener noreferrer"><h4><i className="icon-github"></i></h4></a></li>
                
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                <i className="icon-heart" aria-hidden="true" /> 
                    <span></span></small></p>
              
            </div>
          </aside>
        </div>
       </div> 
      );
    }
  export default SideNavBar;