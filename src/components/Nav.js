import React from 'react'

function Nav() {
  return (
    <nav>
      <div className='logo'>Dri<span style={{ color:  "#c1bcea" }}>sti </span> <span style={{ color:  "#968dde" }}>Sri</span><span style={{ color:  "#8f82ea" }}>vas</span><span style={{ color:  "#7766ea" }}>tava</span></div>
      <ul className='navlink'>
        <li><a href='#hero'>Hero</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav