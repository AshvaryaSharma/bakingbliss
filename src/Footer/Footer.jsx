import React from 'react'

function Footer() {
    return (
      <div className="footer">
        <div className="footer__section">
          <a href="https://www.facebook.com/Manvi1026" target="_blank">
            <i className="fab fa-facebook footer-icon"></i>
          </a>
          <a href="https://www.instagram.com/baking_bliss1026/" target="_blank">
            <i className="fab fa-instagram footer-icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/manvi-gupta-291a48199/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in footer-icon"></i>
          </a>
        </div>
        <div className="footer__section">
          <p>
            Copyright @2020 by <strong>Baking Bliss</strong>. All rights
            reserved.
          </p>
        </div>
      </div>
    );
}

export default Footer
