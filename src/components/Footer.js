import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <p className='footer-text'>© 2024 Flipper</p>
        <div className="social-icons">
            <a target='_blank' href="https://github.com/GarvGoel08">
            <img className='icon' src="https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff" alt="GitHub"/>
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/garvgoel2908/">
            <img className='icon' src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF" alt="LinkedIn"/>
            </a>
            <a target='_blank' href="https://www.instagram.com/garvgoel6/">
            <img className='icon' src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF" alt="Instagram"/>
            </a>
        </div>
    </footer>
  );
}
