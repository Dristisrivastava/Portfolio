import React, { useEffect, useState } from 'react';

function About() {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const aboutPosition = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (aboutPosition < windowHeight - 100) {
        setShowAbout(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='about' className={showAbout ? 'show' : ''}>
      <div className='about-heading'>
        <h1 className='aboutme'>About Me</h1>
        <p className='phrase'>Turning visions into impactful web experiences.</p>
      </div>
      <div className='about-mainbody'>
        <div className={`aboutcontent ${showAbout ? 'show' : ''}`}>
          <h1><span className='aboutme'>Hello I'm </span><br />Dristi Srivastava</h1>
          <p>Hi, I’m Dristi Srivastava, a passionate Computer Science student in my final year, specializing in web development. I love transforming ideas into seamless digital experiences through clean, efficient, and innovative code. Skilled in front-end and back-end technologies with other technical skills, I am always eager to learn, adapt, and take on new challenges.</p>
          <div className='aboutbtn'>
            <a href='https://drive.google.com/uc?export=download&id=1-tQhh7vgcujONe0_0ThDJj001eA7Qdew' target='_blank' rel='noopener noreferrer'>
              <button>Download CV</button>
            </a>
            <a href='#portfolio'><button>View Project</button></a>
          </div>
        </div>
        <div className={`profilepic ${showAbout ? 'show' : ''}`}>
          <img src="/images/formal.png" alt="Hero Logo" width="200" height="200" />
        </div>
      </div>
    </div>
  );
}

export default About;
