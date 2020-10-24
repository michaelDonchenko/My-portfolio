import React from 'react'
import '../css/pages/about.css'

const About = () => {
  return (
    <div className="container aboutPage">
      <h2 className="mt-4 mb-4">About Page</h2>
      <div className="personl_Info">
        
        <div class="card">
          <div class="card-body">
           <h3 className="card-title mb-4">Personal Info:</h3>
           <h5 className="card-subtitle mb-2 text-muted">A little bit about myself</h5>
            <p>Hi my name is Michael Donchenko, I am 26 years old from tel-aviv, currently I am a web development student.</p>
            <p> Before programming I used to be a personal trainer for a few years after the army.</p>
            <p>I discovered my passion for programing kind of by mistake, during a curse I took for cyber security at see-security college.</p>
            <p>Since then I have learned at home everything by myself, mostly from udemy courses and youtube and now I am more than ready to start my first job as a web developer.</p> 
          </div>
        </div>

        <div class="card">
          <div class="card-body">
           <h3 className="card-title mb-4">My Skills:</h3>
           <h5 className="card-subtitle mb-2 text-muted">Frontend</h5>
           <p>HTML, CSS, JS, React</p>
           <p>CSS Frameworks: Bootstrap, Bootstrap Material, Materialize</p>
           <p>JS: All new JS features ES6/7/8</p>
           <p>React: Modern react 16.8+ , React Hooks, Context API, React-Router, Redux</p>
           <h5 className="card-subtitle mb-2 mt-4 text-muted">Backend</h5>
            <p>NodeJS, Express, MongoDB, RestAPI</p>
            <p>Git, Github, Version-Controll</p>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default About
