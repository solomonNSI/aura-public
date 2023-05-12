import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link 
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About project
          </Link>
          <Link 
            activeClass="active"
            to="reports"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Reports
          </Link>
          <Link 
            activeClass="active"
            to="team"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Team
          </Link>
          <Link 
            activeClass="active"
            to="logbook"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Logbook
          </Link>
          <a 
            href="http://demo.aurapalette.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </nav>
      </header>
      
      <section id="about">
        <h1>About Project</h1>
        <p>This is the about section...</p>
      </section>
      
      <section id="reports">
        <h1>Reports</h1>
        <p>This is the reports section...</p>
      </section>
      
      <section id="team">
        <h1>Team</h1>
        <p>This is the team section...</p>
      </section>
      
      <section id="logbook">
        <h1>Logbook</h1>
        <p>This is the logbook section...</p>
      </section>

      <section id="demo">
        <h1>Demo</h1>
        <p>This is the demo section...</p>
      </section>

      <footer className="App-footer">
        <p>This is a simple footer...</p>
      </footer>
    </div>
  );
}

export default App;
