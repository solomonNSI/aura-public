import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css';
import { saveAs } from 'file-saver';

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
      <div className="gradientLine"></div>
      
      <section className="appSection" id="about">
        <div className='title'>The Aura Palette: where words radiate with colors.</div>
        <div style={{padding: "0 100px"}}>
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
                        <div className="bulletPoint">An awe-inspiring Journey</div>
                        Embark on an awe-inspiring journey where words and colors unite to shape extraordinary narratives. Join us in this dynamic fusion of art and technology, where the boundaries of creativity are transcended.<br/><br/>
                    </div> 
                </div>


                <div className="bulletPointFinal">Unleash your creativity, unleash the power of The Aura Palette!</div>
            </div>
            <a href="https://demo.aurapalette.app/">Try the Demo</a>
        </div>
    
      </section>

      <section className="appSection" id="details">
        <h1>Project Details</h1>
        <p className="description">Bilkent University<br/>Academic Year 2022-2023<br/>CS491/492 Senior Project<br/></p>
        <p className="description"><span>Group Code:</span> T2313<br/></p>
        <p className="description"><span>Supervisor: </span>Fazlı Can<br/></p>
        <p className="description"><span>Instructors:</span> Erhan Dolak and Tağmaç Topal<br/></p>
      </section>

      <section className="appSection" id="team">
        <h1>Meet Our Team</h1>
        <p className = "description">This is Team Aura. Knowing each other, staying in communication, and helping each other made us a good team. Periodic meetings and roadmaps helped us achieve our goals.</p>
        <div className="members">
          <div className="member">
            <h2 className="name">Ata Seren</h2>
            <p className="position">Back-end Developer</p>
            <p className="work">Our coding maestro behind the scenes, ensuring flawless back-end functionality.</p>
          </div>
          <div className="member">
            <h2 className="name">Ayda Yurtoğlu</h2>
            <p className="position">Front-end Developer & Project Manager</p>
            <p className="work">The creative powerhouse behind color algorithms and seamless project management.</p>
          </div>
          <div className="member">
            <h2 className="name">Can Avşar</h2>
            <p className="position">Front-end Developer & UI/UX Designer</p>
            <p className="work">The artistic mind shaping stunning UI/UX designs for an immersive experience.</p>
          </div>
          <div className="member">
            <h2 className="name">Suleyman Hanyyev</h2>
            <p className="position">Team Lead & ML Engineer</p>
            <p className="work">Our dynamic R&D engineer, guiding success with expertise in ML engineering.</p>
          </div>
          <div className="member">
            <h2 className="name">Zeynepnur Cavcar</h2>
            <p className="position">Back-end Developer</p>
            <p className="work">The technical wizard ensuring flawless functionality in our powerful back-end.</p>
          </div>
        </div>
      </section>
      
      <section className="appSection" id="reports">
        <h1>Reports</h1>
        <p className="description">We have created reports throughout the term that explain our analysis, requirements, and detailed design. To access our reports, you can click the corresponding buttons below.</p>
        <a href="https://docs.google.com/document/d/1_gahyqeTS_7V4IgEQfHVB7ISDBhLCeAkJ4_P90mJknk/">Project Specifications Report (Google Drive)</a>
        <a href="https://docs.google.com/document/d/14P-eXy6u3TxRiCrVGTzCAYaOqO5kyKenyLHbgcYC9II/">Analysis and Requirement Report (Google Drive)</a>
        <a href="https://docs.google.com/document/d/19Di1V2xKOsz6DGKa9PNGr4RFw3Jnh7qTCEuLtEDQXw8/">Detailed Design Report (Google Drive)</a>
      </section>
      
      <section className="appSection" id="logbook">
        <h1>Logbook</h1>
        <p className="description">We have logbooks throughout the term that explain what we have done on the project. To access our logbooks, you can click the button below. </p>
        <a href="https://auraslogbook.vercel.app/logbooksall">Access our Logbooks</a>
      </section>

      <section className="appSection" id="demo">
        <h1>Try the Application</h1>
        <p className='description'>We invite you to explore our app and unleash your creativity by generating palettes with our advanced AI tool. If you have any feedback, we encourage you to utilize our feedback tool by clicking on the feedback button located on the top navigation bar of the app.</p>
        <a href="https://demo.aurapalette.app/">Try the Demo</a>
      </section>

    </div>
  );
}

export default App;
