import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">James Ekasiba</div>
          <p className="footer-tagline">
            Product Designer & Mechanical Engineer • Building solutions that
            matter
          </p>
          <div className="footer-social">
            <button
              className="footer-social-btn"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github size={24} />
            </button>
            <button
              className="footer-social-btn"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <Linkedin size={24} />
            </button>
            <button
              className="footer-social-btn"
              onClick={() =>
                (window.location.href = "mailto:jamesekasiba123@gmail.com")
              }
            >
              <Mail size={24} />
            </button>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} James Ekasiba. All rights reserved. Designed with
              ❤️ in Nairobi, Kenya.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
