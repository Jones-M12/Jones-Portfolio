

import React from "react";

function Home() {
    return (
        <div>
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
                
                <div className="flexslider js-fullheight">
                    <ul className="slides">
                    <li style={{backgroundColor: '#e6ded1'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner js-fullheight">
                                <div className="desc">
                                <h1>Hi! <br />I'm Malesha</h1>                                
                                <p><a href="https://drive.google.com/file/d/1p_xtYILLh8rULDDxDJ81_vAH3IiT6zpB/view?usp=sharing" target="_blank" className="btn btn-primary btn-learn">Resume<i className="icon-download4" /></a></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li style={{backgroundColor: '#e6ded1'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                        <div className="row">
                            <div className=" col-sm-12  js-fullheight slider-text">
                            <div className="slider-text-inner">
                                <div className="desc">
                                <h2><strong>Hello there. Welcome!</strong></h2>
                                <p><strong>Who am I you wonder? </strong> I am Malesha, an adveneturer who loves diving into the depths of technology.
                                    Throughout my explorations of success, I have become a Information System Project Management gradute from Strayer University that has
                                    transistion into a Full Stack Web Developer from UNC Chapel Hill.
                                </p>

                                <br></br>
                                
                                <p>
                                    I love exploring and understanding new technologies. It is exciting to understand how they work and how they can be used,
                                    then taking that knowledge to create and implement new innovations. I spend most of my time learning, developing, and solving complex
                                    problems through new experiences, being hands on, and pushing myself through any challenges before me.
                                </p>

                                <br></br>

                                <p>
                                   Through these experiences and my passion for technology, I continue to hone my skills and add value to my professional career that 
                                   can be used within today's fast-evolving world of technology.                                                                                                
                                </p>


                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
            </section>
        </div>
        );

  
}

export default Home;