import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <p className='footer-text'>© 2024 Roasterz</p>
        <div className="social-icons">
          {/* HREF Should be mailto */}
            <a href="mailto:Shop.roasterz@gmail.com">
            <img className='icon' src="https://img.icons8.com/?size=100&id=60688&format=png&color=ffffff" alt="GitHub"/>
            </a>
            {/* Href Should be call (Phone) */}
            <a href="tel:+919871812115">
            <img className='icon' src="https://img.icons8.com/?size=100&id=78382&format=png&color=ffffff" alt="LinkedIn"/>
            </a>
        </div>
    </footer>
  );
}
