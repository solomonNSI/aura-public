import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css';
import { saveAs } from 'file-saver';
import aura from './images/aura.png';
import team from './images/team.jpeg';

const App = () => {
  const handleDownload = () => {
    const fileUrl = 'Reports/T2313_Detailed_Design_Report.pdf';
    const fileName = 'desired_file_name.pdf';
    saveAs(fileUrl, fileName);
  };
  return (
    <div className="App">
      <header className="App-header">
          <p>aura</p>
        <a href="https://demo.aurapalette.app/">Try the Demo</a>
      </header>
      <div className="gradientLine" />
      <section className="appSection" id="about">
        <div className='title'>The Aura Palette: where words radiate with colors.</div>
        <div className="headerSection">
            <div className="intro">
                In a flourishing world of designers, where creativity knows no bounds, 
                Aura Palette emerges as the ultimate companion. With an abundance of 
                creative minds seeking exceptional designs, our innovative tool harnesses the 
                power of modern ML technology to inspire and elevate your artistic journey.
                 Discover captivating color palettes, unlock hidden depths in your designs, 
                 and make your mark in the realm where language and art unite. 
                 Aura Palette: Empowering designers to create extraordinary masterpieces.
            </div>
            <div>
              <img src={aura} alt="Image" className="image" />
            </div>
        </div>
      </section>

      <section className="appSection" id="about">
        <div className="headerSection">
            <div className="aboutText">
                <div className='flexbox-right'>           
                    <div className='textSection'>
                        <div className="bulletPoint">Experience the Marvels of Language and Art</div>
                        <div>You are invited to a world at the intersection of language and art, where The Aura Palette reigns supreme! Experience the marvels of this groundbreaking project that reshapes the way we perceive and engage with text.</div>
                    </div>
                    <div className='colorStrip1'/>
                </div>
                <div className='flexbox'>         
                    <div className='colorStrip2'/>  
                    <div className='textSection'>
                        <div className="bulletPoint2">Breathing Life into Words</div>
                        We introduce a revolutionary tool that breathes life into words, transforming them into vibrant and captivating colors. Powered by cutting-edge artificial intelligence and natural language processing, The Aura Palette invites creative professionals, writers, designers, and artists of all kinds to effortlessly translate their literary masterpieces, brand identities, or even abstract thoughts into stunning color palettes.
                    </div> 
                </div>
                <div className='flexbox-right'>           
                    <div className='textSection'>
                        <div className="bulletPoint">Beyond Conventional Tools</div>
                        But it doesn't stop there. The Aura Palette goes beyond conventional tools by offering a selection of mediums to suit your creative projects while also recognizing the importance of accessibility and inclusivity. With its innovative features, you can simulate different types of color blindness, ensuring your creations are visually impactful for all audiences. The Aura Palette empowers you to create with a sense of responsibility, embracing diversity and fostering a deeper connection with every viewer.
                    </div>  
                    <div className='colorStrip3'/>
                </div>
                <div className='flexbox'>         
                    <div className='colorStrip4'/>  
                    <div className='textSection'>   
                        <div className="bulletPoint">An Awe-inspiring Journey</div>
                        Embark on an awe-inspiring journey where words and colors unite to shape extraordinary narratives. Join us in this dynamic fusion of art and technology, where the boundaries of creativity are transcended.<br/><br/>
                    </div> 
                </div>
            </div>
        </div>
    
      </section>

      <section className="appSection" id="team">
        <h1>Meet Our Team</h1>
        <p className = "description">This is Team Aura. Knowing each other, staying in communication, and helping each other made us a good team. Periodic meetings and roadmaps helped us achieve our goals.</p>
        <img src={team} alt="Image" className="image"/>
        <p style={{fontStyle: 'italic'}}> from left to right: </p>
        <div className="members">
          <div className="member">
            <h2 className="name">Suleyman Hanyyev</h2>
            <p className="position">Team Lead & ML Engineer</p>
            <p className="work">Our dynamic R&D engineer, guiding success with expertise in ML engineering.</p>
            <a href="https://auraslogbook.vercel.app/logbooks/solomon">Logbook</a>
          </div>
          <div className="member">
            <h2 className="name">Ayda Yurtoğlu</h2>
            <p className="position">Front-end Developer & Project Manager</p>
            <p className="work">The creative powerhouse behind color algorithms and seamless project management.</p>
            <a href="https://auraslogbook.vercel.app/logbooks/ayda">Logbook</a>
          </div>
          <div className="member">
            <h2 className="name">Zeynepnur Cavcar</h2>
            <p className="position">Back-end Developer</p>
            <p className="work">The technical wizard ensuring flawless functionality in our powerful back-end.</p>
            <a href="https://auraslogbook.vercel.app/logbooks/zeynep">Logbook</a>
          </div>
          <div className="member">
            <h2 className="name">Can Avşar</h2>
            <p className="position">Front-end Developer & UI/UX Designer</p>
            <p className="work">The artistic mind shaping stunning UI/UX designs for an immersive experience.</p>
            <a href="https://auraslogbook.vercel.app/logbooks/canavsar">Logbook</a> 
          </div>
          <div className="member">
            <h2 className="name">Ata Seren</h2>
            <p className="position">Back-end Developer</p>
            <p className="work">Our coding maestro behind the scenes, ensuring flawless back-end functionality.</p>
            <a href="https://auraslogbook.vercel.app/logbooks/ata">Logbook</a>
          </div>
        </div>
      </section>

      <section className="appSectionReports" id="reports">
        <div className="description">
          <h1>Reports</h1>
          <p className='text'>To access our reports, you can click the corresponding buttons below.</p>
          <a href="https://docs.google.com/document/d/1_gahyqeTS_7V4IgEQfHVB7ISDBhLCeAkJ4_P90mJknk/">Project Specifications</a>
          <a href="https://docs.google.com/document/d/14P-eXy6u3TxRiCrVGTzCAYaOqO5kyKenyLHbgcYC9II/">Analysis and Requirement</a>
          <a href="https://docs.google.com/document/d/19Di1V2xKOsz6DGKa9PNGr4RFw3Jnh7qTCEuLtEDQXw8/">Detailed Design Report</a>
          <a href="https://drive.google.com/file/d/1D36MpugBn7tlrmdADDDf1Ihaei_s6UgQ/view?usp=sharing">Final Report</a>
        </div>
        <div className="description">
          <h1 className='finaltitle'>Final Presentation</h1>
          <p className='text'>Explore our final presentation as you navigate through the slides, accessible via the button below.</p>
          <a  href="https://drive.google.com/file/d/1djb06fWtRXYYMvjP8cFqal9HDINvRZUn/view?usp=sharing">View our Presentation</a>
        </div>
      </section>


      <section className="appSection" id="about">

        <div className="bulletPointFinal">Unleash your creativity, unleash the power of The Aura Palette!</div>
        <a href="https://demo.aurapalette.app/">I'm ready, take me to the app!</a>
      </section>


      <div className="gradientLine2" />
      <footer className="App-footer">
        <div className='info'>
          <p><span>Group Code:</span> T2313<br/></p>
          <p><span>Supervisor: </span>Fazlı Can<br/></p>
          <p><span>Instructors:</span> Erhan Dolak and Tağmaç Topal<br/></p>
        </div>
        <div style={{paddingRight: "50px"}}>
          <p>© 2023 The Aura Palette</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
