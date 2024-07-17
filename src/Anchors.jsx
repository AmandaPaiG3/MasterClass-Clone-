import React, { useState, useEffect } from 'react';
import './Anchors.css';

const Anchors = () => {
  const [activeAnchor, setActiveAnchor] = useState('class-info');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['class-info', 'related', 'faq'];
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop - 10 && scrollPosition < offsetTop + offsetHeight) {
            setActiveAnchor(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="anchors">
      <ul>
        <li className={activeAnchor === 'class-info' ? 'active' : ''}>
          <a href="#class-info">Class Info</a>
        </li>
        <li className={activeAnchor === 'related' ? 'active' : ''}>
          <a href="#related">Related</a>
        </li>
        <li className={activeAnchor === 'faq' ? 'active' : ''}>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </nav>
  );
};

export default Anchors;
