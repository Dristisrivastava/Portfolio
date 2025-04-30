import React from 'react'
import  { useEffect, useState } from 'react';

function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  
  return (
    <div id='hero'>
      <div className={`content ${show ? 'show' : ''}`}>
        <h1>We<span className='b'>b</span> <br/><span className='de'>De</span><span className='ve'>ve</span><span className='lo'>lo</span><span className='per'>per</span></h1>
        <h4>Btech Cse Student</h4>
        <p>I am Dristi Srivastava, a final-year Computer Science student skilled in web development, seeking impactful internship opportunities.</p>
        <div className='herobtn'>
       <a href='#portfolio'><button>Project</button></a>
       <a href='#contact'> <button>Contact</button></a>
        </div>
        <div className='icons'>
        <a href='https://www.linkedin.com/in/dristi-srivastava-287300250/' target="_blank" rel="noopener noreferrer"><img src="/images/linkdin.png" alt="Hero Logo" width="30" height="30" /></a>
       <a href='https://github.com/Dristisrivastava' target="_blank" rel="noopener noreferrer"> <img src="/images/github.png" alt="Hero Logo" width="30" height="30" /></a>
        <a href='mailto:dristidpsbsc@gmail.com' target="_blank" rel="noopener noreferrer"><img src="/images/gmail.png" alt="Hero Logo" width="30" height="30" />  </a>      
        </div>
      </div>
      <div className={`heropic ${show ? 'show' : ''}`}>
      <img src="/images/logo.png" alt="Hero Logo" width="300" height="300" />
      </div>
    </div>
  )
}

export default Hero