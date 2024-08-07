
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>15-2, Kovaipudur Road, Coimbatore, TN IND</p>
            <p>10 Schalks Crossing Rd, Plainsboro, NJ USA</p>
          </div>
          <div className="col-md-4">
            <h5>Get In Touch:</h5>
            <p>Email us: care@dudeme.in</p>
            <p>Support Hours: 11am to 6pm</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us:</h5>
            <ul className="list-unstyled">
              <li>Need Help</li>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Order Tracking</li>
              <li>Initiate Return</li>
              <li>International Orders</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
