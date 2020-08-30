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
              Notes Application
              
              <span>
                <p>Allows a user to utilize an online notes application for writing, saving and deleting notes.
                Easy to use application removes the need for hand written notes that can be lost or easily damaged.
                Designed to input notes that are saved to local storage and can be deleted when ready.</p>
                
                <p><strong>Technologies:</strong>  Node, Express, Handlebars, RESTful APIs, Backend, Heroku</p>
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
        <div className="project" style={{backgroundImage: 'url(images/myfoodfriend-memberpage-nvabar.png)'}}>
          <div className="desc">
            <div className="con">              
              MyFoodFriend
              <span>                
                Full Stack web application used to track your daily calories to help maintain weight loss goals.
                The user can enter food eaten througout the day. On sumbit, the food item is logged, as well as the calories.
                Food items can be deleted when no longer needed or if entered in the wrong meal section.
                
               
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
      <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
        <div className="project" style={{backgroundImage: 'url(images/drink-a-smoothie-demo.png)'}}>
          <div className="desc">
            <div className="con">
              Drink A Smoothie
              <span>
                <p>A fun way to log and track yummy smoothies that have been gobbled up in your tummy or still waiting to be devoured.
                  User will input a smootie which is logged in the uneaten category. Each smoothie with a button to toggle between uneatern and devoured sections.
                </p>                                
                <strong>Technologies:</strong> HTML, CSS, JS, MVC, MySQL, Node, Express, Handlebars, ORM, RESTful APIs, Heroku, Bootstrap
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
              Foodacation
              <span>
                <p>
                  Designed for your vacation needs! Use Foodaction while traveling to decide on eating in or dinning out.
                  User can toggle between the receipes or restaurants page.
                  Each page contains a input field and search button. On click, the results display on the right side of the page.
                </p>
                                               
                <p><strong>Technologies:</strong> HTML, CSS, JQuery, Mongo Database, Zomato API, Spoonaclar API, Materialize</p>
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
              Budget Tracker
              <span>
                
                  Forget all about using a checkbook!
                  Use this online budget tracker that simplifies money management, by allowing uses to manage their funds anytime, even offline.
                
                  User can add expenses and deposits to their budget with or without a connection.
                  When entering transactions offline, they will populate the total when brought back online.
                
                
                
                <strong>Technologies:</strong> HTML, CSS, JS, Mongo Database, Mongoose Schema, RESTful APIs, PWA, IndexDB, Serviceworker.
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
              Fitness Tracker
              <span>
                <p>
                  Allows user to keep track of exercises completed and see excercise trends on the dashboard. 
                  User will log excercise performed. This data will be added to the overall excercises, showing duration, excercise type, and used to show stats in the workout dashboard.

                </p>
                
                
                <p><strong>Technologies:</strong> HTML, CSS, JQuery Mongo Database, Mongoose Schema, RESTful APIs.</p>
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
              Beyond Notes
              <span>
                <p>A fun way to log and track yummy smoothies that have been gobbled up in your tummy or still waiting to be devoured.
                  User will input a smootie which is logged in the uneaten category. Each smoothie with a button to toggle between uneatern and devoured sections.
                </p>                                
                <strong>Technologies:</strong> HTML, CSS, JS, MVC, MySQL, Node, Express, Handlebars, ORM, RESTful APIs, Heroku, Bootstrap
              </span>
              <p className="icon">
              <span><a href="https://beyondnotes.herokuapp.com/" target="_blank"><i className="icon-share3" />Demo</a></span>
              <span><a href="https://github.com/team4project3/BeyondNotes" target="_blank"><i className="icon-eye" /> Github</a></span>
                
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