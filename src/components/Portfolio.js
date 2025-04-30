import React, { useState } from 'react';
import useScrollAnimation from './useScrollAnimation';

function Portfolio() {
  const isVisible = useScrollAnimation('portfolio');
  const [activeSection, setActiveSection] = useState('projects');

  return (
    <div id='portfolio' className={isVisible ? 'show' : ''}>
      <div className='about-heading'>
        <h1 className='porthead'>
          Po<span style={{ color: "#c1bcea" }}>rtfo</span>
          <span style={{ color: "#968dde" }}>lio</span> 
          <span style={{ color: "#8f82ea" }}>Show</span>
          <span style={{ color: "#7766ea" }}>case</span>
        </h1>
        <p className='phrase'>
          Explore my journey through projects, certificates and technical expertise<br />
          Each section represents a milestone in my continuous learning path
        </p>
      </div>

      <div className='mainbody'>
       
        <div className='tab-buttons'>
          <button onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button>
          
          <button onClick={() => setActiveSection('tech')} className={activeSection === 'tech' ? 'active' : ''}>Technical Expertise</button>
          <button onClick={() => setActiveSection('certificates')} className={activeSection === 'certificates' ? 'active' : ''}>Certificates</button>
        </div>

       
        <div className='tab-content'>
          {activeSection === 'projects' && (
            <div className='projects'>
            <div className='projbox'>
            <img src="/images/7.png" alt="Hero Logo" width="205" height="100" />
            <h3>Hotel Booking Website</h3>
            <p>Hotel booking web page made with MERN technology. It has all basic features for user as well as admin.</p>
            <a href='https://github.com/Dristisrivastava/Hotel-Manangment.git'>Link</a>
            </div>
            <div className='projbox'>
            <img src="/images/weather.png" alt="Hero Logo" width="205" height="100" />
            <h3>Weather Detection Website</h3>
            <p>Weather Detection Website made using MERN technologies. Which has various features like 4 day weather forcast and many more.</p>
            <a href='https://weather-app-alpha-seven-84.vercel.app/'>Link</a>
            </div>
            <div className='projbox'>
            <img src="/images/chat.png" alt="Hero Logo" width="205" height="100" />
            <h3>Real Time Chat Website</h3>
            <p>Real Time Chating Website made with technologies like socket.io which has various room in which user can enter and chat which various people.</p>
            <a href='https://github.com/Dristisrivastava/Hotel-Manangment.git'>Link</a>
            </div>
            <div className='projbox'>
            <img src="/images/login.png" alt="Hero Logo" width="205" height="100" />
            <h3>Login Page</h3>
            <p>Login mage with attractive layout and all functionalitis lik forgot password, signin ect .</p>
            <a href='https://github.com/Dristisrivastava/Hotel-Manangment.git'>Link</a>
            </div>
            <div className='projbox'>
            <img src="/images/curr.png" alt="Hero Logo" width="205" height="100" />
            <h3>Currency Convertr Website</h3>
            <p>Website which converts Currency of various type into variousother type.</p>
            <a href='https://github.com/Dristisrivastava/Hotel-Manangment.git'>Link</a>
            </div>
            <div className='projbox'>
            <img src="/images/port.png" alt="Hero Logo" width="205" height="100" />
            <h3>Portfolio</h3>
            <p>Portfolio Websiteshowcasing my skills and experiences using attractive Website with animation.</p>
            <a href='https://github.com/Dristisrivastava/Hotel-Manangment.git'>Link</a>
            </div>
          </div>
        )}
        {activeSection === 'tech' && (
            <div className='techno'>
              <div className='techbox'>
                <img src="/images/htmllogo.png" alt='html' width="50px" height="50px" />
                <h3>HTML</h3>
              </div>
              <div className='techbox'>
              <img src="/images/css.png" alt='html' width="50px" height="50px" />
              <h3>CSS</h3>
              </div>
              <div className='techbox'>
              <img src="/images/React.png" alt='html' width="50px" height="50px" />              
              <h3>React</h3>
              </div>
              <div className='techbox'>
              <img src="/images/Node.js.png" alt='html' width="50px" height="50px" />              
              <h3>Node</h3>
              </div>
              <div className='techbox'>
              <img src="/images/MongoDB.png" alt='html' width="50px" height="50px" />              
              <h3>MongoDB</h3>
              </div>
              <div className='techbox'>
              <img src="/images/Express.png" alt='html' width="50px" height="50px" />              
              <h3>Express</h3>
              </div>
              <div className='techbox'>
              <img src="/images/Bootstrap.png" alt='html' width="50px" height="50px" />              
              <h3>Bootstrap</h3>
              </div>
              <div className='techbox'>
              <img src="/images/Git.png" alt='html' width="50px" height="50px" />              
              <h3>Git</h3>
              </div>
              <div className='techbox'>
              <img src="/images/C++ (CPlusPlus).png" alt='html' width="50px" height="50px" />              
              <h3>C++</h3>
              </div>
              <div className='techbox'>
              <img src="/images/Java.png" alt='html' width="50px" height="50px" />              
              <h3>Java</h3>
              </div>
              <div className='techbox'>
              <img src="/images/JavaScript.png" alt='html' width="50px" height="50px" />              
              <h3>JavaScript</h3>
              </div>
              <div className='techbox'>
              <img src="/images/Socket.io.png" alt='html' width="50px" height="50px" />              
              <h3>Socket.io</h3>
              </div>
            </div>
          )}
          {activeSection === 'certificates' && (
            <div className='certi'>
              <div className='certibox'><img src="/images/certificateone.png" alt='html' width="230px" height="200px" /> </div>
              <div className='certibox'><img src="/images/certificatetwo.png" alt='html' width="230px" height="200px" /> </div>
              <div className='certibox'><img src="/images/certificatethree.png" alt='html' width="230px" height="200px" /> </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
