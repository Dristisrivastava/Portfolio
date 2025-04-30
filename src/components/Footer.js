import React from 'react';

function Footer() {
  return (
    <section id="Footer" style={{ backgroundColor: '#1c1b2f', color: '#fff', padding: '20px 0' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '10px' }}>
          Made with 💜 by <strong>Dristi Srivastava</strong>
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <a href='https://www.linkedin.com/in/dristi-srivastava-287300250/' target="_blank" rel="noopener noreferrer">
            <img src="/images/linkdin.png" alt="LinkedIn" width="25" height="25" />
          </a>
          <a href='https://github.com/Dristisrivastava' target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub" width="25" height="25" />
          </a>
          <a href='mailto:dristidpsbsc@gmail.com' target="_blank" rel="noopener noreferrer">
            <img src="/images/gmail.png" alt="Gmail" width="25" height="25" />
          </a>
        </div>
        <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>© {new Date().getFullYear()} Dristi Srivastava. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
