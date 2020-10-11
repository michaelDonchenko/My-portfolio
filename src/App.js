import React, {useEffect, Fragment} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage';
import About from './pages/About';




function App() {

  return (
    <Router>
      <div className="App">
       <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/projects" component={ProjectsPage}/>
            <Route exact path="/about" component={About}/>
          </Switch>
       <Footer />
      </div>
   </Router>
    
  );
}

export default App;
