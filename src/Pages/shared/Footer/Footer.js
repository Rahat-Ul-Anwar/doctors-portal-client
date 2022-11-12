import React from "react";
import { Link } from "react-router-dom";
import footer from '../../../assets/images/footer.png';

const Footer = () => {
  return (
      <footer className=" p-20"
          style={{
              background: `url(${footer})`,
              backgroundSize: 'cover'
          }} 
       >
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Emergency Checkup</Link>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <Link className="link link-hover">ORAL HEALTH</Link>
          <Link className="link link-hover">Fluoride Treatment</Link>
          <Link className="link link-hover">Cavity Filling</Link>
          <Link className="link link-hover">Teath Whitening</Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <Link className="link link-hover">New York - 101010 Hudson</Link>
      
        </div>
      </div>
      <div className="text-center mt-10">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
