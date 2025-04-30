import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import useScrollAnimation from './useScrollAnimation';

function Contact() {
  const form = useRef();
  const isVisible = useScrollAnimation('contact');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zz98fec', 'template_hu5govf', form.current, '_ZmXlzxd7dbU-RLQ2')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message.");
      });

    e.target.reset(); 
  };

  return (
    <section id="contact" className={isVisible ? 'show' : ''}>
      <div className='about-heading'>
        <h1 className='porthead'>
          Co<span style={{ color: "#c1bcea" }}>nt</span>
          <span style={{ color: "#968dde" }}>act </span> 
          <span style={{ color: "#8f82ea" }}>m</span>
          <span style={{ color: "#7766ea" }}>e</span>
        </h1>
      </div>
      <div className='contactcon'>
        <div className='git'>
          <h1>Get In Touch</h1>
          <form ref={form} onSubmit={sendEmail}>
            <label>Your Name <br/>
              <input type='text' name='name' placeholder='Username' required /><br/>
            </label>
            <label>Your Email <br/>
              <input type='email' name='email' placeholder='Email' required /><br/>
            </label>
            <label>Subject <br/>
              <input type='text' name='title' placeholder='Subject' required /><br/>
            </label>
            <label>Msg <br/>
              <textarea name='message' placeholder="Write your message" rows="5" cols="30" required></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className='cwm'>
          <p>Connect Via </p>
          <div className='iconab'>
            <a href='https://www.linkedin.com/in/dristi-srivastava-287300250/' target="_blank" rel="noopener noreferrer"><img src="/images/linkdin.png" alt="LinkedIn" width="30" height="30" /></a>
            <a href='https://github.com/Dristisrivastava' target="_blank" rel="noopener noreferrer"><img src="/images/github.png" alt="GitHub" width="30" height="30" /></a>
            <a href='mailto:dristidpsbsc@gmail.com' target="_blank" rel="noopener noreferrer"><img src="/images/gmail.png" alt="Email" width="30" height="30" /></a>      
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
