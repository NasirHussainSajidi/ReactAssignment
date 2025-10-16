import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-500 text-white flex text-center gap-10 pr-5 pl-5 h-70 text-base/9 hover-pointer'>
    <div >
      <h3>About Us</h3>
      <p>Your Company is dedicated to providing excellent services. Learn more about our mission and values.</p>
    </div>
    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Contact Info</h3>
      <p>Email: info@yourcompany.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 Main St, City, Country</p>
    </div>
    <div class="footer-section">
      <h3>Follow Us</h3>
      <div class="social-links">
        <a href="#" class="social-icon">Facebook</a>
        <a href="#" class="social-icon">Twitter</a>
        <a href="#" class="social-icon">Instagram</a>
        <a href="#" class="social-icon">LinkedIn</a>
      </div>
    </div>
  <div class="footer-bottom">
    <p>&copy; 2025 Your Company. All rights reserved.</p>
  </div>
    </div>
  )
}

export default Footer
