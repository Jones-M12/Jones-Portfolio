import React from "react";
// import ProjecetSelection from "./ProjectSelection";


function Projects() {
  return (
    <section className="colorlib-work" data-section="work">
  <div className="colorlib-narrow-content">
    <div className="row">
      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
        <span className="heading-meta">My Work</span>
        <h2 className="colorlib-heading animate-box">Recent Work</h2>
      </div>
    </div>
    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
      <div className="col-md-12">
        
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
        <div className="project" style={{backgroundImage: 'url(images/notesapp.png'}}>
          <div className="desc">
            <div className="con">
              Notes Application: Backend
              
              <span>
                <p>
                Allows a user to utilize an online notes application for writing, saving, and deleting notes.
                Easy to use application removes the need for handwritten notes that can be lost or easily damaged.
                Designed backend to support creating, saving, and deleting notes using local storage 
                </p>
                
                <p><strong>Technologies:</strong>  Node, Express, Handlebars, RESTful APIs, Heroku</p>
                </span>
               
                <br></br>
                
              <p className="icon">
                <span><a href="https://notes-application-jones.herokuapp.com/" target="_blank"><i className="icon-share3" />Demo</a></span>
                <span><a href="https://github.com/Jones-M12/Notes-Application-Jones" target="_blank"><i className="icon-eye" /> Github</a></span>
                
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
        <div className="project" style={{backgroundImage: 'url(images/disneypopquiz.PNG)'}}>
          <div className="desc">
            <div className="con">              
              Disney Pop Quiz: Frontend
              <span>                
              <p>
              Quiz that test the user's knowledge of classic Disney movies using a combination of multiple-choice questions and interactive challenges. 
              
              Built with the user in mine, featured a clean and polished user interface with responsiveness that adapts to different screen sizes.
              </p>
                <p><strong>Technologies:</strong> HTML, CSS, Bootstrap, JavaScript, Google Fonts, GitHub Pages.</p>
              </span>
              <p className="icon">
              <span><a href="https://jones-m12.github.io/Disney-Pop-Quiz/" target="_blank"><i className="icon-share3" />Demo</a></span>
              <span><a href="https://github.com/Jones-M12/Disney-Pop-Quiz.git" target="_blank"><i className="icon-eye" /> Github</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
        <div className="project" style={{backgroundImage: 'url(images/drink-a-smoothie-demo.png)'}}>
          <div className="desc">
            <div className="con">
              Drink A Smoothie: Backend and Frontend
              <span>
                A fun way to log and track yummy smoothies that have been gobbled up in your tummy or still waiting to be devoured.
                Built a smoothie logger with MySQL, Node, Express, Handlebars, and ORM. 
                Use MVC layout, Node, and MySQL to query and route data in your app. Use Handlebars for HTML. <strong>Technologies:</strong> HTML, CSS, JS, MVC, MySQL, Node, Express, Handlebars, ORM, RESTful APIs, Heroku, Bootstrap.
              </span>
              <p className="icon">
              <span><a href="https://peaceful-oasis-89026.herokuapp.com/" target="_blank"><i className="icon-share3" />Demo</a></span>
              <span><a href="https://github.com/Jones-M12/Drink-A-Smoothie.git" target="_blank"><i className="icon-eye" /> Github</a></span>
                
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
        <div className="project" style={{backgroundImage: 'url(images/foodacationdemo.png)'}}>
          <div className="desc">
            <div className="con">
              Foodacation: Frontend
              <span>
                <p>
                  Designed for your vacation needs! Use Foodaction while traveling to decide on eating in or dinning out.
                  User can toggle between the recipes or restaurants page.
                  Roles: Built frontend page layout and setup Zomato API to work for location search results.
                </p>
                                               
                <p><strong>Technologies:</strong> HTML, CSS, jQuery, Mongo Database, Zomato API, Spoonaclar API, Materialize.</p>

              </span>
              <p className="icon">
              <span><a href="https://tomay91.github.io/Foodacation-Project-1/" target="_blank"><i className="icon-share3" />Demo</a></span>
              <span><a href="https://github.com/tomay91/Group-Project-1" target="_blank"><i className="icon-eye" /> Github</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
        <div className="project" style={{backgroundImage: 'url(images/budgettracker.png)'}}>
          <div className="desc">
            <div className="con">
              Budget Tracker: IndexDB
              <span>
                
                  <p>Forget all about using a checkbook!
                  Use this online budget tracker that simplifies money management, by allowing uses to manage their funds anytime, even offline.

                  Built the offline support using IndexDB to allow uses to work seamlessly online or offline while adding expenses and deposits.</p>
                
                 <p><strong>Technologies:</strong> PWA, IndexDB, Serviceworker.</p>
                </span>
              <p className="icon">
              <span><a href="https://budgettrackerjones.herokuapp.com/" target="_blank"><i className="icon-share3" />Demo</a></span>
              <span><a href="https://github.com/Jones-M12/Budget-Tracker" target="_blank"><i className="icon-eye" /> Github</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
        <div className="project" style={{backgroundImage: 'url(images/fitnesstracker.png)'}}>
          <div className="desc">
            <div className="con">
              Fitness Tracker: Backend
              <span>
                <p>
                  Allows user to keep track of exercises completed and see exercise trends on the dashboard. 
                  
                  Created the backend of Fitness Tracker using Mongo and deploy on Heroku with Atlas. Implemented with a Mongoose schema and handle routes and Express.
                </p>
                
                
                <p><strong>Technologies:</strong> HTML, CSS, jQuery, Mongo Database, Mongoose Schema, RESTful APIs.</p>
              </span>
              <p className="icon">
              <span><a href="https://fitness-tracker-jones.herokuapp.com/?id=5f39cf61aa9b630017035604" target="_blank"><i className="icon-share3" />Demo</a></span>
              <span><a href="https://github.com/Jones-M12/Fitness-Tracker" target="_blank"><i className="icon-eye" /> Github</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
        <div className="project" style={{backgroundImage: 'url(images/beyondnotes.png)'}}>
          <div className="desc">
            <div className="con">
              Beyond Notes: MERN
              <span>               
              Designed for more. Create notes, events, see inspirational quotes, upload a photo, and add contacts.
              Role: Build Nav Menu, Image Uploader and Upload layout, Setup connection and schema for frontend/sever side login and register authentication, implement Cloudinary, Momenet.js. <strong>Technologies:</strong> HTML, CSS, jQuery, Mongo Database, Mongoose Schema, Cloudinary, Moment.js, Materialize, React Big Calendar, and more.

              </span>
              <p className="icon">
              <span><a href="https://beyondnotes.herokuapp.com/" target="_blank"><i className="icon-share3" />Demo</a></span>
              <span><a href="https://github.com/team4project3/BeyondNotes" target="_blank"><i className="icon-eye" /> Github</a></span>
                
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
        <div className="project" style={{backgroundImage: 'url(images/myfoodfriend-memberpage-nvabar.png)'}}>
          <div className="desc">
            <div className="con">              
              MyFoodFriend: Full Stack
              <span>                
                <p>Full Stack web application used to track your daily calories to help maintain weight loss goals.</p>
                <p>Role: Built frontend and backend</p>
                <strong>Technologies:</strong> HTML, CSS, JQuery, MVC, MySQL, Node, Express, Handlebars, Materialize, RESTful APIs, Heroku.
              </span>
              <p className="icon">
              <span><a href="https://myfoodfriend.herokuapp.com/" target="_blank"><i className="icon-share3" />Demo</a></span>
              <span><a href="https://github.com/Jones-M12/MyFoodFriend.git" target="_blank"><i className="icon-eye" /> Github</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 animate-box">
        <p></p>
      </div>
    </div>
  </div>
</section>

  );
}

export default Projects;