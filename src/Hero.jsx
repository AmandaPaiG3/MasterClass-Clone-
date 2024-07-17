import React from 'react';
import './Hero.css';
import './Header.css'; 


const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-left">
            <img src="src/assets/W4ENqHivGx6zfbHSMHcLc6UG.webp" alt="Steve Martin" />
        </div>
        <div className="hero-right">
            <h1>Steve <br></br>Martin</h1>
            <img src='src/assets/line.svg' className='divider'/>
            <h2>Teaches Comedy</h2>
            <p>Steve Martin teaches you everything from finding <br></br>your comedic voice to nailing your act.</p>
            <button className='signup-hero'>Sign Up</button>
            <p>Starting at $10/month (billed annually) for all <br></br> classes and sessions</p>
      </div>
    </section>
  );
};

export default Hero;
